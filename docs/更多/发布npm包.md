## 目录结构

首先需要配置`vue-cli`环境,构建一个`vue`项目，并搭建相应的目录结构

![image-20211106165158556](https://gxming.oss-cn-shenzhen.aliyuncs.com/my_study_notesimage-20211106165158556.png)

将所有的组件放在了`gxm_ui`文件夹  这样为了更好的区分  

1. `packages`  为`vue`的组件  一个文件夹就是一个单独的组件,文件夹内含一个`main.vue`和`index.js`文件

   ![image-20211106165645328](https://gxming.oss-cn-shenzhen.aliyuncs.com/my_study_notesimage-20211106165645328.png)

2. `src` 放着 `npm`组件的路口,向外暴露一个`vue`的install方法

![image-20211106165759094](C:\Users\gxm\AppData\Roaming\Typora\typora-user-images\image-20211106165759094.png)

注意：这里有个问题，这里参考了elementui组件的写法，同时导出单个组件，和全部组件的install 方法，来实现按需引入 或全部引入，但是在导入组件时 只能 如下方法一   一次性导入，而不能如方法二对导出的对象进行解构

```javascript
方法一 ：    import gxm_ui from 'gxm_ui'
方法二：    import { HelloUi } from "gxm_ui"
```

参考文章:https://www.jb51.net/article/162079.htm

## 发布组件

### 组件配置

在组件文件目录下 初始化一个`package.json`,然后在 `package.json` 里面添加一些npm包发布的相关信息，比如作者、版本等

![image-20211106170222216](https://gxming.oss-cn-shenzhen.aliyuncs.com/my_study_notesimage-20211106170222216.png)

在组件库当中使用到的第三方依赖，添加在`dependencies`当中，当安装组件的时候也会想对应的下载第三方依赖

### 发布到Npm

```bash
将源切换成npm官方源,这点非常重要
npm config set registry http://registry.npmjs.org/
```

```bash
首先登陆npm账号 npm login
添加用户信息   npm adduser
发布远程   npm publish


如果要删除我们发的包,在2小时之内是可以删除的
删除远程仓库的包
npx force-unpublish package-name '原因描述'
```

注意：每次更新组件都需要更新组件上的版本号

### 上传到gitee

将上面组件文件夹`gxm_ui`单独上传在gitee仓库，上传仓库的组件也需要遵循上面的配置，此后我们就可以通过从gitee上面拉去组件库，这个方法适合构建公司当中私有的组件仓库，

当仓库为公开的时候 可以直接拉去

```bash
npm install  git+https://gitee.com/gxmingcode/gxm_ui_test
```

npm 所支持的协议

```javascript
<protocol>://[<user>[:<password>]@]<hostname>[:<port>][:][/]<path>[#<commit-ish> | #semver:<semver>]
```

> `<protocol>` is one of git, git+ssh, git+http, git+https, or git+file.

即 protocol 支持 git, git+ssh, git+http, git+https, git+file，私有仓库需要用户名和密码时需要填写用户名和密码，semver 表示需要使用的版本号, 不过貌似不生效。（npm 中有个包 semver 是专门用于比较包的版本号大小）

直接写 #branch 表示需要安装的分支号。

所以在开发过程中我们可以这么写包：

```bash
npm i git+https://gitee.com/gxmingcode/gxm_ui_test#master
```

或者使用打的 tag

```bash
npm i git+https://gitee.com/gxmingcode/gxm_ui_test#1.0.0
```

### 可能存在的问题

由于新版的 npm install 在安装时会使用 package-lock.json, 有时候同一分支不会从 github 上拉取最新的，
可能需要手动再安装一下(拿自己的仓库试了下，果然不会更新)，所以安装时尽量以 tag 为标签进行安装，这样确保代码是正确的

此外，由于私有仓库都是需要密码的，这个时候需要提供一个公共账号和密码，某种程度上不利于管理吧

## 参考

[从码云上通过git安装私有npm包](https://blog.csdn.net/sunxiaoju/article/details/86413132)

