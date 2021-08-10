

## 基础知识

- 基本数据类型    `String`，`Number`,`unll`,`undefind`,`Boolean`,`symbol`
- 引用数据类型     `object`，``array`，`function`

### Eventloop

`JS`是单线程的，为了防止一个函数执行时间过长阻塞后面的代码，所以会先将同步代码压入执行栈中，依次执行，将异步代码推入异步队列，异步队列又分为宏任务队列和微任务队列，因为宏任务队列的执行时间较长，所以微任务队列要优先于宏任务队列。微任务队列的代表就是，`Promise.then`，`MutationObserver`，宏任务的话就是`setImmediate setTimeout setInterval`

假如 `JavaScript`有A和B两个线程，A线程在DOM节点上添加了内容，B线程删除了这个节点， 所以为了避免复杂性，所以设计成了单线程。

## Promise

### 简介

Promise 对象的构造器（constructor）语法如下：

```javascript
let promise = new Promise(function(resolve, reject) {
  // executor（生产者代码，“歌手”）
});
```

传递给 `new Promise` 的函数被称为 `executor`。当 `new Promise` 被创建，executor 会自动运行。它包含最终应产出结果的生产者代码。

它的参数 `resolve` 和 `reject` 是由 JavaScript 自身提供的回调。我们的代码仅在 executor 的内部。

当 executor 获得了结果，无论是早还是晚都没关系，它应该调用以下回调之一：

- `resolve(value)` — 如果任务成功完成并带有结果 `value`。
- `reject(error)` — 如果出现了 error，`error` 即为 error 对象。

由 `new Promise` 构造器返回的 `promise` 对象具有以下内部属性：

- `state` 
  - pending: 初始状态，不是成功或失败状态。
  - fulfilled: 意味着操作成功完成。
  - rejected: 意味着操作失败。
- `result`

`promise`对象初始状态为`pending`,然后在 `resolve` 被调用时变为 `"fulfilled"`，或者在 `reject` 被调用时变为 `"rejected"`。

### then，catch，finally

`.then` 的第一个参数是一个函数，该函数将在 promise resolved 后运行并接收结果。

`.then` 的第二个参数也是一个函数，该函数将在 promise rejected 后运行并接收 error。

```js
promise.then(
  function(result) { /* handle a successful result */ },
  function(error) { /* handle an error */ }
);
```

`catch`对 `error` 感兴趣，那么我们可以使用 `null` 作为第一个参数：`.then(null, errorHandlingFunction)`。或者我们也可以使用 `.catch(errorHandlingFunction)`，其实是一样的：

```javascript
let promise = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error("Whoops!")), 1000);
});

// .catch(f) 与 promise.then(null, f) 一样
promise.catch(alert); // 1 秒后显示 "Error: Whoops!"
```

`.catch(f)` 调用是 `.then(null, f)` 的完全的模拟，它只是一个简写形式。

在promise 中也有 `finally`，`.finally(f)` 调用与 `.then(f, f)` 类似，在某种意义上，`f` 总是在 promise 被 settled 时运行：即 promise 被 resolve 或 reject。

### Promise API

在`Promise`类当中，里面有五个静态方法

- `Promise.all`

  `Promise.all`接受一个`promise`数组作为参数并返回一个新的promise，当所有给定的 promise 都被 settled 时，新的 promise 才会 resolve，并且其结果数组将成为新的 promise 的结果。

  ```js
  Promise.all([
    new Promise(resolve => setTimeout(() => resolve(1), 3000)), // 1
    new Promise(resolve => setTimeout(() => resolve(2), 2000)), // 2
    new Promise(resolve => setTimeout(() => resolve(3), 1000))  // 3
  ]).then(alert); // 1,2,3 当上面这些 promise 准备好时：每个 promise 都贡献了数组中的一个元素
  ```

  结果数组中元素的顺序与其在源 promise 中的顺序相同。即使第一个 promise 花费了最长的时间才 resolve，但它仍是结果数组中的第一个。

  **如果任意一个 promise 被 reject，由 `Promise.all` 返回的 promise 就会立即 reject，并且带有的就是这个 error。**

- `Promise.allSellted`

  `Promise.allSettled` 等待所有的 promise 都被 settle，无论结果如何。结果数组具有：

  - `{status:"fulfilled", value:result}` 对于成功的响应，
  - `{status:"rejected", reason:error}` 对于 error。

  

- `Promise.race`

  与 `Promise.all` 类似，但只等待第一个 settled 的 promise 并获取其结果（或 error）。

  ```js
  Promise.race([
    new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
    new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 2000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
  ]).then(alert); // 1
  ```

  

- `promise.reslove/reject`

  `Promise.resolve(value)` —— 使用给定 value 创建一个 resolved 的 promise。

  `Promise.reject(error)` —— 使用给定 error 创建一个 rejected 的 promise。



##  节流与防抖

- **函数防抖** ：指的是事件被触发 n 秒后再执行回调，如果在这 n 秒内事件又被触发，则重新计时。这可以使用在一些点击请求的事件上，避免因为用户的多次点击向后端发送多次请求。
- **函数节流** ：是指规定一个单位时间，在这个单位时间内，只能有一次触发事件的回调函数执行，如果在同一个单位时间内某事件被触发多次，只有一次能生效。节流可以使用在 scroll 函数的事件监听上，通过事件节流来降低事件调用的频率。

```js
// 函数防抖  延迟执行
function debounce(func, time = 3000) {
	let timer = null;
	return function () {
		let context = this,
			args = arguments;
		if (timer) {
			clearTimeout(timer);
			timer = null;
		}
		timer = setTimeout(() => {
			func.apply(context, args);
		}, time);
	};
}

// 立即执行
function debounce1(func, time = 3000) {
	let timer = null;
	return function () {
		let context = this,
			args = arguments;
		if (timer) {
			clearTimeout(timer);
		}
		let callNow = !timer;
		timer = setTimeout(() => {
			timer = null;
		}, time);
		if (callNow) {
			func.apply(context, args);
		}
	};
}

function test(name) {
	console.log("我是执行312312的");
	console.log(name);
}

debounce(test)("张三");
```

```js
// 函数节流
function throttle(func, delay = 300) {
	let preTime = Date.now();
	return function () {
		let context = this,
			args = arguments;
		nowTime = Date.now();
		if (nowTime - preTime >= delay) {
			preTime = Date.now();
			return fn.apply(context, args);
		}
	};
}
```



## 深浅拷贝

>自己创建一个新的对象，来接受你要重新复制或引用的对象值。如果对象属性是基本的数据类型，复制的就是基本类型的值给新对象；但如果属性是引用数据类型，复制的就是内存中的地址，如果其中一个对象改变了这个内存中的地址，肯定会影响到另一个对象

### 1.`Object.assign()`

`Object.assign()` 方法用于将所有可枚举属性的值从一个或多个源对象分配到目标对象。它将返回目标对象。

```js
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
// expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget);
// expected output: Object { a: 1, b: 4, c: 5 }
```

**注意：**

- 如果目标对象中的属性具有相同的键，则属性将被源对象中的属性覆盖。后面的源对象的属性将类似地覆盖前面的源对象的属性。
- 它不会拷贝对象的继承属性。
- 它不会拷贝对象的不可枚举的属性。
- 可以拷贝 `Symbol` 类型的属性。

### 2.拓展符号

>扩展运算符 和 `object.assign` 有同样的缺陷，也就是`实现的浅拷贝的功能差不多`，但是如果属性都是`基本类型的值，使用扩展运算符进行浅拷贝会更加方便`

```js
let cloneObj = { ...obj };

/* 对象的拷贝 */
let obj = { a: 1, b: { c: 1 } };
let obj2 = { ...obj };
obj.a = 2;
console.log(obj); //{a:2,b:{c:1}} console.log(obj2); //{a:1,b:{c:1}}
obj.b.c = 2;
console.log(obj); //{a:2,b:{c:2}} console.log(obj2); //{a:1,b:{c:2}}
/* 数组的拷贝 */
let arr = [1, 2, 3];
let newArr = [...arr]; //跟arr.slice()是一样的效果
newArr[0] = 2;

console.log(arr);//[ 1, 2, 3 ]
console.log(newArr);//[ 2, 2, 3 ]
```

### 3.concat 拷贝数组

```js
let arr = [1, 2, 3];
let newArr = arr.concat();
newArr[1] = 100;
console.log(arr);  // [ 1, 2, 3 ]
console.log(newArr); // [ 1, 100, 3 ]
```

### 4.JSON.stringify

```js
let a = {
    age: 1,
    jobs: {
        first: 'FE'
    }
}
let b = JSON.parse(JSON.stringify(a))
a.jobs.first = 'native'
console.log(b.jobs.first) // FE
```

`JSON.stringify()`将值转换为相应的JSON格式：

- 非数组对象的属性不能保证以特定的顺序出现在序列化后的字符串中。
- 布尔值、数字、字符串的包装对象在序列化过程中会自动转换成对应的原始值。
- `undefined`、任意的函数以及 symbol 值，在序列化过程中会被忽略（出现在非数组对象的属性值中时）或者被转换成 `null`（出现在数组中时）。函数、undefined 被单独转换时，会返回 undefined，如`JSON.stringify(function(){})` or `JSON.stringify(undefined)`.
- 对包含循环引用的对象（对象之间相互引用，形成无限循环）执行此方法，会抛出错误。
- 所有以 symbol 为属性键的属性都会被完全忽略掉
- Date 日期调用了 toJSON() 将其转换为了 string 字符串（同Date.toISOString()），因此会被当做字符串处理。
  - NaN 和 Infinity 格式的数值及 null 都会被当做 null。
- 其他类型的对象，包括 Map/Set/WeakMap/WeakSet，仅会序列化可枚举的属性。

### 5.手写拷贝

```js
//简单版
function deepClone(obj) {
	let cloneObj = {};
	for (const key in object) {
		if (typeof object[key] === "object") {
			cloneObj[key] = deepClone(object[key]);
		} else {
			cloneObj[key] = obj[key];
		}
	}
	return cloneObj;
}
```

```js
//复杂版
const isComplexDataType = (obj) =>
	(typeof obj === "object" || typeof obj === "function") && obj !== null;

const deepClone = function (obj, hash = new WeakMap()) {
	if (obj.constructor === Date) {
		return new Date(obj); // 日期对象直接返回一个新的日期对象
	}

	if (obj.constructor === RegExp) {
		return new RegExp(obj); //正则对象直接返回一个新的正则对象
	}

	//如果循环引用了就用 weakMap 来解决
	if (hash.has(obj)) {
		return hash.get(obj);
	}
	let allDesc = Object.getOwnPropertyDescriptors(obj);

	//遍历传入参数所有键的特性
	let cloneObj = Object.create(Object.getPrototypeOf(obj), allDesc);

	//继承原型链
	hash.set(obj, cloneObj);

	for (let key of Reflect.ownKeys(obj)) {
		cloneObj[key] =
			isComplexDataType(obj[key]) && typeof obj[key] !== "function"
				? deepClone(obj[key], hash)
				: obj[key];
	}
	return cloneObj;
};
```

**补充**

- `Object.getOwnPropertyDescriptors()` 方法用来获取一个对象的所有自身属性的描述符。

- 静态方法 `Reflect.ownKeys()`返回一个由目标对象自身的属性键组成的数组。

**文章** [WeakMap and WeakSet（弱映射和弱集合）](https://zh.javascript.info/weakmap-weakset)

## 数组方法

### 基本方法

- 添加/删除元素：

  - `push(...items)` —— 向尾端添加元素，
  - `pop()` —— 从尾端提取一个元素，
  - `shift()` —— 从首端提取一个元素，
  - `unshift(...items)` —— 向首端添加元素，
  - `splice(pos, deleteCount, ...items)` —— 从 `pos` 开始删除 `deleteCount` 个元素，并插入 `items`。
  - `slice(start, end)` —— 创建一个新数组，将从索引 `start` 到索引 `end`（但不包括 `end`）的元素复制进去。
  - `concat(...items)` —— 返回一个新数组：复制当前数组的所有元素，并向其中添加 `items`。如果 `items` 中的任意一项是一个数组，那么就取其元素。

- 搜索元素：

  - `indexOf/lastIndexOf(item, pos)` —— 从索引 `pos` 开始搜索 `item`，搜索到则返回该项的索引，否则返回 `-1`。
  - `includes(value)` —— 如果数组有 `value`，则返回 `true`，否则返回 `false`。
  - `find/filter(func)` —— 通过 `func` 过滤元素，返回使 `func` 返回 `true` 的第一个值/所有值。
  - `findIndex` 和 `find` 类似，但返回索引而不是值。

- 遍历元素：

  - `forEach(func)` —— 对每个元素都调用 `func`，不返回任何内容。

- 转换数组：

  - `map(func)` —— 根据对每个元素调用 `func` 的结果创建一个新数组。
  - `sort(func)` —— 对数组进行原位（in-place）排序，然后返回它。
  - `reverse()` —— 原位（in-place）反转数组，然后返回它。
  - `split/join` —— 将字符串转换为数组并返回。
  - `reduce/reduceRight(func, initial)` —— 通过对每个元素调用 `func` 计算数组上的单个值，并在调用之间传递中间结果。

- 其他：

  - `Array.isArray(arr)` 检查 `arr` 是否是一个数组。

  - `some\every` 检查数组。
  - `flat\flatMap`从多维数组创建一个新的扁平数组。

- 不改变自身的方法

  `concat`、`join`、`slice`、`toString`、`toLocaleString`、`indexOf`、`lastIndexOf`、`includes`

- 不会改变自身的数组遍历方法

  `forEach`、`every`、`some`、`filter`、`map`、`reduce`、`reduceRight`、`entries`、`find`、`findIndex`、`keys`、`values`

**总结：**

- 所有插入元素的方法，比如 `push、unshift` 一律返回数组新的长度；
- 所有删除元素的方法，比如 `pop、shift、splice` 一律返回删除的元素，或者返回删除的多个元素组成的数组；
- 部分遍历方法，比如 `forEach、every、some、filter、map、find、findIndex`，它们都包含 `function(value,index,array){}` 和 `thisArg` 这样两个形参。

### 数组扁平化

- 数组自带方法`Array.prototype.flat()`

  `flat()` 方法会按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回。

  ```js
  var newArray = arr.flat([depth])
  ```

  >当`depth`大于数组自身深度时，则会自动展开为一维数组，
  >
  >所以使用` Infinity`，可展开任意深度的嵌套数组

- 案例

  ```js
  const arr1 = [0, 1, 2, [3, 4]];
  console.log(arr1.flat()); //[1,2,3,4]
  const arr2 = [0, 1, 2, [[[3, 4]]]];
  console.log(arr2.flat(4));//[1,2,3,4]
  ```

  

- 手写替代方案

  - **`reduce`+`contact`**

  ```js
  arr.reduce((acc, val) => acc.concat(val), []);
  ```

  ```js
  const arr1 = [0, 1, 2, [3, 4]];
  const arr2 = [0, 1, 2, [[[3, 4]]]];
  let arr4 = arr1.reduce((acc, val) => acc.concat(val), []);//[ 0, 1, 2, 3, 4 ]
  let arr5 = arr2.reduce((acc, val) => acc.concat(val), []);//[ 0, 1, 2, [ [ 3, 4 ] ] ]
  ```

  从上面可以看到直接使用的话，只能实现二级数组扁平化，当数组嵌套层数过多，就无法得到想要的结果

  

  - **`reduce`+`contact`+递归**

  ```js
  const arr2 = [0, 1, 2, [[[3, 4]]]];
  
  //写法一
  function flatDeep(arr, d = 1) {
  	return d > 0
  		? arr.reduce((acc, val) => {
  				if (Array.isArray(val)) {
  					return acc.concat(flatDeep(val,d - 1));
  				} else {
  					return acc.concat(val);
  				}
  		  }, [])
  		: arr.slice();
  }
  
  
  //写法二
  function flatDeep(arr, d = 1) {
  	return d > 0
  		? arr.reduce(
  				(acc, val) =>
  					acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val),
  				[]
  		  )
  		: arr.slice();
  }
  
  console.log(flatDeep(arr2, Infinity));//[ 0, 1, 2, 3, 4 ]
  ```

  - **`forEach+push+递归`**

  ```js
  function flatDeep2(arr = [], d = 1) {
  	let result = [];
  	(function flat(arr, d) {
  		arr.forEach((item) => {
  			if (Array.isArray(item) && d > 0) {
  				flat(item, d - 1);
  			} else {
  				result.push(item);
  			}
  		});
  	})(arr, d);
  	return result;
  }
  
  console.log(flatDeep2(arr2, Infinity));//[ 0, 1, 2, 3, 4 ]
  ```

  - **`Generator`函数实现**

  >常规函数只会返回一个单一值（或者不返回任何值）。
  >
  >而 `Generator `可以按需一个接一个地返回（`yield`）多个值。它们可与 [iterable](https://zh.javascript.info/iterable) 完美配合使用，从而可以轻松地创建数据流。
  >
  >一个 generator 的主要方法就是 `next()`。当`next()`被调用时，它会恢复上图所示的运行，执行直到最近的 `yield  语句`。然后函数执行暂停，并将产出的（yielded）值返回到外部代码。

  ```js
  const arr2 = [0, 1, 2, [[[3, 4]]]];
  function* flatGenerator(arr) {
  	for (var value of arr) {
  		if (Array.isArray(value)) {
  			yield* flatGenerator(value); 
              // yield* 这个特殊的语法来将一个 generator “嵌入”（组合）到另一个 generator 
  		} else {
  			yield value;
  		}
  	}
  }
  
  let newarr = [...flatGenerator(arr2)];
  console.log(newarr);//[ 0, 1, 2, 3, 4 ]
  ```

  

## apply、bind、call

| 方法/特征 |       call       |      apply       |       bind       |
| :-------: | :--------------: | :--------------: | :--------------: |
| 方法参数  |       多个       |     单个数组     |       多个       |
| 方法功能  | 函数调用改变this | 函数调用改变this | 函数调用改变this |
| 返回结果  |     直接执行     |     直接执行     |   返回执行函数   |

```js
Function.prototype.myApply = function (context, args = []) {
	let ctx = context || window;
	let func = Symbol();
	ctx[func] = this;
	const res = args.length > 0 ? ctx[func](...args) : ctx[func]();
	delete ctx[func];
	return res;
};

Function.prototype.myCall = function (context, ...args) {
	let cxt = context || window;
    // 在context上加一个唯一值不影响context上的属性
	let func = Symbol();
	cxt[func] = this;
	args = args ? args : [];
	const res = args.length > 0 ? cxt[func](...args) : cxt[func]();
	delete cxt[func];
	return res;
};

Function.prototype.myBind = function (context, ...args) {
	const fn = this;
	args = args ? args : [];
	return function newFn(...newFnArgs) {
		if (this instanceof newFn) {
			return new fn(...args, ...newFnArgs);
		}
		return fn.apply(context, [...args, ...newFnArgs]);
	};
};

```

## 原型链

>构造函数、原型和实例的关系：每个构造函数都有一个原型对象，原型有 一个属性指回构造函数，而实例有一个内部指针指向原型。如果原型是另一个类型的实例呢？那就意味 着这个原型本身有一个内部指针指向另一个原型，相应地另一个原型也有一个指针指向另一个构造函 数。这样就在实例和原型之间构造了一条原型链。这就是原型链的基本构想。

以`Object`为例，我们常用的`Object`便是一个构造函数

```js
//实例
const instance = new Object()
//原型
const prototype = Object.prototype
```

三者的关系

- `实例.__proto__ === 原型`
- `原型.constructor === 构造函数`
- `构造函数.prototype === 原型`

![](https://poetries1.gitee.io/img-repo/2020/09/112.png)

