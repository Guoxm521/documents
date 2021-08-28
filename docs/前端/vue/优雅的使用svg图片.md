## 文件目录

 首先将所有的`svg`文件放入同一的文件夹当中,

## 安装插件

`svg-sprite-loader `会把你的 svg 塞到一个个 `symbol `中，合成一个大的 svg。

`svgo-loader`处理svg图片的

```js
npm i svg-sprite-loader svgo-loader -D
```

## 配置文件

```js
	chainWebpack(config) {
		config.plugins.delete("preload");
		config.plugins.delete("prefetch");

		config.module
			.rule("svg")
			.exclude.add(resolve("src/assets/icons"))
			.end();
		config.module
			.rule("icons")
			.test(/\.svg$/)
			.include.add(resolve("src/assets/icons"))
			.end()
			.use("svg-sprite-loader")
			.loader("svg-sprite-loader")
			.options({
				symbolId: "icon-[name]",
			})
			.end();
	}
```

## 构建svg组件

```js
<template>
	<div
		v-if="isExternal"
		:style="styleExternalIcon"
		class="svg-external-icon svg-icon"
		v-on="$listeners"
	/>
	<svg v-else :class="svgClass" aria-hidden="true" v-on="$listeners">
		<use :href="iconName" />
	</svg>
</template>

<script>
	export default {
		name: "SvgIcon",
		props: {
			iconClass: {
				type: String,
				required: true,
			},
			className: {
				type: String,
				default: "",
			},
		},
		computed: {
			iconName() {
				return `#icon-${this.iconClass}`;
			},
			svgClass() {
				if (this.className) {
					return "svg-icon " + this.className;
				} else {
					return "svg-icon";
				}
			},
		},
	};
</script>
```

## 统一引入svg图片

在src下新建icons文件夹，新建index.js文件（要注意路径的配置）

```js
import Vue from "vue";
import SvgIcon from "@/components/SvgIcon"; // svg component

// register globally
Vue.component("svg-icon", SvgIcon);

const req = require.context("./svg", false, /\.svg$/);//一次引入所有的文件

const requireAll = (requireContext) =>
	requireContext.keys().map(requireContext);
requireAll(req);
```

## 引入

最后在`main.js`引入上述js文件即可

```js
import "@/assets/icons"; // icon
```

## 二次优化

使用的时候发现，有时候我们无法修改svg图片的颜色，比如在icon-font网站上下载的svg图片颜色无法更改。此时我们需要删掉svg原有的path中的fill属性：

```js
FchainWebpack(config) {
		config.plugins.delete("preload");
		config.plugins.delete("prefetch");

		config.module
			.rule("svg")
			.exclude.add(resolve("src/assets/icons"))
			.end();
		config.module
			.rule("icons")
			.test(/\.svg$/)
			.include.add(resolve("src/assets/icons"))
			.end()
			.use("svg-sprite-loader")
			.loader("svg-sprite-loader")
			.options({
				symbolId: "icon-[name]",
			})
			.end()
            .before('svg-sprite-loader')
            .use('svgo-loader')
            .loader('svgo-loader')
            .options({
                 plugins: [
                       {removeAttrs: {attrs: 'path:fill'}}
                ]
              })
              .end();
	}
```

## 拓展

- [vue-web-chain  文档](https://github.com/Yatoo2018/webpack-chain/tree/zh-cmn-Hans)

- [vue-cli官方文档](https://cli.vuejs.org/zh/config/#%E5%85%A8%E5%B1%80-cli-%E9%85%8D%E7%BD%AE)