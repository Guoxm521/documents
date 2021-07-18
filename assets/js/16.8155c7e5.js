(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{381:function(t,s,a){"use strict";a.r(s);var e=a(27),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"进阶篇"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#进阶篇"}},[t._v("#")]),t._v(" 进阶篇")]),t._v(" "),a("h2",{attrs:{id:"一、javascript进阶"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、javascript进阶"}},[t._v("#")]),t._v(" 一、JavaScript进阶")]),t._v(" "),a("h3",{attrs:{id:"_1-内置类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-内置类型"}},[t._v("#")]),t._v(" 1 内置类型")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("JS")]),t._v(" 中分为七种内置类型，七种内置类型又分为两大类型：基本类型和对象（"),a("code",[t._v("Object")]),t._v("）。")]),t._v(" "),a("li",[t._v("基本类型有七种： "),a("code",[t._v("null")]),t._v("，"),a("code",[t._v("undefined")]),t._v("，"),a("code",[t._v("boolea")]),t._v("n，"),a("code",[t._v("number")]),t._v("，"),a("code",[t._v("string")]),t._v("，"),a("code",[t._v("symbol")]),t._v("。")]),t._v(" "),a("li",[t._v("其中 "),a("code",[t._v("JS")]),t._v(" 的数字类型是浮点类型的，没有整型。并且浮点类型基于 "),a("code",[t._v("IEEE 754")]),t._v("标准实现，在使用中会遇到某些 Bug。"),a("code",[t._v("NaN")]),t._v(" 也属于 "),a("code",[t._v("number")]),t._v(" 类型，并且 "),a("code",[t._v("NaN")]),t._v(" 不等于自身。")]),t._v(" "),a("li",[t._v("对于基本类型来说，如果使用字面量的方式，那么这个变量只是个字面量，只有在必要的时候才会转换为对应的类型。")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("111")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这只是字面量，不是 number 类型")]),t._v("\na"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使用时候才会转换为对象类型")]),t._v("\n")])])]),a("blockquote",[a("p",[t._v("对象（"),a("code",[t._v("Object")]),t._v("）是引用类型，在使用过程中会遇到浅拷贝和深拷贝的问题。")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'FE'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" b "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" a\nb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'EF'")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// EF")]),t._v("\n")])])]),a("h3",{attrs:{id:"_2-typeof"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-typeof"}},[t._v("#")]),t._v(" 2 Typeof")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("typeof")]),t._v(" 对于基本类型，除了 "),a("code",[t._v("null")]),t._v(" 都可以显示正确的类型")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 'number'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 'string'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 'undefined'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 'boolean'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Symbol")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 'symbol'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" b "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// b 没有声明，但是还会显示 undefined")]),t._v("\n")])])]),a("blockquote",[a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("typeof` 对于对象，除了函数都会显示 `object\n")])])])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 'object'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 'object'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("log "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 'function'")]),t._v("\n")])])]),a("blockquote",[a("p",[t._v("对于 "),a("code",[t._v("null")]),t._v("来说，虽然它是基本类型，但是会显示 "),a("code",[t._v("object")]),t._v("，这是一个存在很久了的 "),a("code",[t._v("Bug")])])]),t._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("typeof null // 'object'\n")])])]),a("blockquote",[a("p",[t._v("PS：为什么会出现这种情况呢？因为在 "),a("code",[t._v("JS")]),t._v("的最初版本中，使用的是 "),a("code",[t._v("32")]),t._v(" 位系统，为了性能考虑使用低位存储了变量的类型信息，"),a("code",[t._v("000")]),t._v(" 开头代表是对象，然而 "),a("code",[t._v("null")]),t._v("表示为全零，所以将它错误的判断为 "),a("code",[t._v("object")]),t._v(" 。虽然现在的内部类型判断代码已经改变了，但是对于这个"),a("code",[t._v("Bug")]),t._v("却是一直流传下来。")])]),t._v(" "),a("ul",[a("li",[t._v("如果我们想获得一个变量的正确类型，可以通过 "),a("code",[t._v("Object.prototype.toString.call(xx)")]),t._v("。这样我们就可以获得类似 "),a("code",[t._v("[object Type]")]),t._v(" 的字符串")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" a\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 我们也可以这样判断 undefined")]),t._v("\na "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 但是 undefined 不是保留字，能够在低版本浏览器被赋值")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这样判断就会出错")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 所以可以用下面的方式来判断，并且代码量更少")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 因为 void 后面随便跟上一个组成表达式")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 返回就是 undefined")]),t._v("\na "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);