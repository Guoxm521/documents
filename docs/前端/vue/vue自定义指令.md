## 简介

一个指令定义对象可以提供如下几个钩子函数 (均为可选)：

- `bind`：只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。
- `inserted`：插入父节点绑定元素时调用
- `update`：所在组件的 VNode 更新时调用，**但是可能发生在其子 VNode 更新之前**。指令的值可能发生了改变，也可能没有

- `componentUpdated`：指令所在组件的 VNode **及其子 VNode** 全部更新后调用。
- `unbind`：只调用一次，指令与元素解绑时调用。

指令钩子函数参数：

- `el`：指令所绑定的元素，可以用来直接操作 DOM。
- `binding`：一个对象，包含以下 property：
  - `name`：指令名，不包括 `v-` 前缀。
  - `value`：指令的绑定值，例如：`v-my-directive="1 + 1"` 中，绑定值为 `2`。
  - `oldValue`：指令绑定的前一个值，仅在 `update` 和 `componentUpdated` 钩子中可用。无论值是否改变都可用。
  - `expression`：字符串形式的指令表达式。例如 `v-my-directive="1 + 1"` 中，表达式为 `"1 + 1"`。
  - `arg`：传给指令的参数，可选。例如 `v-my-directive:foo` 中，参数为 `"foo"`。
  - `modifiers`：一个包含修饰符的对象。例如：`v-my-directive.foo.bar` 中，修饰符对象为 `{ foo: true, bar: true }`。
- `vnode`：Vue 编译生成的虚拟节点。移步 [VNode API](https://cn.vuejs.org/v2/api/#VNode-接口) 来了解更多详情。
- `oldVnode`：上一个虚拟节点，仅在 `update` 和 `componentUpdated` 钩子中可用。

## 常用的自定义指令

### v-copy

```js
export default {
	bind(el, binding) {
		if (binding.modifiers.dblclick) {
			el.addEventListener("dblclick", () => handleClick(el.innerText));
			el.style.cursor = "copy";
		} else if (binding.modifiers.icon) {
			el.addEventListener("mouseover", () => {
				if (el.hasicon) return;
				const icon = document.createElement("em");
				icon.setAttribute("class", "demo");
				icon.setAttribute("style", "{margin-left:5px,color:red}");
				icon.innerText = "复制";
				el.appendChild(icon);
				el.hasicon = true;
				icon.addEventListener("click", () => handleClick(el.innerText));
				icon.style.cursor = "pointer";
			});
			el.addEventListener("mouseleave", () => {
				let em = el.querySelector("em");
				el.hasicon = false;
				el.removeChild(em);
			});
		} else {
			el.addEventListener("click", () => handleClick(el.innerText));
			el.style.cursor = "copy";
		}

		function handleClick(content) {
			if (Window.clipboardData) {
				window.Clipboard.setData("text", content);
				return;
			} else {
				(function (content) {
					document.oncopy = function (e) {
						e.clipboardData.setData("text", content);
						e.preventDefault();
						document.oncopy = null;
					};
				})(content);
				document.execCommand("Copy");
			}
		}
	},
};
```

### v-empty

```js
import Vue from "vue";
export default {
	update(el, binding, vnode) {
		el.style.position = el.style.position || "relative";
		const { offsetHeight, offsetWidth } = el;
		const { visible, content, img } = binding.value;
		const image = img
			? `<img src="${img}" height="30%" width="30%"></img>`
			: "";
		const defaultStyle =
			"position:absolute;top:0;left:0;z-index:9999;background:#fff;display:flex;justify-content: center;align-items: center;";
		const empty = Vue.extend({
			template: `<div style="height:${offsetHeight}px;width:${offsetWidth}px;${defaultStyle}">
						<div style="text-align:center">
						<div>${image}</div>
						<div>${content || "暂无数据"}</div>
					</div>
					</div>`,
					});
		const component = new empty().$mount().$el;
		if (visible) {
			el.appendChild(component);
		} else {
			el.removeChild(el.lastChild);
		}
	},
};

```

参数 Attributes：

| 参数       | 说明                                                         | 默认值 | 类型   | 可选 |
| ---------- | ------------------------------------------------------------ | ------ | ------ | ---- |
| emptyValue | 包含文字内容 content、图片 img、是否显示 visible，仅 visible 必传 | /      | Object | 必须 |

```js
<div style="height:500px;width:500px" v-empty="emptyValue"> 原本内容</div>

emptyValue = {
	content: '暂无列表',
	img: require('../../assets/images/blue_big.png'),
	visible: true,
},
//visible  控制着其中的显示隐藏  
```

### v-needLogin

```js
export default {
	bind: function(el) {
		el.addEventListener(
			"click",
			function(e) {
				const isLogin = false;
				if (isLogin) {
					// 已经登录
					console.log("已登录");
				} else {
					//未登录
					console.log("未登录");
					e.stopPropagation();
				}
			},
			true
		);
	},
};
```

使用方法

```js
<div class="demo" v-needLogin  @click="handleClick2"></div>
//-----------------------------------------
handleClick2() {
	console.log("我是原始的的点击事件");
},
```

在这里有个地方需要注意，默认情况下，元素上`v-on`绑定的事件总是比自定义指令事件执行的更快

元素在创建的时候会调用`invokeCreateHooks`方法，它会去遍历`cbs.create`中钩子函数进行执行，`cbs.create`中的钩子函数如下图所示共8个。执行指令的`updateDirectives`函数在最后执行，而绑定事件的`updateDOMListeners`函数早于`updateDirectives`函数。

![](https://gxming.oss-cn-shenzhen.aliyuncs.com/my_study_notesbVby4fu-296x183.png)

但是有的时候，某个元素我需要去监听他的点击事件，就比如，某一个按钮的的点击事件，我需要去判断当前的状态是否为登录状态，如果是登录状态就正常执行，如果不是的话，就要对事件进行拦截处理。

这个时候我们就需要用到`addEventListener`中的事件捕获，因为在`DOM`事件的传播过程当中，事件捕获的优先级比事件冒泡的优先级更高。我们可以在捕获的时候对事件进行处理。

**内容补充**

```js
elem.addEventListener(..., {capture: true})
// 或者，用 {capture: true} 的别名 "true"
elem.addEventListener(..., true)
```

`capture` 选项有两个可能的值：

- 如果为 `false`（默认值），则在冒泡阶段设置处理程序。
- 如果为 `true`，则在捕获阶段设置处理程序。

[DOM 事件](http://www.w3.org/TR/DOM-Level-3-Events/)标准描述了事件传播的 3 个阶段：

1. 捕获阶段（Capturing phase）—— 事件（从 Window）向下走近元素。
2. 目标阶段（Target phase）—— 事件到达目标元素。
3. 冒泡阶段（Bubbling phase）—— 事件从元素上开始冒泡。

![](https://gxming.oss-cn-shenzhen.aliyuncs.com/my_study_notes%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20210815140231.jpg)

## 引用方法

为了便于管理指令，我们将每个指令都存在于单独的`js`文件中，你可以像这样将指令` import` 进来后注册指令：

```js
import Vue from "vue";
import copy from "./copy"; // 引入指令
import empty from "./empty";
// import other directives

const directives = {
    empty,
    copy
};

Object.keys(directives).forEach((name) =>
	Vue.directive(name, directives[name])
);

```

当然也可以直接使用`vue.directive`进行注册

```js
// 注册一个全局自定义指令 `v-focus`
Vue.directive("focus", {
	inserted: function (el) {
		// 聚焦元素
		el.focus();
	},
});
```

