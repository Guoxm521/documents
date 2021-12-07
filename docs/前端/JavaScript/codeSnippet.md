>本文主要收集一下自己工作、学习当中一些常用的代码片段

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

## 后端导出文件流

>该方法只是自己在特定的情况中用到了   就自己处理了一下，思路可以参考一下，等以后再碰到类似的需求，就再进行改进

```js
/*
  导出封装
*/
export function exportMethod(res, name) {
  let fileReader = new FileReader();
  fileReader.readAsText(res, "utf-8");
  fileReader.onload = function() {
    try {
      let jsonData = JSON.parse(this.result); // 说明是普通对象数据，后台转换失败+
      if (jsonData.errcode) {
        Message.error(jsonData.errmsg);
      }
    } catch (err) {
      const link = document.createElement("a");
      let blob = new Blob([res], {
        type:
          "application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
      });
      link.style.display = "none";
      link.href = URL.createObjectURL(blob);
      link.download = name;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };
}
```

## 分割数组

```js
function group(array, subGroupLength) {
      let index = 0;
      let newArray = [];
      while(index < array.length) {
          newArray.push(array.slice(index, index += subGroupLength));
      }
      return newArray;
  }
```

## 倒计时组件

```js
<template>
    <span>{{hour? hourString+':'+minuteString+':'+secondString : minuteString+':'+secondString}}</span>
</template>

<script>
  export default {
    data () {
      return {
        hour: '',
        minute: '',
        second: '',
        timer: ''
      }
    },
    props: {
      remainTime: {    // 倒计时间总秒数
        default: ''
      }
    },
    mounted () {
      if (this.remainTime > 0) {
        this.hour = Math.floor((this.remainTime / 3600) % 24)
        this.minute = Math.floor((this.remainTime / 60) % 60)
        this.second = Math.floor(this.remainTime % 60)
        this.countDowm()
      }
    },
    methods: {
      countDowm () {
        var self = this
        clearInterval(this.timer)
        this.timer = setInterval(function () {
          if (self.hour === 0) {
            if (self.minute !== 0 && self.second === 0) {
              self.second = 59
              self.minute -= 1
            } else if (self.minute === 0 && self.second === 0) {
              self.second = 0
              self.$emit('countDowmEnd', true)
              clearInterval(self.timer)
            } else {
              self.second -= 1
            }
          } else {
            if (self.minute !== 0 && self.second === 0) {
              self.second = 59
              self.minute -= 1
            } else if (self.minute === 0 && self.second === 0) {
              self.hour -= 1
              self.minute = 59
              self.second = 59
            } else {
              self.second -= 1
            }
          }
        }, 1000)
      },
      formatNum (num) {
        return num < 10 ? '0' + num : '' + num
      }
    },
    computed: {
      hourString () {
        return this.formatNum(this.hour)
      },
      minuteString () {
        return this.formatNum(this.minute)
      },
      secondString () {
        return this.formatNum(this.second)
      }
    }
  }
</script>
```

## 防抖

```js
/**
 *
 * @param {*} func 要进行debouce的函数
 * @param {*} wait 等待时间,默认500ms
 * @param {*} immediate 是否立即执行
 */
export function debounce(func, wait=500, immediate=false) {
    var timeout
    return function() {
        var context = this
        var args = arguments

        if (timeout) clearTimeout(timeout)
        if (immediate) {
            // 如果已经执行过，不再执行
            var callNow = !timeout
            timeout = setTimeout(function() {
                timeout = null
            }, wait)
            if (callNow) func.apply(context, args)
        } else {
            timeout = setTimeout(function() {
                func.apply(context, args)
            }, wait)
        }
    }
}
```

## 节流

```js
function throttle(func, wait, options = {}) {
  let timeout,
    previous = 0

  return function() {
    let now = +new Date()
    let remain = wait - (now - previous)

    if (remain < 0) {
      if (previous === 0 && !options.begin) {
        previous = now
        return
      }

      if (timeout) {
        clearTimeout(timeout)
        timeout = null
      }

      previous = now
      func.call(this, arguments)
    } else if (!timeout && options.end) {
      timeout = setTimeout(() => {
        func.call(this, arguments)
        timeout = null
      }, wait)
    }
  }
}
```

## 开启全屏

```js
// 全屏
export function handleAllscreen() {
	let element = document.documentElement;
	var requestMethod =
		element.requestFullScreen || //W3C
		element.webkitRequestFullScreen || //Chrome等
		element.mozRequestFullScreen || //FireFox
		element.msRequestFullScreen; //IE11
	if (requestMethod) {
		requestMethod.call(element);
	} else if (typeof window.ActiveXObject !== "undefined") {
		var wscript = new ActiveXObject("WScript.Shell");
		if (wscript !== null) {
			wscript.SendKeys("{F11}");
		}
	}
}
```

## 退出全屏

```js
//退出全屏
export function handleOutFullCreeen() {
	let element = document;
	let requestMethod =
		element.cancelFullScreen ||
		element.webkitCancelFullScreen ||
		element.mozCancelFullScreen ||
		element.exitFullScreen;
	if (requestMethod) {
		requestMethod.call(element);
	} else if (typeof window.ActiveXObject !== "undefined") {
		var wscript = new ActiveXObject("WScript.Shell");
		if (wscript !== null) {
			wscript.SendKeys("{F11}");
		}
	}
}

```

## 上下滚动

```js
const cubic = (value) => Math.pow(value, 3);
const easeInOutCubic = (value) =>
	value < 0.5 ? cubic(value * 2) / 2 : 1 - cubic((1 - value) * 2) / 2;
// 向上移动
export function handleScrollup(value) {
	const el = value;
	if (el.scrollTop == 0) {
		Message.warning("已到达顶部");
		return;
	}
	const beginTime = Date.now();
	const beginValue = el.scrollTop;
	const rAF = window.requestAnimationFrame || ((func) => setTimeout(func, 16));
	const frameFunc = () => {
		const progress = (Date.now() - beginTime) / 500;
		if (progress < 1) {
			el.scrollTop = beginValue * (1 - easeInOutCubic(progress));
			rAF(frameFunc);
		} else {
			el.scrollTop = 0;
		}
	};
	rAF(frameFunc);
}
// 向下移动
export function handleScrolldown(value) {
	const el = value;
	let clientHeight = el.clientHeight;
	let scrollTop = el.scrollTop;
	let scrollHeight = el.scrollHeight;
	if (scrollTop + clientHeight == scrollHeight) {
		Message.warning("已到达底部");
	}
	const beginTime = Date.now();
	const beginValue = el.scrollTop;
	const rAF = window.requestAnimationFrame || ((func) => setTimeout(func, 16));
	const frameFunc = () => {
		const progress = (Date.now() - beginTime) / 500;
		if (progress < 1) {
			el.scrollTop = el.scrollTop + 10;
			rAF(frameFunc);
		}
	};
	rAF(frameFunc);
}
```

```js
function sum(str1, str2) {
    const arr1 = str1.split(''),arr2 = str2.split('');
    const len1 = arr1.length,len2 = arr2.length;
    const maxLen = Math.max(len1, len2);
    let res = [];
    let flag = false;
    for(let i = 0; i < maxLen; i++) {
        let temp;
        let num1 = arr1.pop() , num2 = arr2.pop();
        num1 = num1 ? num1 : 0;
        num2 = num2 ? num2 : 0;
        if(flag) {
            temp =  parseInt(num1) + parseInt(num2) + 1;
        } else {
            temp =  parseInt(num1) + parseInt(num2);
        }
        if(parseInt(temp/10) > 0) {
            // 有进位
            res.push(temp%10);
            flag = true;
        } else {
            res.push(temp);
            flag = false;
        }
        if( i == maxLen -1 && flag) {
            res.push(1);
        }
    }
    return res.reverse().join('');
}

// 验证
sum('987654321111234','99900334444') // '987754221445678'
```



