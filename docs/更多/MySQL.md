## 一、对数据库的常用操作

| 功能                       | **SQL**                                                      |
| -------------------------- | ------------------------------------------------------------ |
| 查看所有的数据库           | show databases；                                             |
| 创建数据库                 | CREATE DATABASE IF NOT EXISTS demo2 DEFAULT CHARACTER SET utf8; |
| 切换 (选择要操作的) 数据库 | use mydb1；                                                  |
| 删除数据库                 | drop database [if exists] mydb1；                            |
| 修改数据库编码             | alter database mydb1 character set utf8;                     |

## 二、对表操作

| 功能                       | **SQL**                                                |
| -------------------------- | ------------------------------------------------------ |
| 查看当前数据库的所有表名称 | show tables;                                           |
| 查看指定某个表的创建语句   | show create table 表名；                               |
| 查看表结构                 | desc 表名                                              |
| 删除表                     | drop table 表名                                        |
| 修改表添加列               | alter table 表名 add 列名 类型(长度) [约束];           |
| 修改列名添加类型           | alter table 表名 change 旧列名 新列名 类型(长度) 约束; |
| 修改表删除列               | alter table 表名 drop 列名;                            |
| 修改表名                   | rename table 表名 to 新表名;                           |

## 三、约束

#### 主键约束(primary key) PK

MySQL主键约束是一个列或者多个列的组合，其值能唯一地标识表中的每一行,方便在RDBMS中尽快的找到某一行。
主键约束相当于 唯一约束 + 非空约束 的组合，主键约束列不允许重复，也不允许出现空值。
每个表最多只允许一个主键
主键约束的关键字是：primary key
当创建主键的约束时，系统默认会在所在的列和列组合上建立对应的唯一索引。

```sql
-- 主键
CREATE TABLE stu1(
	id INT PRIMARY KEY,
	name VARCHARACTER(20),
	source FLOAT
) DEFAULT CHARACTER SET utf8;

-- 联合主键
CREATE TABLE stu2(
	id INT,
	name VARCHARACTER(20),
	source FLOAT,
	PRIMARY KEY(id,name)
)

-- 删除主键
ALTER TABLE [table] DROP PRIMARY KEY;
```

#### 自增长约束(auto_increment)

默认情况下，auto_increment的初始值是 1，每新增一条记录，字段值自动加 1。
一个表中只能有一个字段使用 auto_increment约束，且该字段必须有唯一索引，以避免序号重复（即为主键或主键的一部分）。
auto_increment约束的字段必须具备 NOT NULL 属性。
auto_increment约束的字段只能是整数类型（TINYINT、SMALLINT、INT、BIGINT 等。
auto_increment约束字段的最大值受该字段的数据类型约束，如果达到上限，auto_increment就会失效。

```sql
-- 自增长约束
CREATE TABLE stu3(
	id INT PRIMARY KEY auto_increment,
	name VARCHARACTER(20)
) auto_increment = 100;
INSERT INTO stu3(`name`) VALUES('张三');
INSERT INTO stu3(`name`) VALUES('张三'),('李四');

-- 修改表格的自增长初始值
ALTER TABLE stu1 auto_increment=10;

delete    数据之后自动增长从断点开始
truncate    数据之后自动增长从默认起始值开始
```



#### 非空约束(not null)

非空约束（not null）指字段的值不能为空。对于使用了非空约束的字段，如果用户在添加数据时没有指定值，数据库系统就会报错。

```sql
-- 非空约束  
CREATE TABLE stu4(
	id INT NOT NULL,
	name VARCHARACTER(20) NOT NULL,
	souce FLOAT
)

INSERT INTO stu4 VALUES(1,NULL,NULL);  --  Column 'name' cannot be null

-- 指定非空约束
alter table t_user7 modify name varchar(20) not null; 

-- 删除非空约束
alter table t_user7 modify name varchar(20) ; 
```

#### 唯一性约束(unique)

唯一约束（Unique Key）是指所有记录中字段的值不能重复出现。例如，为 id 字段加上唯一性约束后，每条记录的 id 值都是唯一的，不能出现重复的情况。

```sql
-- 唯一约束
CREATE TABLE stu5( 
 id int , 
 name varchar(20) , 
 phone_number varchar(20) UNIQUE -- 指定唯一约束 
);


-- 添加唯一约束
alter table t_user9 add constraint unique_ph unique(phone_number);

-- 删除唯一约束
alter table t_user9 drop index unique_ph;
```



#### 默认约束(default)

MySQL 默认值约束用来指定某列的默认值。

```sql
create table t_user10 ( 
  id int , 
  name varchar(20) , 
  address varchar(20) default ‘北京’ -- 指定默认约束 
);

-- 添加唯一约束
alter table t_user11 modify address varchar(20) default  ‘北京’;
-- 删除唯一约束
alter table t_user11 modify column address varchar(20) default null;
```

- #### 零填充约束(zerofill)

  插入数据时，当该字段的值的长度小于定义的长度时，会在该值的前面补上相应的02、zerofill默认为int(10)3、当使用zerofill 时，默认会自动加unsigned（无符号）属性，使用unsigned属性后，数值范围是原值的2倍，例如，有符号为-128~+127，无符号为0~256。

  ```sql
  -- 零填充约束
  CREATE TABLE stu6 ( 
    id INT ZEROFILL, -- 零填充约束
    name VARCHAR(20)   
  );
  INSERT INTO stu6 VALUES(1,'张三');
  
  -- 删除零填充约束
  ALTER TABLE stu6 MODIFY id INT;
  ```

## 四、基本查询

#### 简单查询

```sql
SELECT  *  FROM product;  -- 查全表
SELECT pname as	c  FROM product WHERE pname='三只松鼠'; //
-- 表别名: 
select * from product as p;
-- 列别名：
select pname as pn from product; 
-- 去重查询  
select distinct price from product;
```

#### 运算符操作

1. 算数运算符

   | **算术运算符**       | **说明**           |
   | -------------------- | ------------------ |
   | **+**                | 加法运算           |
   | **-**                | 减法运算           |
   | *****                | 乘法运算           |
   | **/** **或** **DIV** | 除法运算，返回商   |
   | **%** **或** **MOD** | 求余运算，返回余数 |

2. 比较运算符

   | **比较运算符**                | **说明**                                                     |
   | ----------------------------- | ------------------------------------------------------------ |
   | **=**                         | 等于                                                         |
   | **<**  **和**  **<=**         | 小于和小于等于                                               |
   | **>**  **和**  **>=**         | 大于和大于等于                                               |
   | **<=>**                       | 安全的等于，两个操作码均为NULL时，其所得值为1；而当一个操作码为NULL时，其所得值为0 |
   | **<>** **或   **!=            | 不等于                                                       |
   | **IS NULL** **或** **ISNULL** | 判断一个值是否为 NULL                                        |
   | **IS NOT NULL**               | 判断一个值是否不为 NULL                                      |
   | **LEAST**                     | 当有两个或多个参数时，返回最小值                             |
   | **GREATEST**                  | 当有两个或多个参数时，返回最大值                             |
   | **BETWEEN AND**               | 判断一个值是否落在两个值之间                                 |
   | **IN**                        | 判断一个值是IN列表中的任意一个值                             |
   | **NOT IN**                    | 判断一个值不是IN列表中的任意一个值                           |
   | **LIKE**                      | 通配符匹配                                                   |
   | **REGEXP**                    | 正则表达式匹配                                               |

3. 逻辑运算符

   | **逻辑运算符**           | **说明** |
   | ------------------------ | -------- |
   | **NOT** **或者** **!**   | 逻辑非   |
   | **AND** **或者** **&&**  | 逻辑与   |
   | **OR** **或者** **\|\|** | 逻辑或   |
   | **XOR**                  | 逻辑异或 |

4. 位运算符

   位运算符是在二进制数上进行计算的运算符。位运算会先将操作数变成二进制数，进行位运算。然后再将计算结果从二进制数变回十进制数。

   | **位运算符** | **说明**               |
   | ------------ | ---------------------- |
   | **\|**       | 按位或                 |
   | **&**        | 按位与                 |
   | **^**        | 按位异或               |
   | **<<**       | 按位左移               |
   | **>>**       | 按位右移               |
   | **~**        | 按位取反，反转所有比特 |

#### 排序查询

```sql
select 
 字段名1，字段名2，……
from 表名
order by 字段名1 [asc|desc]，字段名2[asc|desc]……
```

1.`asc`代表升序，`desc`代表降序，如果不写默认升序
2.order by用于子句中可以支持单个字段，多个字段，表达式，函数，别名
3.order by子句，放在查询语句的最后面。LIMIT子句除外

#### 聚合查询

| **聚合函数** | **作用**                                                     |
| ------------ | ------------------------------------------------------------ |
| **count()**  | 统计指定列不为NULL的记录行数；                               |
| **sum()**    | 计算指定列的数值和，如果指定列类型不是数值类型，那么计算结果为0 |
| **max()**    | 计算指定列的最大值，如果指定列是字符串类型，那么使用字符串排序运算； |
| **min()**    | 计算指定列的最小值，如果指定列是字符串类型，那么使用字符串排序运算； |
| **avg()**    | 计算指定列的平均值，如果指定列类型不是数值类型，那么计算结果为0 |

#### 分组查询

```sql
select 字段1,字段2… from 表名 group by 分组字段 having 分组条件;select category_id ,count(*) from product group by category_id ;select category_id ,count(*) from product group by category_id having count(*) > 1;
```



#### 分页查询

```sql
-- 方式1-显示前n条
select 字段1，字段2... from 表明 limit n
-- 方式2-分页显示
select 字段1，字段2... from 表明 limit m,nm: 整数，表示从第几条索引开始，计算方式 （当前页-1）*每页显示条数n: 整数，表示查询多少条数据
```

#### INSERT INTO SELECT 

将一张表的数据导入到另一张表中，可以使用INSERT INTO SELECT语句 

```SQL
insert into Table2(field1,field2,…) select value1,value2,… from Table1 或者：insert into Table2 select * from Table1
```

## 五、多表查询

#### 创建数据

```sql
CREATE TABLE IF NOT EXISTS dept3(	deptno VARCHAR(20) PRIMARY KEY,	name VARCHAR(20))
-- 创建员工表
CREATE TABLE IF NOT EXISTS emp3(  eid VARCHAR(20) PRIMARY KEY , -- 员工编号  
                                ename VARCHAR(20), -- 员工名字  
                                age INT,  -- 员工年龄  
                                dept_id VARCHAR(20)  -- 员工所属部门);
                                insert into dept3 values('1001','研发部');
                                insert into dept3 values('1002','销售部');
                                insert into dept3 values('1003','财务部');
                                insert into dept3 values('1004','人事部');
                                insert into emp3 values('1','乔峰',20, '1001');
                                insert into emp3 values('2','段誉',21, '1001');
                                insert into emp3 values('3','虚竹',23, '1001');
                                insert into emp3 values('4','阿紫',18, '1001');
                                insert into emp3 values('5','扫地僧',85, '1002');
                                insert into emp3 values('6','李秋水',33, '1002');
                                insert into emp3 values('7','鸠摩智',50, '1002');
                                insert into emp3 values('8','天山童姥',60, '1003');
                                insert into emp3 values('9','慕容博',58, '1003');
                                insert into emp3 values('10','丁春秋',71, '1005');
```

#### 交叉连接查询

1. 交叉连接查询返回被连接的两个表所有数据行的笛卡尔积
2. 笛卡尔积可以理解为一张表的每一行去和另外一张表的任意一行进行匹配
3. 假如A表有m行数据，B表有n行数据，则返回m*n行数据
4. 笛卡尔积会产生很多冗余的数据，后期的其他查询可以在该集合的基础上进行条件筛选

```sql
-- 交叉查询
SELECT * FROM dept3,emp3;
```

#### 内连接查询

​		内连接查询 求多张表的交集

```sql
隐式内连接（SQL92标准）：select * from A,B where 条件; 显示内连接（SQL99标准）：select * from A inner join B on 条件;
-- 内连接查询-- 查询每个部门的所属员工 
SELECT * FROM dept3 INNER JOIN emp3 WHERE dept3.deptno = emp3.dept_id;SELECT * FROM dept3,emp3 WHERE deptno  = dept_id;
-- 查询研发部和销售部的所有员工
SELECT * FROM dept3 INNER JOIN emp3 WHERE dept3.deptno = emp3.dept_id AND dept3.name IN('研发部','销售部');SELECT * FROM dept3 INNER JOIN emp3 WHERE dept3.deptno = emp3.dept_id AND ( dept3.name ='研发部' || dept3.name ='销售部'); 
-- 查询每个部门的人数 并且升序排序
SELECT deptno,COUNT(1) AS total_count FROM dept3,emp3 WHERE dept3.deptno = emp3.dept_id GROUP BY deptno ORDER BY total_count;
-- 查询人数大于等于3的部门，并按人数降序
SELECT deptno,name,COUNT(1) AS total FROM dept3 INNER JOIN emp3  ON dept3.deptno = emp3.dept_id GROUP BY deptno HAVING total >= 3 ORDER BY total DESC;
```

#### 外连接查询

> 外连接分为左外连接（left outer join）、右外连接(right outer join)，满外连接(full outer join)。
> 注意：oracle里面有full join,可是在mysql对full join支持的不好。我们可以使用union来达到目的。

![image-20211226112451882](https://gxming.oss-cn-shenzhen.aliyuncs.com/my_study_notesimage-20211226112451882.png)

1. 左外连接

   ```sql
   left outer joinselect * from A left outer join B on 条件;--  查询哪些部门有员工  哪些没有员工
   SELECT * FROM dept3 LEFT OUTER JOIN emp3 ON dept3.deptno = emp3.dept_id;
   ```

2. 右外连接

   ```sql
   right outer join select * from A right outer join B on 条件; SELECT * FROM dept3 RIGHT OUTER JOIN emp3 ON dept3.deptno = emp3.dept_id;
   ```

3. 满外连接

   ```sql
   full outer joinselect * from A full outer join B on 条件;-- 使用union关键字实现左外连接和右外连接的并集
   SELECT * FROM dept3 LEFT OUTER JOIN emp3 ON dept3.deptno = emp3.dept_idUNIONSELECT * FROM dept3 RIGHT OUTER JOIN emp3 ON dept3.deptno = emp3.dept_id;
   ```

#### 子查询

- 子查询就是指的在一个完整的查询语句之中，嵌套若干个不同功能的小查询，从而一起完成复杂查询的一种编写形式，通俗一点就是包含select嵌套的查询。

- 子查询可以返回的数据类型一共分为四种：

  - 单行单列：返回的是一个具体列的内容，可以理解为一个单值数据；
  - 单行多列：返回一行数据中多个列的内容；
  - 多行单列：返回多行记录之中同一列的内容，相当于给出了一个操作范围；
  - 多行多列：查询返回的结果是一张临时表

  ```sql
  -- 查询年龄最大的员工信息，显示信息包含员工号、员工名字，员工年龄
  SELECT eid,ename,age FROM emp3 WHERE age = (SELECT MAX(age) from emp3);
  -- 查询研发部20岁以下的员工信息,包括员工号、员工名字，部门名字
  SELECT eid,ename,age,name FROM (SELECT * FROM dept3 WHERE name = '研发部')t1,(SELECT * FROM emp3 WHERE age < 20) t2;
  ```

  

- 子查询关键字

  - `ALL`    与子查询返回的所有值比较为true 则返回true
  - `ANY`    与子查询返回的任何值比较为true 则返回true   任意一个为true即可
  - `SOME`  SOME和ANY作用差不多
  - `IN`      用于判断某个记录的值，是否在指定的集合中，在IN关键字前边加上not可以将条件反过来
  - `EXISTS`    该子查询如果“有数据结果”(至少返回一行数据)， 则该EXISTS() 的结果为“true”，外层查询执行
    该子查询如果“没有数据结果”（没有任何数据返回），则该EXISTS()的结果为“false”，外层查询不执行
    EXISTS后面的子查询不返回任何实际数据，只返回真或假，当返回真时 where条件成立
    注意，EXISTS关键字，比IN关键字的运算效率高，因此，在实际开发中，特别是大数据量时，推荐使用EXISTS关键字

  ```sql
  --查询年龄大于1003部门所有年龄的员工信息SELECT * FROM emp3 WHERE age > ALL(SELECT age FROM emp3 WHERE dept_id = '1003');
  -- 查询研发部和销售部的员工信息，包含员工号、员工名字
  SELECT eid,ename FROM emp3 WHERE dept_id IN (SELECT deptno FROM dept3 WHERE name IN ('研发部','销售部'));
  -- 查询60岁以上的员工  有则输出
  SELECT * FROM emp3  AS a WHERE EXISTS(SELECT * FROM emp3 AS b WHERE a.age > 60);
  ```

#### 表自关联

- MySQL有时在信息查询时需要进行对表自身进行关联查询，即一张表自己和自己关联，一张表当成多张表来用。注意自关联时表必须给表起别名。

  ```sql
  select 字段列表 from 表1 a , 表1 b where 条件;或者 select 字段列表 from 表1 a [left] join 表1 b on 条件;SELECT b.eid,b.ename,b.manager_id,a.ename FROM t_sanguo AS a, t_sanguo AS b WHERE a.eid = b.manager_id;
  ```

## 六、视图

#### 定义

> 视图（view）是一个虚拟表，非真实存在，其本质是根据SQL语句获取动态的数据集，并为其命名，用户使用时只需使用视图名称即可获取结果集，并可以将其当作表来使用。
>
> 数据库中只存放了视图的定义，而并没有存放视图中的数据。这些数据存放在原来的表中。
>
> 使用视图查询数据时，数据库系统会从原来的表中取出对应的数据。因此，视图中的数据是依赖于原来的表中的数据的。一旦表中的数据发生改变，显示在视图中的数据也会发生改变。

**作用：**

1. 简化代码，可以把重复使用的查询封装成视图重复使用，同时可以使复杂的查询易于理解和使用。
2. 安全原因，如果一张表中有很多数据，很多信息不希望让所有人看到，此时可以使用视图视，如：社会保险基金表，可以用视图只显示姓名，地址，而不显示社会保险号和工资数等，可以对不同的用户，设定不同的视图。

#### 视图的创建

```sql
create [or replace] [algorithm = {undefined | merge | temptable}]
view view_name [(column_list)]
as select_statement
[with [cascaded | local] check option]

参数说明：
（1）algorithm：可选项，表示视图选择的算法。
（2）view_name ：表示要创建的视图名称。
（3）column_list：可选项，指定视图中各个属性的名词，默认情况下与SELECT语句中的查询的属性相同。
（4）select_statement ：表示一个完整的查询语句，将查询记录导入视图中。
（5）[with [cascaded | local] check option]：可选项，表示更新视图时要保证在该视图的权限范围之内。
```

#### 修改视图

> 修改视图是指修改数据库中已存在的表的定义。当基本表的某些字段发生改变时，可以通过修改视图来保持视图和基本表之间一致。MySQL中通过CREATE OR REPLACE VIEW语句和ALTER VIEW语句来修改视图。

```sql
alter view 视图名 as select语句

-- 更新视图
ALTER VIEW view1_emp 
AS 
SELECT ename FROM emp;
```

#### 更新视图

> 某些视图是可更新的。也就是说，可以在UPDATE、DELETE或INSERT等语句中使用它们，以更新基表的内容。对于可更新的视图，在视图中的行和基表中的行之间必须具有一对一的关系

- 如果视图包含下述结构中的任何一种，那么它就是不可更新的：
- 聚合函数（SUM(), MIN(), MAX(), COUNT()等）
- DISTINCT
- GROUP BY
- HAVING
- UNION或UNION ALL
- 位于选择列表中的子查询
  - JOIN
  - FROM子句中的不可更新视图
  - WHERE子句中的子查询，引用FROM子句中的表。
  - 仅引用文字值（在该情况下，没有要更新的基本表）

#### 其他操作

- 重命名视图

  ```sql
  -- rename table 视图名 to 新视图名; 
  rename table view1_emp to my_view1
  ```

- 删除视图

  ```sql
  -- drop view 视图名[,视图名…];
  drop view if exists view_student;
  -- 删除视图时，只能删除视图的定义，不会删除数据。
  ```

  
