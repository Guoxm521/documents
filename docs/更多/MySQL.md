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

- #### 主键约束(primary key) PK

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

- #### 自增长约束(auto_increment)

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

  

- #### 非空约束(not null)

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

- #### 唯一性约束(unique)

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

  

- #### 默认约束(default)

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

  


