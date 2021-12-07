(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{418:function(a,s,t){"use strict";t.r(s);var e=t(32),r=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"一、安装docker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、安装docker"}},[a._v("#")]),a._v(" 一、安装Docker")]),a._v(" "),t("h3",{attrs:{id:"_1-windows"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-windows"}},[a._v("#")]),a._v(" 1.windows")]),a._v(" "),t("p",[a._v("在Windows下，docker是默认安装在C盘之下的，")]),a._v(" "),t("p",[a._v("首先使用mklink 进行联接：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("C:"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("Windows"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("system3"),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[a._v("2")]),a._v(">")]),a._v("mklink /J "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"C:\\Program Files\\Docker"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"D:\\Program Files\\Docker"')]),a._v("\n")])])]),t("p",[a._v("运行结果如下：")]),a._v(" "),t("p",[t("code",[a._v("C:\\Program Files\\Docker是Docker")]),a._v("的默认安装位置，"),t("code",[a._v("D:\\Program Files\\Docker")]),a._v("是你希望它安装的位置，一旦设立了联接，Docker的安装器会以为它安装在了"),t("code",[a._v("C:\\Program Files\\Docker")]),a._v("但实际上所有文件都被安装在了"),t("code",[a._v("D:\\Program Files\\Docker")])]),a._v(" "),t("p",[a._v("注1：希望它安装的位置可以是任意硬盘上已有的盘符，但是C:\\Program Files里不能有Docker文件夹否则会出现文件夹已存在的警告并联接失败。\n注2：需要在管理员模式下运行。")]),a._v(" "),t("h3",{attrs:{id:"_2-linux"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-linux"}},[a._v("#")]),a._v(" 2.linux")]),a._v(" "),t("p",[a._v("安装我们直接使用"),t("code",[a._v("shell")]),a._v("脚本来进行安装，安装脚本的地址如下   "),t("code",[a._v("get.docker.com")])]),a._v(" "),t("p",[a._v("可以直接使用curl命令下载这个shell脚本")]),a._v(" "),t("div",{staticClass:"language-jsx extra-class"},[t("pre",{pre:!0,attrs:{class:"language-jsx"}},[t("code",[a._v("curl "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("fsSL get"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("docker"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("com "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("o get"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("docker"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("sh\n")])])]),t("p",[a._v("执行shell脚本")]),a._v(" "),t("div",{staticClass:"language-jsx extra-class"},[t("pre",{pre:!0,attrs:{class:"language-jsx"}},[t("code",[a._v("sh get"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("docker"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("sh\n")])])]),t("p",[a._v("回车后就开始安装Docker了。这里需要注意，如果你不是"),t("code",[a._v("root")]),a._v("用户，是需要使用"),t("code",[a._v("sudo")]),a._v("命令或者给用户sudo权限。")]),a._v(" "),t("p",[a._v("安装过程大概要3-4分钟左右，也是主要看网速和服务器性能。")]),a._v(" "),t("p",[t("a",{attrs:{href:"https://jspang.com/detailed?id=75#toc312",target:"_blank",rel:"noopener noreferrer"}},[a._v("检测是否安装成功"),t("OutboundLink")],1)]),a._v(" "),t("p",[a._v("安装完成后，依然通过"),t("code",[a._v("docker version")]),a._v("命令检查是否安装成功。")]),a._v(" "),t("p",[a._v("如果只显示下面的这些信息，也就是只启动了客户端"),t("code",[a._v("Client")]),a._v("。")]),a._v(" "),t("div",{staticClass:"language-jsx extra-class"},[t("pre",{pre:!0,attrs:{class:"language-jsx"}},[t("code",[a._v("Client"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" Docker Engine "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v(" Community\n Version"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v("           "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("20.10")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v(".7")]),a._v("\n "),t("span",{pre:!0,attrs:{class:"token constant"}},[a._v("API")]),a._v(" version"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v("       "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1.41")]),a._v("\n Go version"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v("        go1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("13.15")]),a._v("\n Git commit"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v("        f0df350\n Built"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v("             Wed Jun  "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("11")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("58")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("10")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2021")]),a._v("\n "),t("span",{pre:!0,attrs:{class:"token constant"}},[a._v("OS")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("Arch"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v("           linux"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("amd64\n Context"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v("           "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("default")]),a._v("\n Experimental"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v("      "),t("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),a._v("\nCannot connect to the Docker daemon at unix"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//var/run/docker.sock. Is the docker daemon running?")]),a._v("\n")])])]),t("p",[a._v("这时候要使用"),t("code",[a._v("systemctl start")]),a._v("命令，开启Docker服务端。")]),a._v(" "),t("div",{staticClass:"language-jsx extra-class"},[t("pre",{pre:!0,attrs:{class:"language-jsx"}},[t("code",[a._v("sudo systemctl start docker\n")])])]),t("p",[a._v("开启后，再使用"),t("code",[a._v("sudo docker version")]),a._v("来看一下，如果有类似下面的信息，说明已经安装成功了。")]),a._v(" "),t("div",{staticClass:"language-jsx extra-class"},[t("pre",{pre:!0,attrs:{class:"language-jsx"}},[t("code",[a._v("Client"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" Docker Engine "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v(" Community\n Version"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v("           "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("20.10")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v(".7")]),a._v("\n "),t("span",{pre:!0,attrs:{class:"token constant"}},[a._v("API")]),a._v(" version"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v("       "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1.41")]),a._v("\n Go version"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v("        go1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("13.15")]),a._v("\n Git commit"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v("        f0df350\n Built"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v("             Wed Jun  "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("11")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("58")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("10")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2021")]),a._v("\n "),t("span",{pre:!0,attrs:{class:"token constant"}},[a._v("OS")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("Arch"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v("           linux"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("amd64\n Context"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v("           "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("default")]),a._v("\n Experimental"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v("      "),t("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),a._v("\n\nServer"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" Docker Engine "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v(" Community\n Engine"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v("\n  Version"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v("          "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("20.10")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v(".7")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token constant"}},[a._v("API")]),a._v(" version"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v("      "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1.41")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("minimum version "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1.12")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n  Go version"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v("       go1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("13.15")]),a._v("\n  Git commit"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v("       b0f5bc3\n  Built"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v("            Wed Jun  "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("11")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("56")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("35")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2021")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token constant"}},[a._v("OS")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("Arch"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v("          linux"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("amd64\n  Experimental"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v("     "),t("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("false")]),a._v("\n containerd"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v("\n  Version"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v("          "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1.4")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v(".8")]),a._v("\n  GitCommit"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v("        "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("7")]),a._v("eba5930496d9bbe375fdf71603e610ad737d2b2\n runc"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v("\n  Version"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v("          "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1.0")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v(".0")]),a._v("\n  GitCommit"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v("        v1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0.0")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("g84113ee\n docker"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("init"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v("\n  Version"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v("          "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0.19")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v(".0")]),a._v("\n  GitCommit"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v("        de40ad0\n")])])]),t("h2",{attrs:{id:"二、创建容器的相关命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、创建容器的相关命令"}},[a._v("#")]),a._v(" 二、创建容器的相关命令")]),a._v(" "),t("h3",{attrs:{id:"创建容器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建容器"}},[a._v("#")]),a._v(" 创建容器")]),a._v(" "),t("div",{staticClass:"language-jsx extra-class"},[t("pre",{pre:!0,attrs:{class:"language-jsx"}},[t("code",[a._v("docker container run "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v(" image name "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),t("h3",{attrs:{id:"查看容器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看容器"}},[a._v("#")]),a._v(" 查看容器")]),a._v(" "),t("div",{staticClass:"language-jsx extra-class"},[t("pre",{pre:!0,attrs:{class:"language-jsx"}},[t("code",[a._v("docker container ls     或者 docker container ps\n"),t("span",{pre:!0,attrs:{class:"token constant"}},[a._v("CONTAINER")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[a._v("ID")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" 容器对应的"),t("span",{pre:!0,attrs:{class:"token constant"}},[a._v("ID")]),a._v("，这个是唯一的\n"),t("span",{pre:!0,attrs:{class:"token constant"}},[a._v("IMAGE")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" 使用的镜像名称，显示不同\n"),t("span",{pre:!0,attrs:{class:"token constant"}},[a._v("COMMAND")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" 执行的相关命令\n"),t("span",{pre:!0,attrs:{class:"token constant"}},[a._v("CREATED")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" 创建的时间\n"),t("span",{pre:!0,attrs:{class:"token constant"}},[a._v("STATUS")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" 目前镜像的状态，一般会有两种状态Up和Exited"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token constant"}},[a._v("PORTS")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" 协议和端口\n"),t("span",{pre:!0,attrs:{class:"token constant"}},[a._v("NAMES")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" 容器的名称，名字是Docker随机生成的\n")])])]),t("h3",{attrs:{id:"停止容器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#停止容器"}},[a._v("#")]),a._v(" 停止容器")]),a._v(" "),t("div",{staticClass:"language-jsx extra-class"},[t("pre",{pre:!0,attrs:{class:"language-jsx"}},[t("code",[a._v("docker container stop "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("name")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("or")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("ID")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),t("span",{pre:!0,attrs:{class:"token plain-text"}},[a._v("   停止单个容器\ndocker container stop  ")]),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ID1")])]),a._v("  "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("ID2")]),a._v("  "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("ID3")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),t("span",{pre:!0,attrs:{class:"token plain-text"}},[a._v(" 停止多个容器\n")])])])]),t("h3",{attrs:{id:"删除容器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#删除容器"}},[a._v("#")]),a._v(" 删除容器")]),a._v(" "),t("div",{staticClass:"language-jsx extra-class"},[t("pre",{pre:!0,attrs:{class:"language-jsx"}},[t("code",[a._v("docker container rm "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("name")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("or")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("ID")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),t("span",{pre:!0,attrs:{class:"token plain-text"}},[a._v("\n")])])])]),t("h3",{attrs:{id:"简写命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#简写命令"}},[a._v("#")]),a._v(" 简写命令")]),a._v(" "),t("ul",[t("li",[a._v("容器的创建："),t("code",[a._v("docker container run nginx")]),a._v(" 简写方法 "),t("code",[a._v("docker run nginx")])]),a._v(" "),t("li",[a._v("容器的列出(up): "),t("code",[a._v("docker container ls")]),a._v(" 简写方法"),t("code",[a._v("docker ps")])]),a._v(" "),t("li",[a._v("容器的列出（up和exit）："),t("code",[a._v("docker container ls -a")]),a._v(" 简写方法"),t("code",[a._v("docker ps -a")])]),a._v(" "),t("li",[a._v("容器的停止 ："),t("code",[a._v("docker container stop")]),a._v("简写方法 "),t("code",[a._v("docker stop")])]),a._v(" "),t("li",[a._v("容器的删除："),t("code",[a._v("docker container rm")]),a._v(" 简写方法"),t("code",[a._v("docker rm")])])]),a._v(" "),t("h3",{attrs:{id:"查看所有的容器id"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看所有的容器id"}},[a._v("#")]),a._v(" 查看所有的容器ID")]),a._v(" "),t("div",{staticClass:"language-jsx extra-class"},[t("pre",{pre:!0,attrs:{class:"language-jsx"}},[t("code",[a._v("docker container ps "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("aq\n")])])]),t("h4",{attrs:{id:"组合功能-删除多个容器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#组合功能-删除多个容器"}},[a._v("#")]),a._v(" 组合功能  删除多个容器")]),a._v(" "),t("div",{staticClass:"language-jsx extra-class"},[t("pre",{pre:!0,attrs:{class:"language-jsx"}},[t("code",[a._v("docker container rm "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("$")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("docker container ps "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("aq"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),t("h3",{attrs:{id:"端口映射"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#端口映射"}},[a._v("#")]),a._v(" 端口映射")]),a._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[a._v("docker container run "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("p "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("80")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("80")]),a._v(" nginx\n")])])]),t("p",[a._v("第一个端口是映射到服务器本机的端口;第二个端口是Docker容器使用的端口。 比如你想把Docker的80端口，映射到服务器的90端口。")]),a._v(" "),t("h3",{attrs:{id:"运行模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#运行模式"}},[a._v("#")]),a._v(" 运行模式")]),a._v(" "),t("blockquote",[t("p",[a._v("attached模式在前台运行，detached模式在后台运行。")])]),a._v(" "),t("h4",{attrs:{id:"attached模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#attached模式"}},[a._v("#")]),a._v(" attached模式")]),a._v(" "),t("p",[a._v("当你打开"),t("code",[a._v("127.0.0.1")]),a._v("网址的时候，"),t("code",[a._v("PowerShell")]),a._v("上打印出了相关的日志（log），平且每访问一次，都会增加一条日志。也就是说Docker容器的日志会实时的展现到窗口并且占用此端口。这种模式叫做"),t("code",[a._v("attached")]),a._v("模式。")]),a._v(" "),t("p",[a._v("在windows系统下并不是一个完整的attached模式，只是帮我们打印出了Log。现在到Linux服务器上，这时候你按"),t("code",[a._v("Ctrl+C")]),a._v(",就会停止掉"),t("code",[a._v("Docker")]),a._v("服务。而现实中我们工作的环境恰恰是这种Linux环境。")]),a._v(" "),t("p",[a._v("也就是在Linux上你的操作命令，会直接传递个"),t("code",[a._v("Docker容器")]),a._v("。")]),a._v(" "),t("p",[a._v("attached模式更适用于容器和程序的调试阶段。")]),a._v(" "),t("h4",{attrs:{id:"detached模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#detached模式"}},[a._v("#")]),a._v(" detached模式")]),a._v(" "),t("p",[t("code",[a._v("detached模式")]),a._v("的开启方法，就是加一个参数"),t("code",[a._v("-d")]),a._v("或者"),t("code",[a._v("--detach")]),a._v("。")]),a._v(" "),t("div",{staticClass:"language-jsx extra-class"},[t("pre",{pre:!0,attrs:{class:"language-jsx"}},[t("code",[a._v("docker run "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("d "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("p "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("80")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("80")]),a._v(" nginx\n")])])]),t("p",[t("code",[a._v("detached模式转换attached模式")])]),a._v(" "),t("p",[a._v("在运行之后，也有需要调试的时候，Docker提供了两个模式间的转换。比如现在要把"),t("code",[a._v("detached")]),a._v("模式的容器，改为"),t("code",[a._v("attched")]),a._v("模式。")]),a._v(" "),t("div",{staticClass:"language-jsx extra-class"},[t("pre",{pre:!0,attrs:{class:"language-jsx"}},[t("code",[a._v("docker  attach "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ID")])]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("or")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("Image")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("Name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),t("span",{pre:!0,attrs:{class:"token plain-text"}},[a._v("\n")])])])]),t("h4",{attrs:{id:"查看日志"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看日志"}},[a._v("#")]),a._v(" 查看日志")]),a._v(" "),t("div",{staticClass:"language-jsx extra-class"},[t("pre",{pre:!0,attrs:{class:"language-jsx"}},[t("code",[a._v("docker container logs "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ID")])]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("or")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("Image")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),t("span",{pre:!0,attrs:{class:"token plain-text"}},[a._v("\n")])])])]),t("p",[a._v("追踪日志")]),a._v(" "),t("div",{staticClass:"language-jsx extra-class"},[t("pre",{pre:!0,attrs:{class:"language-jsx"}},[t("code",[a._v("docker container logs "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("f "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ID")])]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("or")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("Image")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),t("span",{pre:!0,attrs:{class:"token plain-text"}},[a._v("\n")])])])]),t("h3",{attrs:{id:"docker导出、导入镜像"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker导出、导入镜像"}},[a._v("#")]),a._v(" docker导出、导入镜像")]),a._v(" "),t("div",{staticClass:"language-jsx extra-class"},[t("pre",{pre:!0,attrs:{class:"language-jsx"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//导出")]),a._v("\ndocker image save\ndocker image save busybox"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v("latest "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("o mybusybox"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("image\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//导入")]),a._v("\ndocker image load "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("i "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("\\mybusybox"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("image\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);