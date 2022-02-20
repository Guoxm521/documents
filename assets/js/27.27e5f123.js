(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{433:function(t,s,a){"use strict";a.r(s);var e=a(36),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"目录结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#目录结构"}},[t._v("#")]),t._v(" 目录结构")]),t._v(" "),a("p",[t._v("首先需要配置"),a("code",[t._v("vue-cli")]),t._v("环境,构建一个"),a("code",[t._v("vue")]),t._v("项目，并搭建相应的目录结构")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gxming.oss-cn-shenzhen.aliyuncs.com/my_study_notesimage-20211106165158556.png",alt:"image-20211106165158556"}})]),t._v(" "),a("p",[t._v("将所有的组件放在了"),a("code",[t._v("gxm_ui")]),t._v("文件夹  这样为了更好的区分")]),t._v(" "),a("ol",[a("li",[a("p",[a("code",[t._v("packages")]),t._v("  为"),a("code",[t._v("vue")]),t._v("的组件  一个文件夹就是一个单独的组件,文件夹内含一个"),a("code",[t._v("main.vue")]),t._v("和"),a("code",[t._v("index.js")]),t._v("文件")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gxming.oss-cn-shenzhen.aliyuncs.com/my_study_notesimage-20211106165645328.png",alt:"image-20211106165645328"}})])]),t._v(" "),a("li",[a("p",[a("code",[t._v("src")]),t._v(" 放着 "),a("code",[t._v("npm")]),t._v("组件的路口,向外暴露一个"),a("code",[t._v("vue")]),t._v("的install方法")])])]),t._v(" "),a("p",[a("img",{attrs:{src:"C:%5CUsers%5Cgxm%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20211106165759094.png",alt:"image-20211106165759094"}})]),t._v(" "),a("p",[t._v("注意：这里有个问题，这里参考了elementui组件的写法，同时导出单个组件，和全部组件的install 方法，来实现按需引入 或全部引入，但是在导入组件时 只能 如下方法一   一次性导入，而不能如方法二对导出的对象进行解构")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("方法一 ：    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" gxm_ui "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'gxm_ui'")]),t._v("\n方法二：    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" HelloUi "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"gxm_ui"')]),t._v("\n")])])]),a("p",[t._v("参考文章:https://www.jb51.net/article/162079.htm")]),t._v(" "),a("h2",{attrs:{id:"发布组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#发布组件"}},[t._v("#")]),t._v(" 发布组件")]),t._v(" "),a("h3",{attrs:{id:"组件配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组件配置"}},[t._v("#")]),t._v(" 组件配置")]),t._v(" "),a("p",[t._v("在组件文件目录下 初始化一个"),a("code",[t._v("package.json")]),t._v(",然后在 "),a("code",[t._v("package.json")]),t._v(" 里面添加一些npm包发布的相关信息，比如作者、版本等")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gxming.oss-cn-shenzhen.aliyuncs.com/my_study_notesimage-20211106170222216.png",alt:"image-20211106170222216"}})]),t._v(" "),a("p",[t._v("在组件库当中使用到的第三方依赖，添加在"),a("code",[t._v("dependencies")]),t._v("当中，当安装组件的时候也会想对应的下载第三方依赖")]),t._v(" "),a("h3",{attrs:{id:"发布到npm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#发布到npm"}},[t._v("#")]),t._v(" 发布到Npm")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("将源切换成npm官方源,这点非常重要\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" config "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" registry http://registry.npmjs.org/\n")])])]),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("首先登陆npm账号 "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" login\n添加用户信息   "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" adduser\n发布远程   "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" publish\n\n\n如果要删除我们发的包,在2小时之内是可以删除的\n删除远程仓库的包\nnpx force-unpublish package-name "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'原因描述'")]),t._v("\n")])])]),a("p",[t._v("注意：每次更新组件都需要更新组件上的版本号")]),t._v(" "),a("h3",{attrs:{id:"上传到gitee"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#上传到gitee"}},[t._v("#")]),t._v(" 上传到gitee")]),t._v(" "),a("p",[t._v("将上面组件文件夹"),a("code",[t._v("gxm_ui")]),t._v("单独上传在gitee仓库，上传仓库的组件也需要遵循上面的配置，此后我们就可以通过从gitee上面拉去组件库，这个方法适合构建公司当中私有的组件仓库，")]),t._v(" "),a("p",[t._v("当仓库为公开的时候 可以直接拉去")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("  git+https://gitee.com/gxmingcode/gxm_ui_test\n")])])]),a("p",[t._v("npm 所支持的协议")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("protocol"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("user"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("password"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("@"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("hostname"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("port"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("path"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("#"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("commit"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("ish"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" #semver"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("semver"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("blockquote",[a("p",[a("code",[t._v("<protocol>")]),t._v(" is one of git, git+ssh, git+http, git+https, or git+file.")])]),t._v(" "),a("p",[t._v("即 protocol 支持 git, git+ssh, git+http, git+https, git+file，私有仓库需要用户名和密码时需要填写用户名和密码，semver 表示需要使用的版本号, 不过貌似不生效。（npm 中有个包 semver 是专门用于比较包的版本号大小）")]),t._v(" "),a("p",[t._v("直接写 #branch 表示需要安装的分支号。")]),t._v(" "),a("p",[t._v("所以在开发过程中我们可以这么写包：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i git+https://gitee.com/gxmingcode/gxm_ui_test"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#master")]),t._v("\n")])])]),a("p",[t._v("或者使用打的 tag")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i git+https://gitee.com/gxmingcode/gxm_ui_test"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#1.0.0")]),t._v("\n")])])]),a("h3",{attrs:{id:"可能存在的问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#可能存在的问题"}},[t._v("#")]),t._v(" 可能存在的问题")]),t._v(" "),a("p",[t._v("由于新版的 npm install 在安装时会使用 package-lock.json, 有时候同一分支不会从 github 上拉取最新的，\n可能需要手动再安装一下(拿自己的仓库试了下，果然不会更新)，所以安装时尽量以 tag 为标签进行安装，这样确保代码是正确的")]),t._v(" "),a("p",[t._v("此外，由于私有仓库都是需要密码的，这个时候需要提供一个公共账号和密码，某种程度上不利于管理吧")]),t._v(" "),a("h2",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://blog.csdn.net/sunxiaoju/article/details/86413132",target:"_blank",rel:"noopener noreferrer"}},[t._v("从码云上通过git安装私有npm包"),a("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=r.exports}}]);