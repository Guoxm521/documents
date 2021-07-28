

## 通知无限滚动效果

### 一、效果预览

最近在做一个活动页面，遇到幸运用户中奖的滚动公告需求。下面是实现效果：

![img](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c5820d063acd47569ef0d21e4573ebfc~tplv-k3u1fbpfcp-watermark.image)

### 二、无缝滚动原理

- 1、容器宽高固定，超出内容隐藏；
- 2、内容准备 2 份，现参与滚动的内容有 A、B 两份，向左滚动；
- 3、滑动过程中，B 份紧随 A 份之后，营造出无缝滚动回来的效果；
- 4、在 A 部分内容完全滚出容器的一瞬间，立刻将 AB 内容位置复原，由于 A、B 内容一模一样，这个复原过程很难看出来；
- 5、循环第 3 步；

![img](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a69e0693ad0a4724a02ccba7c2020af5~tplv-k3u1fbpfcp-watermark.image)

### 三、代码

#### 1、html 部分

```html
<template>
	<div class="lucky-user">
		<!-- 容器 -->
		<ul
			class="user-list"
			:style="`animation-duration: ${luckyUsers.length * 4}s;`"
		>
			<!-- 内容区容器 -->
			<li v-for="(item, index) in luckyUsers" :key="index">{{ item }}</li>
			<!-- 内容A -->
			<li v-for="(item, index) in luckyUsers" :key="index+'copy'">
				{{ item }}
			</li>
			<!-- 内容B -->
		</ul>
	</div>
</template>
复制代码
```

#### 2、CSS 部分

```css
.lucky-user {
    width: 540px; //容器定宽高
    height: 30px;
    margin: 0 auto;
    font-size: 18px;
    line-height: 30px;
    color: #E9B65F;
    overflow: hidden;  //超出内容隐藏
    .user-list {
        width: fit-content;  // Q1
        white-space: nowrap; // 内容不换行
        animation-name: seamless-scrolling; // Q3
        animation-timing-function: linear; // 动画速度曲线，匀速
        animation-iteration-count: infinite; // 动画循环无限次播放
        li {
            display: inline-block;
            margin-right: 30px;
        }
    }
}

@keyframes seamless-scrolling {
    0% {
        transform: translateX(0px);
    }
    100% {
        transform: translateX(-50%); //Q2
    }
}
复制代码
```

**Q1：因为滚动内容一般都不是固定的，需要接口获取，所以内容区的宽度也就无法确定，这里使用 CSS3 的新特性 width: fit-content，使宽度自适应内部内容，至于为什么这里需要设置宽度属性，见下文**

**Q2：设置动画。由于内容区实际有 AB 两份，B 是 A 的副本，所以一段动画的终点就是内容区向左位移 50%（内容区 width 的 50%），这也就解释了 Q1 中为什么一定要设置宽度属性了：如果不设置，width 的值不会随内容撑开，此时的 50%是父容器 width 的 50%，终点值就错了**

**Q3：为什么 animation 不采用简写形式，而是拆开？ 因为 animation-duration 动画时长不能固定，如果接口获取到的数据很多，动画时长固定 5s，那滚动地得有多快？所以 animation-duration 采用属性绑定形式，根据数据长度进行延长 :style="animation-duration: \${luckyUsers.length \* 4}s;" 具体乘几看自己喜欢。 我也试过采用简写形式进行 style 属性绑定，结果发现动画不生效。**

#### 3、JS 部分

```javascript
export default {
	name: "app",
	data() {
		return {
			luckyUsers: [],
		};
	},
	created() {
		this.getLuckyUsersList();
	},
	methods: {
		getLuckyUsersList() {
			//调接口拿取数据
			this.luckyUsers = [
				"000000抽中了xxx奖品",
				"111111抽中了xxx奖品",
				"222222抽中了xxx奖品",
			];
		},
	},
};
复制代码;
```

### 四、出处

作者：南客 Nanky

链接：https://juejin.cn/post/6899280789851914253

来源：掘金

著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
