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

