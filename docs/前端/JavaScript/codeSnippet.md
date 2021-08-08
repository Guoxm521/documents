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



