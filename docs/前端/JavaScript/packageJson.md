## 概述

每个项目的根目录下面，一般都有一个`package.json`文件，定义了这个项目所需要的各种模块，以及项目的配置信息（比如名称、版本、许可证等元数据）。`npm install`命令根据这个配置文件，自动下载所需的模块，也就是配置项目所需的运行和开发环境。



## 参考文件

下面为我最近所做的项目的一个`package.json`文件

```json
{
  "name": "公司名称",
  "version": "4.2.1",
  "description": "项目描述",
  "author": "公司",
  "license": "MIT",
  "scripts": {
    "dev": "vue-cli-service serve",
    "build:prod": "vue-cli-service build",
    "build:stage": "vue-cli-service build --mode staging",
    "preview": "node build/index.js --preview",
    "lint": "eslint --ext .js,.vue src",
    "test:unit": "jest --clearCache && vue-cli-service test:unit",
    "test:ci": "npm run lint && npm run test:unit",
    "svgo": "svgo -f src/icons/svg --config=src/icons/svgo.yml"
  },
  "dependencies": {
    "@tinymce/tinymce-vue": "^3.2.2",
    "axios": "0.18.1",
    "default-passive-events": "^2.0.0",
    "echarts": "^4.7.0",
    "element-ui": "2.13.0",
    "js-cookie": "2.2.0",
    "lib-flexible": "^0.3.2",
    "normalize.css": "7.0.0",
    "nprogress": "0.2.0",
    "path-to-regexp": "2.4.0",
    "qrcodejs2": "0.0.2",
    "sortablejs": "^1.13.0",
    "tinymce": "^5.3.0",
    "vue": "2.6.10",
    "vue-baidu-map": "^0.21.22",
    "vue-count-to": "^1.0.13",
    "vue-router": "3.0.6",
    "vuex": "3.1.0"
  },
  "devDependencies": {
    "@babel/core": "7.0.0",
    "@babel/register": "7.0.0",
    "@vue/cli-plugin-babel": "3.6.0",
    "@vue/cli-plugin-eslint": "^3.9.1",
    "@vue/cli-plugin-unit-jest": "3.6.3",
    "@vue/cli-service": "3.6.0",
    "@vue/test-utils": "1.0.0-beta.29",
    "autoprefixer": "^9.5.1",
    "babel-core": "7.0.0-bridge.0",
    "babel-eslint": "10.0.1",
    "babel-jest": "23.6.0",
    "chalk": "2.4.2",
    "compression-webpack-plugin": "^3.1.0",
    "connect": "3.6.6",
    "eslint": "5.15.3",
    "eslint-plugin-vue": "5.2.2",
    "html-webpack-plugin": "3.2.0",
    "mockjs": "1.0.1-beta3",
    "node-sass": "^4.9.0",
    "px2rem-loader": "^0.1.9",
    "runjs": "^4.3.2",
    "sass-loader": "^7.1.0",
    "script-ext-html-webpack-plugin": "2.1.3",
    "script-loader": "0.7.2",
    "serve-static": "^1.13.2",
    "svg-sprite-loader": "4.1.3",
    "svgo": "1.2.2",
    "vue-template-compiler": "2.6.10",
    "vuedraggable": "^2.23.2"
  },
  "engines": {
    "node": ">=8.9",
    "npm": ">= 3.0.0"
  },
  "browserslist": [
    "> 1%",
    "last 2 versions"
  ]
}
```

## 字段描述

- name字段

> `package.json`文件中最重要的就是`name`和`version`字段，这两项是必填的。名称和版本一起构成一个标识符，该标识符被认为是完全唯一的。对包的更改应该与对版本的更改一起进行。

- version      版本号
-  description    描述
- keywords    字符串组成的数组，关键字秒速
- homepage 项目的主页地址
- bugs   用于项目问题的反馈issue地址或者邮箱

>```json
>"bugs": { 
>  "url" : "https://github.com/owner/project/issues",
>  "email" : "project@hostname.com"
>}
>```

- license  当前项目的协议

- author      contributors  

  `author`是具体一个人，`contributors`表示一群人。他们都表示当前项目的共享者。同时每个人都是一个对象。具有`name`字段和可选的`url`及`email`字段。

- files

  `files`属性的值是一个数组，内容是模块下文件名或者文件夹名，如果是文件夹名，则文件夹下所有的文件也会被包含进来（除非文件被另一些配置排除了）

  可以在模块根目录下创建一个`.npmignore`文件，写在这个文件里边的文件即便被写在`files`属性里边也会被排除在外，这个文件的写法与`.gitignore`类似。

- main   指定了加载的入口文件

- bin  指定项目内部对应的可执行文件的位置

- man  指定当前模块的`main`文档的位置

- directories   制定一些方法来描述模块的结构,

- responsitory   代码的存放地址 

>```json
>"repository" : {
>  "type" : "git", 
>  "url" : "https://github.com/npm/npm.git"
>}
>```

- scripts  指定运行脚本命令的npm命令行缩写

>```json
>    "dev": "vue-cli-service serve",
>    "build:prod": "vue-cli-service build",
>    "build:stage": "vue-cli-service build --mode staging",
>    "preview": "node build/index.js --preview",
>    "lint": "eslint --ext .js,.vue src",
>    "test:unit": "jest --clearCache && vue-cli-service test:unit",
>    "test:ci": "npm run lint && npm run test:unit",
>    "svgo": "svgo -f src/icons/svg --config=src/icons/svgo.yml"
>```

- config  添加命令行的环境变量
- dependcies   devDenpendcies   

>`dependencies`字段指定了项目运行所依赖的模块，`devDependencies`指定项目开发所需要的模块。
>
>它们的值都是一个对象。该对象的各个成员，分别由模块名和对应的版本要求组成，表示依赖的模块及其版本范围。
>
>当安装依赖的时候使用`--save`参数表示将该模块写入dependencies属性，`--save-dev`表示将该模块写入devDependencies属性。

- peerDependencies
- bundledDependencies
- optionalDependencies
- engines  字段指明了该模块运行的平台，比如`Node`或者`npm`的某个版本或者浏览器。
- os  指定你的模块只能在哪个操作系统上运行
- cpu   限制模块只能在某种架构的`cpu`下运行
- private  如果这个属性被设置为`true`，`npm`将拒绝发布它，这是为了防止一个私有模块被无意间发布出去。
- publishConfig
- perferGlobal
- browser   指定该模板供浏览器使用的版本。`Browserify`这样的浏览器打包工具，通过它就知道该打包那个文件。

## 参考

1. [掘金     你真的了解package.json吗？来看看吧，这可能是最全的package解析](https://juejin.cn/post/6987179395714646024#heading-18)
2. [阮一峰  javascript](http://javascript.ruanyifeng.com/nodejs/packagejson.html)

