## 一、安装Docker

### 1.windows

在Windows下，docker是默认安装在C盘之下的，

首先使用mklink 进行联接：

```bash
C:\Windows\system32>mklink /J "C:\Program Files\Docker" "D:\Program Files\Docker"
```

运行结果如下：

`C:\Program Files\Docker是Docker`的默认安装位置，`D:\Program Files\Docker`是你希望它安装的位置，一旦设立了联接，Docker的安装器会以为它安装在了`C:\Program Files\Docker`但实际上所有文件都被安装在了`D:\Program Files\Docker`

注1：希望它安装的位置可以是任意硬盘上已有的盘符，但是C:\Program Files里不能有Docker文件夹否则会出现文件夹已存在的警告并联接失败。
注2：需要在管理员模式下运行。

### 2.linux

安装我们直接使用`shell`脚本来进行安装，安装脚本的地址如下   `get.docker.com`

可以直接使用curl命令下载这个shell脚本

```jsx
curl -fsSL get.docker.com -o get-docker.sh
```

执行shell脚本

```jsx
sh get-docker.sh
```

回车后就开始安装Docker了。这里需要注意，如果你不是`root`用户，是需要使用`sudo`命令或者给用户sudo权限。

安装过程大概要3-4分钟左右，也是主要看网速和服务器性能。

[检测是否安装成功](https://jspang.com/detailed?id=75#toc312)

安装完成后，依然通过`docker version`命令检查是否安装成功。

如果只显示下面的这些信息，也就是只启动了客户端`Client`。

```jsx
Client: Docker Engine - Community
 Version:           20.10.7
 API version:       1.41
 Go version:        go1.13.15
 Git commit:        f0df350
 Built:             Wed Jun  2 11:58:10 2021
 OS/Arch:           linux/amd64
 Context:           default
 Experimental:      true
Cannot connect to the Docker daemon at unix:///var/run/docker.sock. Is the docker daemon running?
```

这时候要使用`systemctl start`命令，开启Docker服务端。

```jsx
sudo systemctl start docker
systemctl restart docker.service    重启
```

开启后，再使用`sudo docker version`来看一下，如果有类似下面的信息，说明已经安装成功了。

```jsx
Client: Docker Engine - Community
 Version:           20.10.7
 API version:       1.41
 Go version:        go1.13.15
 Git commit:        f0df350
 Built:             Wed Jun  2 11:58:10 2021
 OS/Arch:           linux/amd64
 Context:           default
 Experimental:      true

Server: Docker Engine - Community
 Engine:
  Version:          20.10.7
  API version:      1.41 (minimum version 1.12)
  Go version:       go1.13.15
  Git commit:       b0f5bc3
  Built:            Wed Jun  2 11:56:35 2021
  OS/Arch:          linux/amd64
  Experimental:     false
 containerd:
  Version:          1.4.8
  GitCommit:        7eba5930496d9bbe375fdf71603e610ad737d2b2
 runc:
  Version:          1.0.0
  GitCommit:        v1.0.0-0-g84113ee
 docker-init:
  Version:          0.19.0
  GitCommit:        de40ad0
```

## 二、创建容器的相关命令

### 创建容器

```jsx
docker container run < image name >
```

### 查看容器

```jsx
docker container ls     或者 docker container ps
CONTAINER ID : 容器对应的ID，这个是唯一的
IMAGE : 使用的镜像名称，显示不同
COMMAND : 执行的相关命令
CREATED: 创建的时间
STATUS: 目前镜像的状态，一般会有两种状态Up和Exited.
PORTS: 协议和端口
NAMES: 容器的名称，名字是Docker随机生成的
```

### 停止容器

```jsx
docker container stop <name or ID>   停止单个容器
docker container stop  <ID1  ID2  ID3> 停止多个容器
```

### 删除容器

```jsx
docker container rm <name or ID>
```

### 简写命令

- 容器的创建：`docker container run nginx` 简写方法 `docker run nginx`
- 容器的列出(up): `docker container ls` 简写方法` docker ps`
- 容器的列出（up和exit）：`docker container ls -a` 简写方法` docker ps -a`
- 容器的停止 ：` docker container stop `简写方法 `docker stop`
- 容器的删除：`docker container rm` 简写方法` docker rm`
- 容器重命名 `docker rename [old_name|container ID] Information-platform-demo`

### 查看所有的容器ID

```jsx
docker container ps -aq
```

#### 组合功能  删除多个容器

```jsx
docker container rm $(docker container ps -aq)
```

### 端口映射

```javascript
docker container run -p 80:80 nginx
```

第一个端口是映射到服务器本机的端口;第二个端口是Docker容器使用的端口。 比如你想把Docker的80端口，映射到服务器的90端口。

### 运行模式

> attached模式在前台运行，detached模式在后台运行。

#### attached模式

当你打开`127.0.0.1`网址的时候，`PowerShell`上打印出了相关的日志（log），平且每访问一次，都会增加一条日志。也就是说Docker容器的日志会实时的展现到窗口并且占用此端口。这种模式叫做`attached`模式。

在windows系统下并不是一个完整的attached模式，只是帮我们打印出了Log。现在到Linux服务器上，这时候你按`Ctrl+C`,就会停止掉`Docker`服务。而现实中我们工作的环境恰恰是这种Linux环境。

也就是在Linux上你的操作命令，会直接传递个`Docker容器`。

attached模式更适用于容器和程序的调试阶段。

#### detached模式

`detached模式`的开启方法，就是加一个参数`-d`或者`--detach`。

```jsx
docker run -d -p 80:80 nginx
```

`detached模式转换attached模式`

在运行之后，也有需要调试的时候，Docker提供了两个模式间的转换。比如现在要把`detached`模式的容器，改为`attched`模式。

```jsx
docker  attach <ID or Image Name>
```

#### 查看日志

```jsx
docker container logs <ID or Image name>
```

追踪日志

```jsx
docker container logs -f <ID or Image name>
```

### docker导出、导入镜像

```jsx
//导出
docker image save
docker image save busybox:latest -o mybusybox.image

//导入
docker image load -i .\mybusybox.image
```



## 三、实际操作

### 使用nginx

命令：

```nginx
一：
docker run --name nginx -p 80:80 -v /home/docker-nginx/nginx.conf:/etc/nginx/nginx.conf -v /home/docker-nginx/log:/var/log/nginx -v /home/docker-nginx/conf.d/default.conf:/etc/nginx/conf.d/default.conf -d nginx
二：
docker run --name nginx -p 80:80 
	-v $PWD/nginx.conf:/etc/nginx/nginx.conf
            -v  $PWD/html:/html  
            -v $PWD/logs:/var/log/nginx 
            -v $PWD/conf.d/default.conf:/etc/nginx/conf.d/default.conf 
            -d nginx
```

nginx项目配置：

注意：`nginx.conf`配置文件映射到`docker`容器内部，`server `中的`root`路径配置也是相对与容器内部的，所以这里直接将`html`路径映射到容器的根目录 

```js
    server {
        listen       80;
        server_name  demo.gxming.top;
        charset utf-8; 
        location / {
            root   /html/demo-web;
            index  index.html index.htm;
        }
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
    }

    server {
        listen       80;
        server_name  api.gxming.top;
        charset utf-8;
        location / {
            root   /html/api-demo;
            index  index.html index.htm;
        }
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
    }
```

解释下上面的命令：

--name 给你启动的容器起个名字，以后可以使用这个名字启动或者停止容器

-p 映射端口，将docker宿主机的80端口和容器的80端口进行绑定

-v 挂载文件用的，第一个-v 表示将你本地的nginx.conf覆盖你要起启动的容器的nginx.conf文件，第二个表示将日志文件进行挂载，就是把nginx服务器的日志写到你docker宿主机的/home/docker-nginx/log/下面

**nginx容器  代理到宿主机服务**

1. 在安装Docker的时候，会在宿主机安装一个虚拟网关 docker0，查询docker0的IP地址

   ```js
   ip addr show docker0
   ```

2. ```js
   # 注意 upstream 没有http, 这里的ip就是上面对于docker来说宿主机的ip
    upstream music {
           server 172.17.0.1:8080;
       }
       server {
           listen 80;
           # 如果由域名配置为域名即可，如果没有域名配置为本机ip地址
           # 如果想要外部访问就配置为本机的外网ip
           server_name xx.xx.xx.xx;
           location / {
               proxy_set_header Host $host:$server_port;
               proxy_set_header X-Real-Ip $remote_addr;
               proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
               # 这里就是上面的upstream
               proxy_pass http://music;
           }
       }
   ```

### 安装mysql

- **docker search mysql** 查询mysql

- **docker pull mysql**  拉去镜像  ，也可以指定版本镜像`docker pull mysql:8.0.27`

- **docker images**  查看镜像

- 在opt目录下创建新文件夹

  ```shell
  命令：cd /opt/
  命令：mkdir mysql_docker
  命令：cd mysql_docker/
  命令：echo $PWD
  ```

- 启动mysql容器

  ```
  docker run --name mysqlDemoServer -v $PWD/conf:/etc/mysql/conf.d -v $PWD/logs:/logs -v $PWD/data:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=123456 -d -i -p 3306:3306 mysql:latest
  ```

  | Options | Mean                                               |
  | ------- | -------------------------------------------------- |
  | -i      | 以交互模式运行容器，通常与 -t 同时使用；           |
  | -t      | 为容器重新分配一个伪输入终端，通常与 -i 同时使用； |
  | -d      | 后台运行容器，并返回容器ID；                       |

- 进入mysql 容器 ，并登入mysql

  `命令：`**docker exec -it mysqlserver bash**

  `命令：`**mysql -uroot -p**

- 开启远程访问权限 

  > 须先到服务器开启3306端口

  `命令：`**use mysql;**

  `命令：`**select host,user from user;**

  `命令：`**ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY '123456';**

  `命令：`**flush privileges;**

- 查看日志 **docker logs -f --tail 10 a4dac74d48f7**

- 查看进程 **docker ps -a**

- 重启docker **systemctl restart docker**

- 查看docker是否启动成功 **ps -ef|grep docker**

- 关闭docker **systemctl stop docker**

### 安装redis

```jsx
docker run -p 6379:6379 --name redis -v $PWD/redis.conf:/etc/redis/redis.conf -v $PWD/data:/data -d redis redis-server /etc/redis/redis.conf --appendonly yes
```

### 安装portainer

```shell
docker search portainer
```



## 四、实际操作

### 备份数据库

```jsx
sudo docker exec 容器 sh -c 'exec mysqldump --all-databases -u账号 -p密码 --all-databases' > /home/music_`date +%F`.sql
```

### 容器还原

```jsx
#复制备份文件到容器中的var目录
sudo docker cp /var/backup/emp_2022-03-17.sql mysql:/var
#进入容器
sudo docker exec -it mysql bin/bash
#进入mysql
mysql -uroot -p
#使用备份sql恢复数据库
source /var/backup/emp_2022-03-15.sql

#或者不进入mysql直接容器中还原
mysql -uroot -p123456 < /var/backup/emp_2022-03-15.sql

```

> [参考文章](https://blog.csdn.net/weixin_52270081/article/details/123552094)





























