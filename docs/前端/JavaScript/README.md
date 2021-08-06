

## 基础知识

- 基本数据类型    `String`，`Number`,`unll`,`undefind`,`Boolean`,`symbol`
- 引用数据类型     `object`，``array`，`function`

### Eventloop

`JS`是单线程的，为了防止一个函数执行时间过长阻塞后面的代码，所以会先将同步代码压入执行栈中，依次执行，将异步代码推入异步队列，异步队列又分为宏任务队列和微任务队列，因为宏任务队列的执行时间较长，所以微任务队列要优先于宏任务队列。微任务队列的代表就是，`Promise.then`，`MutationObserver`，宏任务的话就是`setImmediate setTimeout setInterval`

假如 `JavaScript`有A和B两个线程，A线程在DOM节点上添加了内容，B线程删除了这个节点， 所以为了避免复杂性，所以设计成了单线程。


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

  

## 格式化日期

```js
function parseTime(time, cformat) {
	if (arguments.length == 0) {
		return null;
	}
	const format = cformat || "{y}-{m}-{d} {h}:{i}:{s} 星期{a}";
	let date;
	if (typeof time === "object" && time instanceof Date) {
		date = time;
	} else {
		if (typeof time === "string" && /^[0-9]+$/.test(time)) {
			time = parseInt(time);
		}
		if (typeof time === "number" && time.toString().length === 10) {
			time = time * 1000;
		}
		date = new Date(time);
	}
	const formatObj = {
		y: date.getFullYear(),
		m: date.getMonth() + 1,
		d: date.getDate(),
		h: date.getHours(),
		i: date.getMinutes(),
		s: date.getSeconds(),
		a: date.getDay(),
	};

	const time_str = format.replace(/{([ymdhisa])+}/g, (result, key) => {
		let value = formatObj[key];
		if (key === "a") {
			return ["日", "一", "二", "三", "四", "五", "六"][value];
		}
		return value.toString().padStart(2, "0");
	});
	return time_str;
}
```

**注意:**

>ES2017 引入了字符串补全长度的功能。如果某个字符串不够指定长度，会在头部或尾部补全。`padStart()`用于头部补全，`padEnd()`用于尾部补全

```js
'x'.padStart(5, 'ab') // 'ababx'
'x'.padStart(4, 'ab') // 'abax'
'x'.padEnd(5, 'ab') // 'xabab'
'x'.padEnd(4, 'ab') // 'xaba'
```

