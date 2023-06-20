(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{309:function(t,s,a){"use strict";a.r(s);var r=a(10),e=Object(r.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"前言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),s("blockquote",[s("p",[t._v("今天在开发微信公众号开发的时候，因为调试总是要将代码上传到服务器部署运行，这样频繁的操作就很麻烦，所以就想着能不能直接连我本地的服务。然后就去了解了一下内网穿透")]),t._v(" "),s("p",[t._v("如果只是公众号和小程序的开发，你可以使用natapp、ngrok、花生壳之类的第三方工具。")])]),t._v(" "),s("h2",{attrs:{id:"服务端-安装与配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#服务端-安装与配置"}},[t._v("#")]),t._v(" 服务端 安装与配置")]),t._v(" "),s("h4",{attrs:{id:"创建配置文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建配置文件"}},[t._v("#")]),t._v(" 创建配置文件")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("---创建配置文件\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" data\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" frp\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("touch")]),t._v(" /frp/frps.ini\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("vi")]),t._v(" /frp/frps.ini\n\n---配置文件内容\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("common"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nbind_port "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8010")]),t._v("    //\t服务端监听端口接收 frpc 的连接\nvhost_http_port "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8011")]),t._v("   //为 HTTP 类型代理监听的端口\nvhost_https_port "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8012")]),t._v("    //为 HTTPS 类型代理监听的端口\ndashboard_addr "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),t._v(".0.0\ndashboard_port "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8013")]),t._v("     //启用 Dashboard 监听的本地端口\ndashboard_user "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" admin\ndashboard_pwd "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" gxm1234920\n\n")])])]),s("h4",{attrs:{id:"镜像服务运行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#镜像服务运行"}},[t._v("#")]),t._v(" 镜像服务运行")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("---docker pull 镜像\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" pull snowdreamtech/frps\n\n---运行容器\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" run "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--restart")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("always "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--network")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("host")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-v")]),t._v(" /data/frp/frps.ini:/etc/frp/frps.ini "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-d")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--name")]),t._v(" frps \n\n注释：--network host: "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("host")]),t._v(" 网络模式，所有容器端口都对应属主机端口，不存在映射关系。\n")])])]),s("h4",{attrs:{id:"测试"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#测试"}},[t._v("#")]),t._v(" 测试")]),t._v(" "),s("p",[t._v("其中：123.12.123.45  为你的服务器公网ip地址")]),t._v(" "),s("p",[t._v("访问："),s("code",[t._v("http://123.12.123.45 :8013")]),t._v(" 能出现如下内容则说明可以运行成功")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://gxming.oss-cn-shenzhen.aliyuncs.com/my_study_notes8d8a74c2bba08bb67874e6f812b55dc4.png",alt:""}})]),t._v(" "),s("p",[s("img",{attrs:{src:"https://gxming.oss-cn-shenzhen.aliyuncs.com/my_study_notes8eac7f0248cc51ecd21fe85c2e6d43af.png",alt:""}})]),t._v(" "),s("h4",{attrs:{id:"nginx-配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nginx-配置"}},[t._v("#")]),t._v(" nginx 配置")]),t._v(" "),s("div",{staticClass:"language-nginx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-nginx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("listen")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server_name")]),t._v(" local2.*********.top")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" /")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_pass")]),t._v(" http://172.17.0.1:8011/")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_set_header")]),t._v("\tHost\t"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$host")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_set_header")]),t._v("\tRemote_Addr\t"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$remote_addr")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_set_header")]),t._v("\tX-Real-IP "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$remote_addr")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_set_header")]),t._v("\tX-Forwarded-For\t"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$remote_addr")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"本地客服端运行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#本地客服端运行"}},[t._v("#")]),t._v(" 本地客服端运行")]),t._v(" "),s("h4",{attrs:{id:"本地frpc下载配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#本地frpc下载配置"}},[t._v("#")]),t._v(" 本地frpc下载配置")]),t._v(" "),s("p",[t._v("本地的话可以也用docker 容器的方式运行，我的是"),s("code",[t._v("windows")]),t._v("电脑，所以是直接在"),s("code",[t._v("github")]),t._v("上下载的编译好的包")]),t._v(" "),s("div",{staticClass:"language-dockerfile extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[s("code",[t._v("docker pull snowdreamtech/frpc\n---github地址\nhttps://github.com/fatedier/frp/releases\n")])])]),s("p",[t._v("本地下载后解压后你会看到如下的文件内容")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://gxming.oss-cn-shenzhen.aliyuncs.com/my_study_notes20230218200200.png",alt:""}})]),t._v(" "),s("p",[t._v("​\t修改客户端的配置文件"),s("code",[t._v("frpc.ini")])]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("common"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nserver_addr "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("123.12")]),t._v(".123.45   //服务端公网ip\nserver_port "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8010")]),t._v("   // 连接服务端的端口\nauto_token "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" gxm1234920\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("web"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("type")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" http\nlocal_port "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3000")]),t._v("   //本地项目运行端口\nlocal_ip "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1\n\ncustom_domains "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" local2.*****.top\n\n")])])]),s("h4",{attrs:{id:"启动客户端"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#启动客户端"}},[t._v("#")]),t._v(" 启动客户端")]),t._v(" "),s("p",[t._v("运行如下命令  当你看到proxy success  则说明运行成功了")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("frpc -c G:\\frpc\\frpc.ini\n")])])]),s("p",[s("img",{attrs:{src:"https://gxming.oss-cn-shenzhen.aliyuncs.com/my_study_notes20230218200804.png",alt:""}})]),t._v(" "),s("h2",{attrs:{id:"介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[t._v("#")]),t._v(" 介绍")]),t._v(" "),s("p",[t._v("至此  你只需要在你本地运行你的项目，你可以正常连接后，在浏览器打开你配置的域名"),s("code",[t._v("local2.*****.top")]),t._v("，在经过一系列的"),s("code",[t._v("dns")]),t._v("、路由后，到了你的阿里云服务器，然后再被"),s("code",[t._v("frp")]),t._v("转给你的电脑上。")]),t._v(" "),s("h2",{attrs:{id:"引用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#引用"}},[t._v("#")]),t._v(" 引用")]),t._v(" "),s("ol",[s("li",[s("p",[s("a",{attrs:{href:"https://gofrp.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("gofrp 文档"),s("OutboundLink")],1)])]),t._v(" "),s("li",[s("p",[s("a",{attrs:{href:"https://hub.docker.com/r/snowdreamtech/frpc",target:"_blank",rel:"noopener noreferrer"}},[t._v("frpc docker镜像仓库"),s("OutboundLink")],1)])]),t._v(" "),s("li",[s("p",[s("a",{attrs:{href:"https://hub.docker.com/r/snowdreamtech/frps",target:"_blank",rel:"noopener noreferrer"}},[t._v("frps  docker镜像仓库"),s("OutboundLink")],1)])]),t._v(" "),s("li",[s("p",[s("a",{attrs:{href:"https://github.com/fatedier/frp",target:"_blank",rel:"noopener noreferrer"}},[t._v("frp github仓库"),s("OutboundLink")],1)])])])])}),[],!1,null,null,null);s.default=e.exports}}]);