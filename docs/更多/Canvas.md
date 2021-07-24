## CanvasRenderingContext2D

>CanvasRenderingContext2D顾名思义就是“Canvas 2D渲染上下文”，可以理解为下面代码中的context。
>
>```js
>var canvas = document.querySelector('canvas');
>var context = canvas.getContext('2d');
>```
>
>context暴露了大量的API属性和方法，可以用来绘制文本，图形以及像素处理等，可以说是2D Canvas应用的核心所在。

### 绘制矩形

`CanvasRenderingContext2D.clearRect()`
清除指定矩形区域内部所有的像素信息为初始色（通常为透明）。
`CanvasRenderingContext2D.fillRect()`
矩形填充，可以填充颜色，渐变，图案等。
`CanvasRenderingContext2D.strokeRect()`
矩形描边。



### 绘制文本

`CanvasRenderingContext2D.fillText()`
文字填充，可以填充纯色，渐变或者图案。
`CanvasRenderingContext2D.strokeText()`
文字描边。
`CanvasRenderingContext2D.measureText()`
文字测量。返回TextMetrics对象，该对象的width属性值就是字符占据的宽度。

### 线条样式

`CanvasRenderingContext2D.lineWidth`
线条宽度，主使用场景是描边，默认宽度是1.0，支持小数。
`CanvasRenderingContext2D.lineCap`
线条端点的样式。支持如下属性值：`butt`（默认值，断头，无端帽），`round`（圆形端帽），`square`（方形端帽）。
`CanvasRenderingContext2D.lineJoin`
线条转角的样式。支持如下属性值：`miter`（默认值，尖角），`round`（圆角），`bevel`（平角）。
`CanvasRenderingContext2D.miterLimit`
尖角限制比率。线条的尖角如果没有限制，在线条粗角度小的情况下会很长很长，因此，需要一个限制比率。默认是10。
`CanvasRenderingContext2D.getLineDash()`
返回当前虚线数值。返回值是一个偶数个数的数组
`CanvasRenderingContext2D.setLineDash()`
设置线条为虚线。
`CanvasRenderingContext2D.lineDashOffset`
设置虚线的起始偏移。

### 文本样式

`CanvasRenderingContext2D.font`
设置字体相关样式，包括字号，字体信息。默认值是`10px sans-serif`。
`CanvasRenderingContext2D.textAlign`
设置文本水平对齐方式。支持属性值有：start（默认值），end，left，right以及center。
`CanvasRenderingContext2D.textBaseline`
设置文本基线对齐方式。支持属性值有：top，hanging，middle，alphabetic（默认值），ideographic，bottom。
`CanvasRenderingContext2D.direction`
设置文本显示方向。支持属性值有：inherit（默认值），ltr和rtl。

### 填充和描边

`CanvasRenderingContext2D.fillStyle`
填充样式。默认值是#000000纯黑色。
`CanvasRenderingContext2D.fill()`
填充。
`CanvasRenderingContext2D.strokeStyle`
描边样式。默认值是#000000纯黑色。
`CanvasRenderingContext2D.stroke()`
描边。

### 渐变相关

Canvas中与渐变相关的方法就是创建线性渐变和径向渐变这两个方法。

`CanvasRenderingContext2D.createLinearGradient()`
创建线性渐变。
`CanvasRenderingContext2D.createRadialGradient()`
创建径向渐变。

### 图案相关

Canvas中与图案相关的方法就是创建图案对象方法。

`CanvasRenderingContext2D.createPattern()`
创建图案。图案内容可以是图片，可以是`<canvas>`元素，也可以是渐变。此方法返回`CanvasPattern`对象。

### 阴影相关

Canvas中与阴影相关的属性就是下面这些。

`CanvasRenderingContext2D.shadowBlur`
阴影模糊大小。默认值是0。
`CanvasRenderingContext2D.shadowColor`
阴影颜色。默认值是全透明黑色。
`CanvasRenderingContext2D.shadowOffsetX`
阴影水平偏移大小。默认值是0。
`CanvasRenderingContext2D.shadowOffsetY`
阴影垂直偏移大小。默认值是0。

### 绘制路径

下面的方法可以用来处理路径对象。

`CanvasRenderingContext2D.beginPath()`
开始一个新路径。
`CanvasRenderingContext2D.closePath()`
闭合一个路径。
`CanvasRenderingContext2D.moveTo()`
路径绘制起始点。
`CanvasRenderingContext2D.lineTo()`
绘制直线到指定坐标点。
`CanvasRenderingContext2D.bezierCurveTo()`
绘制贝赛尔曲线到指定坐标点。
`CanvasRenderingContext2D.quadraticCurveTo()`
绘制二次贝赛尔曲线到指定坐标点。
`CanvasRenderingContext2D.arc()`
绘制圆弧（包括圆）。
`CanvasRenderingContext2D.arcTo()`
绘制圆弧，和之前的点以直线相连。
`CanvasRenderingContext2D.rect()`
绘制矩形路径。
`CanvasRenderingContext2D.ellipse()`
绘制椭圆路径。
`CanvasRenderingContext2D.clip()`
创建剪裁路径，之后绘制的路径只有在里面的才会显示。

### 位置检测

`CanvasRenderingContext2D.isPointInPath()`
当前点是否在指定路径内。
`CanvasRenderingContext2D.isPointInStroke()`
当前点是否在指定路径描边上。

### 变换

旋转缩放等变换方法。

`CanvasRenderingContext2D.rotate()`
旋转。
`CanvasRenderingContext2D.scale()`
缩放。
`CanvasRenderingContext2D.translate()`
位移。
`CanvasRenderingContext2D.transform()`
当前矩阵变换基础上再次矩阵变换。
`CanvasRenderingContext2D.setTransform()`
直接重置为当前设置的矩阵变换。

### 透明度和层级

一个是控制全局透明度，另外一个可以改变层级关系，设置混合模式，以及实现遮罩效果等。

`CanvasRenderingContext2D.globalAlpha`
全局透明度。
`CanvasRenderingContext2D.globalCompositeOperation`
设置图形叠加时候的混合方式，可以用来改变绘制元素上下叠加关系，也就是层级。

### 图片与像素

绘制图片和图像像素信息处理方法。

`CanvasRenderingContext2D.drawImage()`
图片绘制在画布上。
`CanvasRenderingContext2D.createImageData()`
创建一个新的空白的ImageData对象。
`CanvasRenderingContext2D.getImageData()`
获取Canvas画布的设定区域的ImageData对象。
`CanvasRenderingContext2D.putImageData()`
给定的ImageData对象应用在Canvas画布上。

### Canvas状态

Canvas状态管理几个方法。

`CanvasRenderingContext2D.save()`
存储当前Canvas的状态。
`CanvasRenderingContext2D.restore()`
恢复Canvas到前一次存储的状态。
`CanvasRenderingContext2D.canvas`
反向识别当前上下文源自哪个HTMLCanvasElement。

### 其他方法

其他一些不常用的API方法。

`CanvasRenderingContext2D.drawFocusIfNeeded()`
如果给定元素被聚焦，则该方法在当前路径周围绘制焦点环。
`CanvasRenderingContext2D.scrollPathIntoView()`
将当前路径或给定路径滚动到视图中。

------



## drawImage()

> canvas与web结合使用最频繁的的方法，一般用来图像的相关处理，如图片压缩，水印合成等等

### 语法

```js
context.drawImage(image, dx, dy);
context.drawImage(image, dx, dy, dWidth, dHeight);
context.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
```

### 参数说明

```js
image,
sx,  图片元素绘制在Canvas画布上起始横坐标。
sy,  图片元素绘制在Canvas画布上起始纵坐标
sWidth,  图片本身绘制在canvas上的长度
sHeight,  图片本身绘制在canvas上的高度
dx,  左上角横坐标
dy,  左上角纵坐标
dWidth,  绘制图片容器区域的宽度
dHeight  绘制图片容器区域的高度
```

### 示例

```js
const canvas = document.querySelector("#canvas");
let [width, height] = [window.innerWidth, window.innerHeight];
canvas.width = width;
canvas.height = height;
const img = new Image();
img.src = "./images/dog.jpg";
img.onload = function () {
	let cxt = canvas.getContext("2d");
	// cxt.drawImage(img, 0, 0);
				// cxt.drawImage(img, 0, 0, 50, 50);
	cxt.drawImage(img, 0, 0, 100, 100, 0, 0, 250, 250);
};
```

## createImageData

>方法可以创建一个全新的空的ImageData对象。该对象中的所有像素信息都是透明黑。

### 语法

```js
context.createImageData(width, height); 
context.createImageData(imagedata);
```

### 参数说明

```js
width Number 
ImageData对象包含的width值。如果ImageData对象转换成图像，则此width也是最终图像呈现的宽度。
height Number
ImageData对象包含的height值。如果ImageData对象转换成图像，则此height也是最终图像呈现的高度。
imagedataObject
一个存在的ImageData对象，只会使用该ImageData对象中的width和height值，包含的像素信息会全部转换为透明黑。
```

```md
::: 提示
生成的ImageData里面的data值为一个数组   其中四个值组成一个像素点的值
:::
```

## putImageData

>将给定ImageData对象的数据绘制到位图上。 如果提供脏矩形，则仅绘制该矩形的像素。 此方法不受画布变换矩阵的影响。

### 语法

```js
context.putImageData(imagedata, dx, dy);
context.putImageData(imagedata, dx, dy, dirtyX, dirtyY, dirtyWidth, dirtyHeight);
```

### 参数

```js
imagedata,
dx,  绘制在Canvas画布上起始横坐标。
dy,  绘制在Canvas画布上起始纵坐标
dirtyX,  图像数据渲染区域的左上角横坐标。默认值是0
dirtyY,  图像数据渲染区域的左上角纵坐标。默认值是0。
dirtyWidth,  图像数据渲染区域的宽度
dirtyHeight,  图像数据渲染区域的高度
```

## getImageData

> 返回一个ImageData对象，其中包含Canvas画布部分或完整的像素点信息。

### 语法

```js
context.getImageData(sx, sy, sWidth, sHeight);
```

### 参数

```js
sx Number
需要返回的图像数据区域的起始横坐标。
sy Number
需要返回的图像数据区域的起始纵坐标。
sWidth Number
需要返回的图像数据区域的宽度。
sHeight Number
需要返回的图像数据区域的高度。
```

## HTMLCanvasElement.toBlob()

### 语法

```js
void canvas.toBlob(callback, mimeType, quality);
```

### 参数

```js
callback   Function
       toBlob()方法执行成功后的回调方法，支持一个参数，表示当前转换的Blob对象。
mimeType（可选）String
       mimeType表示需要转换的图像的mimeType类型。默认值是image/png，还可以是image/jpeg，甚至image/webp（前提浏览器        支持）等。
quality  （可选）Number
quality  表示转换的图片质量。范围是0到1。由于Canvas的toBlob()方法转PNG是无损的，因此，此参数默认是没有效的，除非，指 定图片mimeType是image/jpeg或者image/webp，此时默认压缩值是0.92。
```

### 示例

```js
		canvas.toBlob(function (blob) {
			const a = document.createElement("a");
			let url = window.URL.createObjectURL(blob);
			a.href = url;
			a.download = "图片";
			a.click();
			window.URL.revokeObjectURL(url);
		});
```

## HTMLCanvasElement.toDataURL()

>Canvas本质上就是一个位图图像，因此，浏览器提供了若干API可以将Canvas图像转换成可以作为IMG呈现的数据，其中最老牌的方法就是HTMLCanvasElement.toDataURL()，此方法可以返回Canvas图像对应的data URI，也就是平常我们所说的base64地址。

### 语法

```js
canvas.toDataURL(mimeType, quality);
```

### 参数

```js
mimeType（可选）String
    mimeType表示需要转换的图像的mimeType类型。默认值是image/png，还可以是image/jpeg，甚至image/webp（前提浏览器支持）等。
quality（可选）Number
    quality表示转换的图片质量。范围是0到1。此参数要想有效，图片的mimeType需要是image/jpeg或者image/webp，其他mimeType值无效。默认压缩质量是0.92。根据自己的肉眼分辨，如果使用toDataURL()的quality参数对图片进行压缩，同样的压缩百分比呈现效果要比Adobe Photoshop差一些
```

## 案例

### 绘制图片

```js
const canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext("2d");
const img = new Image();
img.src = "images/dog.jpg";
img.onload = function () {
	const { width, height } = img;
	ctx.drawImage(img, 0, 0);
	const imgDt = ctx.getImageData(0, 0, width, height);
				//修改像素
	const data = imgDt.data;
	for (let i = 0; i < data.length; i += 4) {
		if (i < 100000 || i > 200000) {
			data[i] = 0;
		}
	}
ctx.putImageData(imgDt, 0, height);
};
```

### 图片置灰

```js
	/**@type {HTMLCanvasElement} */
	img.onload = function () {
		const { width, height } = img;
		ctx.drawImage(img, 0, 0);
		const imgDt = ctx.getImageData(0, 0, width, height);
		const data = imgDt.data;
		for (let i = 0; i < data.length; i += 4) {
			const [r, g, b] = [data[i], data[i + 1], data[i + 2]];
			const lm = 0.299 * r + 0.587 * g + 0.114 * b;
			data[i] = lm;
			data[i + 1] = lm;
			data[i + 2] = lm;
		}
		ctx.putImageData(imgDt, 800, 0);
	};
```

### 马赛克图片

```js
img.onload = function () {
		const { width, height } = img;
		ctx.drawImage(img, 0, 0);
		const imgDt = ctx.getImageData(0, 0, width, height);
		const data = imgDt.data;
		for (let y = 0; y < height; y += 20) {
			for (let x = 0; x < width; x += 20) {
				let ind = (y * width + x) * 4;
				const [r, g, b] = [data[ind], data[ind + 1], data[ind + 2]];
				ctx.fillStyle = `rgb(${r},${g},${b})`;
				ctx.fillRect(x, y, size, size);
			}
		}
	};
```

