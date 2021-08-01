## Vue 响应式原理

> Vue 的响应式原理是核心是通过 ES5 的保护对象的 `Object.defindeProperty` 中的访问器属性中的 get 和 set 方法，data 中声明的属性都被添加了访问器属性，当读取 data 中的数据时自动调用 get 方法，当修改 data 中的数据时，自动调用 set 方法，检测到数据的变化，会通知观察者 Wacher，观察者 Wacher自动触发重新render 当前组件（子组件不会重新渲染）,生成新的虚拟 DOM 树，Vue 框架会遍历并对比新虚拟 DOM 树和旧虚拟 DOM 树中每个节点的差别，并记录下来，最后，加载操作，将所有记录的不同点，局部修改到真实 DOM树上。

## 组件通讯

### props

这个应该非常属性,就是父传子的属性; props 值可以是一个数组或对象;

```js
// 数组
props:[]

// 对象
props:{
 inpVal:{
  type:Number, //传入值限定类型
  // type 值可为String,Number,Boolean,Array,Object,Date,Function,Symbol
  // type 还可以是一个自定义的构造函数，并且通过 instanceof 来进行检查确认
  required: true, //是否必传
  default:200,  //默认值,对象或数组默认值必须从一个工厂函数获取如 default:()=>[]
  validator:(value) {
    // 这个值必须匹配下列字符串中的一个
    return ['success', 'warning', 'danger'].indexOf(value) !== -1
  }
 }
}
```

### $emit   和  $on

触发子组件触发父组件给自己绑定的事件,其实就是子传父的方法

```js
// 父组件
<home @title="title">
// 子组件
this.$emit('title',[{title:'这是title'}])
```

### vuex

```js
state:定义存贮数据的仓库 ,可通过this.$store.state 或mapState访问
getter:获取 store 值,可认为是 store 的计算属性,可通过this.$store.getter 或
       mapGetters访问
mutation:同步改变 store 值,为什么会设计成同步,因为mutation是直接改变 store 值,
         vue 对操作进行了记录,如果是异步无法追踪改变.可通过mapMutations调用
action:异步调用函数执行mutation,进而改变 store 值,可通过 this.$dispatch或mapActions
       访问
modules:模块,如果状态过多,可以拆分成模块,最后在入口通过...解构引入
```

### *a**t**t**r**s*和 listeners

> `attrs` 包含了父作用域中不作为 `prop` 被识别 (且获取) 的 attribute 绑定 (`class` 和 `style` 除外)。当一个组件没有声明任何 `prop` 时，这里会包含所有父作用域的绑定 (`class` 和 `style` 除外),  即`attrs`可以获取子传父中未在 `props` 定义的值
>
> `listeners`  包含了父作用域中的 (不含 `.native` 修饰器的) `v-on` 事件监听器。可以通过 `v-on="$listeners"` 传入内部组件

```js
// 父组件
<father title="这是标题" width="80" height="80" imgUrl="imgUrl"/>

// 子组件
mounted() {
  console.log(this.$attrs) //{title: "这是标题", width: "80", height: "80", imgUrl: "imgUrl"}
},
```

```js
//父组件
<son
	name="name"
	age="18"
	gender="666"
	sdf="asd"
	@click="isClick"
	@change="asd"
	v-bind="$attrs"
	v-on="$listeners"
></son>

//子组件
mounted() {
	console.log(this.$attrs);
	console.log(this.$listeners);
	this.$listeners.isClick();
	this.$listeners.asd();
},
```

**补充**:  `inheritAttrs`

默认情况下父作用域的不被认作 props 的 attribute 绑定将会“回退”且作为普通的 HTML attribute 应用在子组件的根元素上。通过设置 `inheritAttrs` 到 `false`，这些默认行为将会被去掉。

**默认值**：`true`

**示例**

```js
//  父组件调用子组件
<child-component aaa="1111"></child-component>
```

```js
//子组件
  <div class="child">子组件</div>

export default {
  inheritAttrs: true,
  mounted() {
    console.log('this.$attrs', this.$attrs)
  }
}
</script>
```

 设置 `inheritAttrs: true`（默认）

![](https://gxming.oss-cn-shenzhen.aliyuncs.com/my_study_notes20210801101120.png)

 设置 `inheritAttrs: false`

![](https://gxming.oss-cn-shenzhen.aliyuncs.com/my_study_notes20210801101354.png)

不管`inheritAttrs`为`true`或者`false`，子组件中都能通过`$attrs`属性获取到父组件中传递过来的属性。

### provide和inject

> `provide`和 `inject` 主要为高阶插件/组件库提供用例。并不推荐直接用于应用程序代码中; 并且这对选项需要一起使用; 以允许一个祖先组件向其所有子孙后代注入一个依赖，不论组件层次有多深，并在起上下游关系成立的时间里始终生效
>
> `provide` 和 `inject` 绑定并不是可响应的。这是官方刻意为之的。然而，如果你传入了一个可监听的对象，那么其对象的 property 还是可响应的。

```js
//父组件:
provide: { //provide 是一个对象,提供一个属性或方法
  foo: '这是 foo',
  fooMethod:()=>{
    console.log('父组件 fooMethod 被调用')
  }
},

// 子或者孙子组件
inject: ['foo','fooMethod'], //数组或者对象,注入到子组件
mounted() {
  this.fooMethod()
  console.log(this.foo)
}

```

### parent和children

> 指定已创建的实例之父实例，在两者之间建立父子关系。子实例可以用 `this.$parent` 访问父实例，子实例被推入父实例的 `$children` 数组中。

```js
//父组件
mounted(){
  console.log(this.$children) 
  //可以拿到 一级子组件的属性和方法
  //所以就可以直接改变 data,或者调用 methods 方法
}

//子组件
mounted(){
  console.log(this.$parent) //可以拿到 parent 的属性和方法
}
```

### $refs

```js
// 父组件
<home ref="home"/>

mounted(){
  console.log(this.$refs.home) //即可拿到子组件的实例,就可以直接操作 data 和 methods
}
```

### $root

> 当前组件树的根 Vue 实例。如果当前实例没有父实例，此实例将会是其自己。

```js
// 父组件
mounted(){
  console.log(this.$root) //获取根实例,最后所有组件都是挂载到根实例上
  console.log(this.$root.$children[0]) //获取根实例的一级子组件
  console.log(this.$root.$children[0].$children[0]) //获取根实例的二级子组件
}
```

### .sync

```js
// 父组件
<home :title.sync="title" />
//编译时会被扩展为
<home :title="title"  @update:title="val => title = val"/>

// 子组件
// 所以子组件可以通过$emit 触发 update 方法改变
mounted(){
  this.$emit("update:title", '这是新的title')
}
```

### EventBus

> 1. 声明一个全局Vue实例变量 EventBus , 把所有的通信数据，事件监听都存储到这个变量上; 
> 2. 类似于 Vuex。但这种方式只适用于极小的项目 
> 3. 原理就是利用on和*o**n*和emit 并实例化一个全局 vue 实现数据共享

```js
// 在 main.js
Vue.prototype.$eventBus=new Vue()

// 传值组件
this.$eventBus.$emit('eventTarget','这是eventTarget传过来的值')

// 接收组件
this.$eventBus.$on("eventTarget",v=>{
  console.log('eventTarget',v);//这是eventTarget传过来的值
})

```

**注释：**对应的事件名eventTarget必须是全局唯一的

### 路由传参

1.方案一

```js
// 路由定义
{
  path: '/describe/:id',
  name: 'Describe',
  component: Describe
}
// 页面传参
this.$router.push({
  path: `/describe/${id}`,
})
// 页面获取
this.$route.params.id
```

2.方案二

```js
// 路由定义
{
  path: '/describe',
  name: 'Describe',
  component: Describe
}
// 页面传参
this.$router.push({
  name: 'Describe',
  params: {
    id: id
  }
})
// 页面获取
this.$route.params.id
```

3.方案三

```js
// 路由定义
{
  path: '/describe',
  name: 'Describe',
  component: Describe
}
// 页面传参
this.$router.push({
  path: '/describe',
    query: {
      id: id
  `}
)
// 页面获取
this.$route.query.id
```

三种方案对比 方案二参数不会拼接在路由后面,页面刷新参数会丢失

### observable

> 让一个对象可响应。Vue 内部会用它来处理 `data` 函数返回的对象。
>
> 返回的对象可以直接用于[渲染函数](https://cn.vuejs.org/v2/guide/render-function.html)和[计算属性](https://cn.vuejs.org/v2/guide/computed.html)内，并且会在发生变更时触发相应的更新。也可以作为最小化的跨组件状态存储器，用于简单的场景；



