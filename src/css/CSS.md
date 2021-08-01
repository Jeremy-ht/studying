# css



## 盒模型



## box-shadow

- [box-shadow - CSS（层叠样式表） | MDN (mozilla.org)](https://developer.mozilla.org/zh-CN/docs/Web/CSS/box-shadow)

```css
# box-shadow: (h-shadow v-shadow blur spread color inset)+;		/* 盒子阴影(IE8-不支持) */
    - inset:    内部阴影(可选)  	
    - h-shadow: 水平阴影位置(必须)
    - v-shadow: 垂直阴影位置(必须)
    - blur:     模糊距离(可选)
    - spread:   阴影尺寸(可选)
    - color:    阴影颜色，默认和文本颜色一致(可选)  

/* 注意 */
    1、可以使用多重阴影，但使用过多会造成性能差
    2、边框在内阴影之上，内阴影在背景图片之上，背景图片在背景色之上，背景色在外阴影之上
    3、内阴影对<img>元素没有任何效果
    4、最先写的阴影在最顶层
    5、该属性与border-radius一脉相承，若通过border-radius设置为圆角，则box-shadow的最终呈现也将是圆角

```

- **单侧阴影**

  ```css
  box-shadow: 0 5px 4px -4px black;
  ```

  ![image-20210518151700761](assets\image-20210518151700761.png)

- **邻边投影**

  ```css
  box-shadow: 3px 3px 6px -3px black;
  ```

  ![image-20210518151805646](assets\image-20210518151805646.png)

- **双侧投影**

  ```css
  box-shadow: 5px 0 5px -5px black,-5px 0 5px -5px black;
  ```

  ![image-20210518151848399](assets\image-20210518151848399.png)



## border-image

```css
/* 在边框位置设置图片(IE10-不支持) */

```









## display

- [display - CSS（层叠样式表） | MDN (mozilla.org)](https://developer.mozilla.org/zh-CN/docs/Web/CSS/display)

```css
/*
* 通过display样式可以修改元素的类型
* 		可选值：
* 			inline：可以将一个元素作为内联元素显示
* 			block: 可以将一个元素设置块元素显示
* 			inline-block：将一个元素转换为行内块元素
* 					- 可以使一个元素既有行内元素的特点又有块元素的特点,既可以设置宽高，又不会独占一行
* 			none: 不显示元素，并且元素不会在页面中继续占有位置
*/

/*
* visibility
* 	- 可以用来设置元素的隐藏和显示的状态
* 	- 可选值：
* 		visible 默认值，元素默认会在页面显示
* 		hidden 元素会隐藏不显示	
*/

/*
* display: none;
* 		使用该方式隐藏的元素，不会在页面中显示，并且不再占据页面的位置
* visibility:hidden;
* 		隐藏的元素虽然不会在页面中显示，但是它的位置会依然保持
*/
```



## overflow

```css
/*
* 	通过overflow可以设置父元素如何处理溢出内容：
* 		可选值：
* 			- visible，默认值，不会对溢出内容做处理，元素会在父元素以外的位置显示
* 			- hidden, 溢出的内容，会被修剪，不会显示
* 			- scroll, 会为父元素添加滚动条，通过拖动滚动条来查看完整内容
* 					- 该属性不论内容是否溢出，都会添加水平和垂直双方向的滚动条
* 			- auto，会根据需求自动添加滚动条，
* 						需要水平就添加水平
* 						需要垂直就添加垂直
* 						都不需要就都不加
*/
```



## opacity

```css
/*
* opacity设置元素背景的透明，需要一个0-1之间的值、
*	opacity:0.5;
* 		- 0 表示完全透明
* 		- 1 表示完全不透明
* 		- 0.5 表示半透明
*
* opacity属性在IE8及以下的浏览器中不支持，IE8及以下的浏览器需要使用如下属性代替，需要一个0-100之间的值
* 	filter: alpha(opacity=50);
* 		- 0 表示完全透明
* 		- 100 表示完全不透明
* 		- 50 半透明
* 
*/
# 兼容IE8-写法(半透明)
opacity:0.5;
filter:alpha(opacity=50);
```





## 文档流

```html
<!-- 
	文档流
		文档流处在网页的最底层，它表示的是一个页面中的位置，
		 我们所创建的元素默认都处在文档流中
		 
	元素在文档流中的特点
		块元素
			1.块元素在文档流中会独占一行，块元素会自上向下排列。
			2.块元素在文档流中默认宽度是父元素的100%
			3.块元素在文档流中的高度默认被内容撑开

		内联元素
			1.内联元素在文档流中只占自身的大小，会默认从左向右排列，
				如果一行中不足以容纳所有的内联元素，则换到下一行，继续自左向右。
			2.在文档流中，内联元素的宽度和高度默认都被内容撑开	
-->

<!-- 
	当元素的宽度的值为auto时，此时指定内边距不会影响可见框的大小，
		而是会自动修改宽度，以适应内边距
-->
```





## 浮动( float )

```css
/*
* 使用float来使元素浮动，从而脱离文档流
* 	可选值：
* 		none，默认值，元素默认在文档流中排列
* 		left，元素会立即脱离文档流，向页面的左侧浮动
* 		right，元素会立即脱离文档流，向页面的右侧浮动
* 
* 当为一个元素设置浮动以后（float属性是一个非none的值），
* 	- 元素会立即脱离文档流，元素脱离文档流以后，它下边的元素会立即向上移动
* 	- 元素浮动以后，会尽量向页面的左上或这是右上漂浮，直到遇到父元素的边框或者其他的浮动元素
* 	- 如果浮动元素上边是一个没有浮动的块元素，则浮动元素不会超过块元素
* 	- 浮动的元素不会超过他上边的兄弟元素，最多最多一边齐
*/

/*
* 在文档流中，子元素的宽度默认占父元素的全部
* 当元素设置浮动以后，会完全脱离文档流.
* 	- 块元素脱离文档流以后，高度和宽度都被内容撑开
* 	- 内联元素脱离文档流以后会变成块元素
*/
```



###  高度塌陷问题

```css
 /*
 * 在文档流中，父元素的高度默认是被子元素撑开的，也就是子元素多高，父元素就多高。
 * 但是当为子元素设置浮动以后，子元素会完全脱离文档流，此时将会导致子元素无法撑起父元素的高度，导致父元素的高度塌陷。
 * 由于父元素的高度塌陷了，则父元素下的所有元素都会向上移动，这样将会导致页面布局混乱。
 * 
 * 所以在开发中一定要避免出现高度塌陷的问题,
 *   我们可以将父元素的高度写死，以避免塌陷的问题出现，
 *   但是一旦高度写死，父元素的高度将不能自动适应子元素的高度，所以这种方案是不推荐使用的。
 */
 
 /*
 * 根据W3C的标准，在页面中元素都一个隐含的属性叫做 Block Formatting Context
 *   简称BFC，该属性可以设置打开或者关闭，默认是关闭的。
 * 当开启元素的BFC以后，元素将会具有如下的特性：
 *   1.父元素的垂直外边距不会和子元素重叠 
 *   2.开启BFC的元素不会被浮动元素所覆盖
 *   3.开启BFC的元素可以包含浮动的子元素
 * 
 * 如何开启元素的BFC
 *   1.设置元素浮动
 *       - 使用这种方式开启，虽然可以撑开父元素，但是会导致父元素的宽度丢失
 *           而且使用这种方式也会导致下边的元素上移，不能解决问题
 *   2.设置元素绝对定位(同上)
 *   3.设置元素为inline-block
 *       - 可以解决问题，但是会导致宽度丢失，不推荐使用这种方式
 *   4.将元素的overflow设置为一个非visible的值
 *   
 * 推荐方式：将overflow设置为hidden是副作用最小的开启BFC的方式。   
 */
 
 # overflow:hidden;
 # zoom:1;   /* IE6 */
 /*
 *但是在IE6及以下的浏览器中并不支持BFC，所以使用这种方式不能兼容IE6。
 * 在IE6中虽然没有BFC，但是具有另一个隐含的属性叫做 hasLayout，
 * 该属性的作用和BFC类似，所在IE6浏览器可以通过开hasLayout来解决该问题
 * 开启方式很多，我们直接使用一种副作用最小的：
 *   - 直接将元素的zoom设置为1即可
 */
 
 /*
 * zoom表示放大的意思，后边跟着一个数值，写几就将元素放大几倍
 * zoom:1表示不放大元素，但是通过该样式可以开启hasLayout
 * zoom这个样式，只在IE中支持，其他浏览器都不支持
 */
 
 ####### 解决高度塌陷最佳方案 #######
 /*
 * 可以通过after伪类向元素的最后添加一个空白的块元素，然后对其清除浮动，
 *   这样做和添加一个div的原理一样，可以达到一个相同的效果，
 *   而且不会在页面中添加多余的div，这是我们最推荐使用的方式，几乎没有副作用
 */
 .clearfix:after{   
     content: "";    /*添加一个内容*/  
     display: block;     /*转换为一个块元素*/
     clear: both;    /*清除两侧的浮动*/
 }
```



### 清除浮动

```css
 /*
 * 我们有时希望清除掉其他元素浮动对当前元素产生的影响，这时可以使用clear来完成功能
 * clear可以用来清除其他浮动元素对当前元素的影响
 * 可选值：
 *       none，默认值，不清除浮动
 *       left，清除左侧浮动元素对当前元素的影响
 *       right，清除右侧浮动元素对当前元素的影响
 *       both，清除两侧浮动元素对当前元素的影响（清除对他影响最大的那个元素的浮动）
 */
```





## 定位( position )

```css
/*
* 定位：
* 	- 定位指的就是将指定的元素摆放到页面的任意位置
* 		通过定位可以任意的摆放元素
* 	- 通过position属性来设置元素的定位
* 		-可选值：
* 			static：默认值，元素没有开启定位
* 			relative：开启元素的相对定位
* 			absolute：开启元素的绝对定位
* 			fixed：开启元素的固定定位（也是绝对定位的一种）
*/
```



### 相对定位( relative )

```css
/*
* 当元素的position属性设置为relative时，则开启了元素的相对定位
* 	1.当开启了元素的相对定位以后，而不设置偏移量时，元素不会发生任何变化
*   2.相对定位是相对于元素在文档流中原来的位置进行定位
* 	3.相对定位的元素不会脱离文档流
* 	4.相对定位会使元素提升一个层级
* 	5.相对定位不会改变元素的性质，块还是块，内联还是内联
*/

/*
* 当开启了元素的定位（position属性值是一个非static的值）时，
* 	可以通过left right top bottom四个属性来设置元素的偏移量
* 	- left：元素相对于其定位位置的左侧偏移量
* 	- right：元素相对于其定位位置的右侧偏移量
* 	- top：元素相对于其定位位置的上边的偏移量
* 	- bottom：元素相对于其定位位置下边的偏移量
* 
* 通常偏移量只需要使用两个就可以对一个元素进行定位，
* 	一般选择水平方向的一个偏移量和垂直方向的偏移量来为一个元素进行定位
*/
```





### 绝对定位( absolute )

```css
/*
* 当position属性值设置为absolute时，则开启了元素的绝对定位
* 
* 绝对定位：
* 	1.开启绝对定位，会使元素脱离文档流
* 	2.开启绝对定位以后，如果不设置偏移量，则元素的位置不会发生变化
* 	3.绝对定位是相对于离他最近的开启了定位的祖先元素进行定位的
* 		（一般情况，开启了子元素的绝对定位都会同时开启父元素的相对定位）
* 		如果所有的祖先元素都没有开启定位，则会相对于浏览器窗口进行定位
* 	4.绝对定位会使元素提升一个层级
* 	5.绝对定位会改变元素的性质，
* 		内联元素变成块元素，块元素的宽度和高度默认都被内容撑开
*/
```





### 固定定位( fixed )

```css
/*
* 当元素的position属性设置fixed时，则开启了元素的固定定位
* 	固定定位也是一种绝对定位，它的大部分特点都和绝对定位一样
* 不同的是：
* 		固定定位永远都会相对于浏览器窗口进行定位
* 		固定定位会固定在浏览器窗口某个位置，不会随滚动条滚动
* 
* IE6不支持固定定位
*/
```





### 层级( z-index )

```css
/*
* 如果定位元素的层级是一样，则下边的元素会盖住上边的
* 通过z-index属性可以用来设置元素的层级，可以为z-index指定一个正整数作为值，该值将会作为当前元素的层级
* 层级越高，越优先显示，但父元素的层级再高，也不会盖住子元素
* 
* 注意：对于没有开启定位的元素不能使用z-index
*/
```









## 背景( backgroud )



### background-color

```css
/*设置一个背景颜色*/
```



### background-image

```css
/*
* 使用background-image来设置背景图片
* 	- 语法：background-image:url(相对路径);
* 	- 如果背景图片大于元素，默认会显示图片的左上角
* 	- 如果背景图片和元素一样大，则会将背景图片全部显示
* 	- 如果背景图片小于元素大小，则会默认将背景图片平铺以充满元素
* 
* 可以同时为一个元素指定背景颜色和背景图片，这样背景颜色将会作为背景图片的底色
* 一般情况下设置背景图片时都会同时指定一个背景颜色
*/
```



### background-repeat

```css
/*
* background-repeat用于设置背景图片的重复方式
* 	可选值：
* 		repeat，默认值，背景图片会双方向重复（平铺）
* 		no-repeat ，背景图片不会重复，有多大就显示多大
* 		repeat-x， 背景图片沿水平方向重复
* 		repeat-y，背景图片沿垂直方向重复
*/
```



### background-position

```css
/*
* 通过background-position可以调整背景图片在元素中的位置
* 可选值：
* 		* 该属性可以使用 top right left bottom center中的两个值
* 			来指定一个背景图片的位置
* 			top left 左上
* 			bottom right 右下
* 			如果只给出一个值，则第二个值默认是center
* 
* 		* 可以直接指定两个偏移量
* 			第一个值是水平偏移量
* 				- 如果指定的是一个正值，则图片会向右移动指定的像素
* 				- 如果指定的是一个负值，则图片会向左移动指定的像素
* 			第二个是垂直偏移量	
* 				- 如果指定的是一个正值，则图片会向下移动指定的像素
* 				- 如果指定的是一个负值，则图片会向上移动指定的像素
* 		
*/
```



### background-attachment

```css
/*
* background-attachment用来设置背景图片是否随页面一起滚动
* 		可选值：
* 			- scroll，默认值，背景图片随着窗口滚动
* 			- fixed，背景图片会固定在某一位置，不随页面滚动
* 
* 不随窗口滚动的图片，我们一般都是设置给body，而不设置给其他元素
* 
* 当背景图片的background-attachment设置为fixed时，
* 	背景图片的定位永远相对于浏览器的窗口
*/
```



### background-origin

- [background-origin - CSS（层叠样式表） | MDN (mozilla.org)](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-origin)

```css
/* 规定了指定背景图片 background-image 属性的原点位置的背景相对区域 */
    - border-box	 	背景图片的摆放以border区域为参考
    - padding-box  		背景图片的摆放以padding区域为参考
    - content-box  		背景图片的摆放以content区域为参考

# Nodes: 
	默认情况下背景图片是从padding box开始绘制，从border box开始剪裁
# Nodes: 
	当使用 background-attachment 为fixed时，该属性将被忽略不起作用。
```



### background-clip

- [background-clip - CSS（层叠样式表） | MDN (mozilla.org)](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-clip)

```css
/* 设置元素的背景（背景图片或颜色）是否延伸到边框、内边距盒子、内容盒子下面。 */
    - border-box    背景延伸至边框外沿（但是在边框下层）。
    - padding-box   背景延伸至内边距（padding）外沿。不会绘制到边框处。
    - content-box   背景被裁剪至内容区（content box）外沿。
    - text    背景被裁剪成文字的前景色。

```



### background-size

- [[background-size - CSS（层叠样式表） | MDN (mozilla.org)](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-size)](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-clip)

```css
/* 设置背景图片大小。 */
	- auto
	- cover
	- contain
	- <length>		指定背景图片大小，不能为负值。
```



```css
### 简写属性 ###
/*
* background
* 	- 通过该属性可以同时设置所有背景相关的样式
* 	- 没有顺序的要求，谁在前在后都行
* 		也没有数量的要求，不写的样式就使用默认值
*/
```



## 表单相关



### caret-color

```css
/* 定义插入光标（caret）的颜色 */
    caret-color: red;
    caret-color: auto;
    caret-color: #5729e9;

```







## 滚动条













## resize

- [resize - CSS（层叠样式表） | MDN (mozilla.org)](https://developer.mozilla.org/zh-CN/docs/Web/CSS/resize)

```css
/* 控制一个元素的可调整大小性 */
    - none 	元素不能被用户缩放。
    - both 	允许用户在水平和垂直方向上调整元素的大小。
    - horizontal 	允许用户在水平方向上调整元素的大小。
    - vertical 	允许用户在垂直方向上调整元素的大小。

# Notes: 需要结合 overflow:auto; 一起使用。
	    如果一个block元素的 overflow 属性被设置成了visible，那么resize属性对该元素无效。
```





## box-sizing

- [box-sizing - CSS（层叠样式表） | MDN (mozilla.org)](https://developer.mozilla.org/zh-CN/docs/Web/CSS/box-sizing)

```css
/* 如何计算一个元素的总宽度和总高度 */
	- content-box：默认值。如果你设置一个元素的宽为100px，那么这个元素的内容区会有100px 宽，
	  			  并且任何边框和内边距的宽度都会被增加到最后绘制出来的元素宽度中。

	- border-box：border和padding包含在元素的宽高之内。
		         ( content = content - border - padding )

# Notes: border-box不包含margin
```





## border-radius

- [border-radius - CSS（层叠样式表） | MDN (mozilla.org)](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-radius)

```css
/* 设置元素的外边框圆角 */
```



## border-image

- [border-image - CSS（层叠样式表） | MDN (mozilla.org)](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-image)









## 元素隐藏方法总结

```css
1、如果希望元素不可见、不占据空间、资源会加载、DOM 可访问： display: none；
2、如果希望元素不可见、不能点击、但占据空间、资源会加载，可以使用： visibility: hidden；
3、如果希望元素不可见、不占据空间、显隐时可以又transition淡入淡出效果，
   这里使用visibility: hidden而不是display: none，是因为display: none会影响css3的transition过渡效果。 
   但是display: none并不会影响cssanimation动画的效果。
4、如果希望元素不可见、可以点击、占据空间，可以使用： opacity: 0；
5、如果希望元素不可见、可以点击、不占据空间，可以使用： opacity: 0; position: absolute;；
6、如果希望元素不可见、不能点击、占据空间，可以使用： position: relative; z-index: -1;；
7、如果希望元素不可见、不能点击、不占据空间，可以使用： position: absolute ; z-index: -1;；

```



### display: none`与`visibility: hidden的区别

```css
1、display: none的元素不占据任何空间，visibility: hidden的元素空间保留；
2、display: none会影响css3的transition过渡效果，visibility: hidden不会；
3、display: none隐藏产生重绘 ( repaint ) 和回流 ( relfow )，
   visibility: hidden只会触发重绘；
4、株连性：display: none的节点和子孙节点元素全都不可见，
          visibility: hidden的节点的子孙节点元素可以设置 visibility: visible显示。
          visibility: hidden属性值具有继承性，所以子孙元素默认继承了hidden而隐藏，
          但是当子孙元素重置为visibility: visible就不会被隐藏
```











































# 选择器



- https://juejin.cn/post/6908879198933221383

  

## 基本选择器

```css
/*通配符选择器*/		
	* { margin: 0; padding: 0; border: none; }
/*元素选择器*/		
	body { background: #eee; }
/*类选择器*/		
	.list { list-style: square; }
/*ID选择器*/		
	#list { width: 500px; margin: 0 auto; }
/*后代选择器*/		
	.list li { margin-top: 10px; background: #abcdef; }

/*子元素选择器*/ 
	#wrap > .inner {color: pink;}
# 也可称为直接后代选择器,此类选择器只能匹配到直接后代，不能匹配到深层次的后代元素
	
/*相邻兄弟选择器*/	
	#wrap #first + .inner {color: #f00;}
# 它只会匹配紧跟着的兄弟元素

/*通用兄弟选择器*/	
	#wrap #first ~ div { border: 1px solid;}
# 它会匹配所有的兄弟元素(不需要紧跟)

/*选择器分组*/		
	h1,h2,h3{color: pink;}  
# 此处的逗号我们称之为结合符
```



## 属性选择器

```css
/* 存在和值属性选择器 */	
- [attr]：该选择器选择包含 attr 属性的所有元素，不论 attr 的值为何。
- [attr=val]：该选择器仅选择 attr 属性被赋值为 val 的所有元素。
- [attr~=val]：表示带有以 attr 命名的属性的元素，并且该属性是一个以空格作为分隔的值列表，其中至少一个值为val。

/* 子串值属性选择器 */
- [attr|=val] : 选择attr属性的值是val（包括val）或以val-开头的元素。
- [attr^=val] : 选择attr属性的值以val开头（包括val）的元素。
- [attr$=val] : 选择attr属性的值以val结尾（包括val）的元素。
- [attr*=val] : 选择attr属性的值中包含字符串val的元素。
```



## 伪类与伪元素选择器

```css
/*
* 链接伪类
*	注意:link，:visited，:target是作用于链接元素的！
*/		
    :link		表示作为超链接，并指向一个未访问的地址的所有锚
    :visited	表示作为超链接，并指向一个已访问的地址的所有锚
    :target 	代表一个特殊的元素，它的id是URI的片段标识符
/*
*动态伪类
*	注意:hover，:active基本可以作用于所有的元素！
*/		
	:hover		表示悬浮到元素上
	:active		表示匹配被用户激活的元素（点击按住时）

# 由于a标签的:link和:visited可以覆盖了所有a标签的状态，所以当:link，:visited，:hover，:active同时出现在a标签
身上时 :link和:visited不能放在最后！！！		lvha

:visited选择器,只有下列的属性才能被应用到已访问链接，其他无效
    color
    background-color
    border-color

### ### 注意 ### ###
/*
* :link :visited只能作用于a链接元素，:hover，:active基本可以作用于所有的元素！
* 并且:visited只能设置 color  background-color  border-color三个属性，其他属性无效
*/
```

```css
/* 表单相关伪类 */
    :enabled	匹配可编辑的表单
    :disable	匹配被禁用的表单
    :checked	匹配被选中的表单
    :focus		匹配获焦的表单
```

```css
/* 结构性伪类 */
    - index的值从1开始计数！
    - index可以为变量n(只能是n)
    - index可以为even odd

#wrap ele:nth-child(index)		
	- 表示匹配#wrap中第index的子元素，这个子元素必须是ele
#wrap ele:nth-of-type(index)	
	- 表示匹配#wrap中第index的ele子元素

	# :nth-child和:nth-of-type有一个很重要的区别！:nth-of-type以元素为中心！！！

	:nth-child(index)系列			
        :first-child
        :last-child
        :nth-last-child(index)
        :only-child	(相对于:first-child:last-child 或者 :nth-child(1):nth-last-child(1))	
		/* 前3个元素 */
		li:nth-child(-n+3){
        	color: deeppink;
    	}

	:nth-of-type(index)系列
        :first-of-type
        :last-of-type
        :nth-last-type(index)
        :only-of-type	(相对于:first-of-type:last-of-type 或者 :nth-of-type(1):nth-last-of-type(1))

:not		
:empty(内容必须是空的，有空格都不行，有attr没关系)
```

```css
/* 伪元素 */
    ::after
    ::before
    ::firstLetter
    ::firstLine
    ::selection
```



## css声明的优先级

```css

```





# 文本



## text-shadow

- [text-shadow - CSS（层叠样式表） | MDN (mozilla.org)](https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-shadow)

```css
/* 文字添加阴影 */
	- 每个阴影值由元素在X和Y方向的偏移量、模糊半径和颜色值组成。颜色可放第一位和最后一位。
text-shadow: 1px 1px 2px black;		/* 必选 必选 可选 可选 */
/* offset-x | offset-y | blur-radius | color */
```

```css
h1{ 
    text-shadow: 2px 2px 9px black;
    font: 100px/200px "微软雅黑"; 
    color: white;
    text-align: center; 
}
```

![image-20210524091700471](assets\image-20210524091700471.png)



## text-decoration

- [text-decoration - CSS（层叠样式表） | MDN (mozilla.org)](https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-decoration)

```css
/* 设置文本的修饰线外观的（下划线、上划线、贯穿线/删除线或闪烁） */
	- 是下列四个属性的缩写。
        - text-decoration-line
            文本修饰的位置, 如下划线underline，删除线line-through
        - text-decoration-color
            文本修饰的颜色
        - text-decoration-style
            文本修饰的样式, 如波浪线wavy实线solid虚线dashed
        - text-decoration-thickness
            文本修饰线的粗细
```





## text-align

```css
/* 定义行内内容（例如文字）如何相对它的块父元素对齐。text-align 并不控制块元素自己的对齐，只控制它的行内内容的对齐。*/
```





## direction

- [direction - CSS（层叠样式表） | MDN (mozilla.org)](https://developer.mozilla.org/zh-CN/docs/Web/CSS/direction)

```css
/* 设置文本、表列水平溢出的方向 */
	- ltr	默认属性。可设置文本和其他元素的默认方向是从左到右。
	- rtl 	可设置文本和其他元素的默认方向是从右到左。
	- direction: ltr; || direction: rtl;

# 通常配合 unicode-bidi 一起使用
	direction:rtl;
	unicode-bidi:bidi-override;
```





## writing-mode

```css
/* 排版竖文 */
```





## text-align-last

```css
/* 设置文本两端对齐 */
text-align-last: justify;
```

![image-20210711150711209](assets\image-20210711150711209.png)

![image-20210711150731055](assets\image-20210711150731055.png)











## text-overflow

- [text-overflow - CSS（层叠样式表） | MDN (mozilla.org)](https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-overflow)

```css
/* 如何显示的溢出内容 */
```

![image-20210524100225782](assets\image-20210524100225782.png)





## ::first-letter

- [::first-letter (:first-letter) - CSS（层叠样式表） | MDN (mozilla.org)](https://developer.mozilla.org/zh-CN/docs/Web/CSS/::first-letter)

```css
/* 选中首个字符 */
```

![img](https://user-gold-cdn.xitu.io/2019/7/20/16c0f2269b48097d?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)



## word-spacing

```css
/* word-spacing指的是字符“空格”的间隙。如果一段文字中没有空格，则该属性无效。*/
```

![image-20210711115342084](assets\image-20210711115342084.png)



## white-space

```css
/* 如果在html中输入多个空白符，默认会被当成一个空白符处理，实际上就是这个属性控制的 */
    normal：合并空白符和换行符；
    nowrap：合并空白符，但不许换行；
    pre：不合并空白符，并且只在有换行符的地方换行；
    pre-wrap：不合并空白符，允许换行符换行和文本自动换行；
```





## 字体分栏

```css
column-count	分栏数量
column-gap		每一列中间的距离
column-rule		分栏中间的
```





## 单行省略号

```css
/* 单行省略号 */
p {
	white-space:nowrap; 	/* 不换行 */
	overflow:hidden; 		/* 超出隐藏 */
	text-overflow:ellipsis;  /* 省略号 */
}
```



## 多行省略号

```css
/* 多行省略号 */
p{
    display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 3;
	overflow: hidden;
}
```











# 渐变



## 线性 ( linear-gradient )

- [linear-gradient - CSS（层叠样式表） | MDN (mozilla.org)](https://developer.mozilla.org/zh-CN/docs/Web/CSS/linear-gradient())



## 径向 ( radial-gradient )

- [radial-gradient() - CSS（层叠样式表） | MDN (mozilla.org)](https://developer.mozilla.org/zh-CN/docs/Web/CSS/radial-gradient())

```css
radial-gradient() 函数创建一个<image>，用来展示由原点（渐变中心）辐射开的颜色渐变

-默认均匀分布
    radial-gradient(red,blue);
 
-不均匀分布
    radial-gradient(red 50%,blue 70%);
 
-改变渐变的形状
   radial-gradient(circle ,red,blue)
   circle
   ellipse（默认为椭圆）
 
-渐变形状的大小
   radial-gradient(closest-corner  circle ,red,blue)
   closest-side   最近边
   farthest-side  最远边
   closest-corner 最近角
   farthest-corner 最远角  （默认值）
 
-改变圆心
   radial-gradient(closest-corner  circle at 10px 10px,red,blue);  
 
```











## 圆锥





# 过渡 ( transition )



## transition-property

```css
/* 指定应用过渡属性的名称 */
	- all （默认值）所有可被动画的属性都表现出过渡动画。	
	- IDENT 属性名称。 transition-property: width, height, color;
	- none 没有过渡动画。

```



## transition-duration

- [transition-duration - CSS（层叠样式表） | MDN (mozilla.org)](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transition-duration)

```css
/* 以秒或毫秒为单位指定过渡动画所需的时间。默认值为 0s ，表示不出现过渡动画 */
	- time 表示过渡属性从旧的值转变到新的值所需要的时间。
		   如果时长是 0s ，表示不会呈现过渡动画，属性会瞬间完成转变。不接受负值。

# Nodes: 可以指定多个时长，每个时长会被应用到由 transition-property 指定的对应属性上。
		如果指定的时长个数小于属性个数，那么时长列表会重复。如果时长列表更长，那么该列表会被裁减。

```



## transition-timing-function

- [transition-timing-function - CSS（层叠样式表） | MDN (mozilla.org)](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transition-timing-function)

```css
/* 变化过程曲线 */
属性值：
         1、ease：（加速然后减速）默认值，ease函数等同于贝塞尔曲线(0.25, 0.1, 0.25, 1.0).
         2、linear：（匀速），linear 函数等同于贝塞尔曲线(0.0, 0.0, 1.0, 1.0).
         3、ease-in：(加速)，ease-in 函数等同于贝塞尔曲线(0.42, 0, 1.0, 1.0).
         4、ease-out：（减速），ease-out 函数等同于贝塞尔曲线(0, 0, 0.58, 1.0).
         5、ease-in-out：（加速然后减速），ease-in-out 函数等同于贝塞尔曲线(0.42, 0, 0.58, 1.0)
         6、cubic-bezier： 贝塞尔曲线
         7、step-start：等同于steps(1,start)
            step-end：等同于steps(1,end)
            steps(<integer>,[start|end])
                      第一个参数：必须为正整数，指定函数的步数
                      第二个参数：指定每一步的值发生变化的时间点（默认值end）
                      
# Nodes: 如果timing function的个数比主列表中数量少，缺少的值被设置为初始值（ease）。如果timing function比主列表要多，
		timing function函数列表会被截断至合适的大小。这两种情况下声明的CSS属性都是有效的。

```



## transition-delay

- [transition-delay - CSS（层叠样式表） | MDN (mozilla.org)](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transition-delay)

```css
/* 在过渡效果开始作用之前需要等待的时间 */
	- time 值以秒（s）或毫秒（ms）为单位，表明动画过渡效果将在何时开始。
		   取值为正时会延迟一段时间来响应过渡效果；取值为负时会导致过渡立即开始。

# Nodes: 可以指定多个延迟时间，每个延迟将会分别作用于你所指定的相符合的css属性（transition-property）。
		如果指定的时长个数小于属性个数，那么时长列表会重复。如果时长列表更长，那么该列表会被裁减。

# Nodes: 超出的情况下是会被全部截掉的
		不够的时候，关于时间的会重复列表，transition-timing-function的时候使用的是默认值ease
```



## transitionend 事件

```css
/* 
    当过渡完成时触发一个事件，在符合标准的浏览器下，这个事件是 transitionend, 
    在 WebKit 下是 webkitTransitionEnd（每一个拥有过渡的属性在其完成过渡时都会触发一次transitionend事件）
    在transition完成前设置 display: none，事件同样不会被触发 
*/
```



## transition

- [transition - CSS（层叠样式表） | MDN (mozilla.org)](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transition)

```css
/* 简写属性 */
	- transition-property  transition-duration  transition-timing-function  transition-delay
	         过渡属性           过渡持续时间            过渡时间曲线           等待多长时间开始过渡

# Nodes: 可以被指定为一个或多个 CSS 属性的过渡效果，多个属性之间用逗号进行分隔
```











# 变换 ( transform )

## transform ( 2d变换 )

### 旋转（ rotate  ）

```css
transform:rotate(angle);   
    - 正值:顺时针旋转  rotate(360deg)
    - 负值:逆时针旋转  rotate(-360deg)
    - 只能设单值。正数表示顺时针旋转，负数表示逆时针旋转

```





### 平移（ translate ）

```css
- X方向平移:transform:  translateX(tx)
- Y方向平移:transform:  translateY(ty) 
- 二维平移：transform:  translate(tx [ty])； 如果ty没有指定，它的值默认为0。
 
- 可设单值，也可设双值。
       正数表示XY轴正向位移，负数为反向位移。设单值表示只X轴位移，Y轴坐标不变，
       例如transform: translate(100px);等价于transform: translate(100px,0);

```





### 倾斜（ skew ）

```css
transform:skewX(45deg);
    - X方向倾斜:transform:  skewX(angle)
               skewX(45deg):参数值以deg为单位 代表与y轴之间的角度

    - Y方向倾斜:transform:  skewY(angle)
               skewY(45deg):参数值以deg为单位 代表与x轴之间的角度

     - 二维倾斜:transform:  skew(ax[, ay]);  如果ay未提供，在Y轴上没有倾斜
               skew(45deg,15deg):参数值以deg为单位 第一个参数代表与y轴之间的角度
                                 第二个参数代表与x轴之间的角度
                单值时表示只X轴扭曲，Y轴不变，如transform: skew(30deg);等价于transform: skew(30deg, 0);
                考虑到可读性，不推荐用单值，应该用transform: skewX(30deg);。skewY表示只Y轴扭曲，X轴不变  
            
 正值:拉正斜杠方向的两个角
 负值:拉反斜杠方向的两个角
 
```





### 缩放（ scale ）

```css
transform:scale(2);
	- X方向缩放:transform:  scaleX(sx); 
	- Y方向缩放:transform:  scaleY(sy);
	- 二维缩放 :transform:  scale(sx[, sy]);  (如果sy 未指定，默认认为和sx的值相同)  
 
  要缩小请设0.01～0.99之间的值，要放大请设超过1的值。
  例如缩小一倍可以transform: scale(.5);
      放大一倍可以transform: scale(2);
 
 如果只想X轴缩放，可以用scaleX(.5)相当于scale(.5, 1)。
 同理只想Y轴缩放，可以用scaleY(.5)相当于scale(1, .5)
 
 正值:缩放的程度
 负值:不推荐使用（有旋转效果）
 单值时表示只X轴,Y轴上缩放粒度一样，如transform: scale(2);等价于transform: scale(2,2);
 
```





### transform-origin

- [transform-origin - CSS（层叠样式表） | MDN (mozilla.org)](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform-origin)

```css
/* 更改一个元素变形的基点 */
	- 属性可以使用一个，两个或三个值来指定，其中每个值都表示一个偏移量。 
	  没有明确定义的偏移将重置为其对应的初始值。
 	- 如果定义了两个或更多值并且没有值的关键字，或者唯一使用的关键字是center，
	  则第一个值表示水平偏移量，第二个值表示垂直偏移量。
        一个值：
        	必须是<length>，<percentage>，或 left, center, right, top, bottom关键字中的一个。
        两个值：
        	其中一个必须是<length>，<percentage>，或left, center, right关键字中的一个。
        	另一个必须是<length>，<percentage>，或top, center, bottom关键字中的一个。
        三个值：
        	前两个值和只有两个值时的用法相同。
        	第三个值必须是<length>。它始终代表Z轴偏移量。
```





### 矩阵 （ matrix ）







## transform ( 3d变换 )



```css
/* 3D缩放 */
	- transform: scaleZ(number)
	- transform: scale3d(scaleX,scaleY,scaleZ);

# Nodes: 
		如果只设置scaleZ(number)，你会发现元素并没有被扩大或压缩，scaleZ(number)需要和translateZ(length)配合使用，
		number乘以length得到的值，是元素沿Z轴移动的距离，从而使得感觉被扩大或压缩 


/* 3D旋转 */
    - rotateX(angle)、
    - rotateY(angle)、
    - rotateZ(angle)、等价于rotate(angle) 
    ￼- rotate3d(x,y,z,angle)
			x, y, z分别接受一个数值(number),用来计算矢量方向(direction vector)，矢量方向是三维空间中的一条线, 
			从坐标系原点到x, y, z值确定的那个点，元素围绕这条线旋转angle指定的值


/* 3D平移 */
	- transform: translateZ(length)是3D Transformaton特有的，其他两个2D中就有
	- transform: translate3d(translateX,translateY,translateZ);

# Nodes: 
		translateZ 它不能是百分比值; 那样的移动是没有意义的。

```





### 景深（ perspective ）

```css
/*
* 景深:让3D场景有近大远小的效果（我们肉眼距离屏幕的距离）
* 			是一个不可继承属性，但他可以作用于后代元素（不是作用于本身的）
* 
* 原理：
* 		景深越大 灭点越远 元素变形更小	
* 		景深越小 灭点越近 元素变形更大
* 
* 景深基点
* 		视角的位置
* */
```





### 灭点

```css
/* 立体图形各条边的延伸线所产生的相交点。透视点的消失点 */
```





### transform-style

```css
/*
* 这个属性指定了子元素如何在空间中展示，只有两个属性值：flat（默认）和 preserve-3d
*           - flat 表示所有子元素在2D平面呈现，
*           - preserve-3d 表示所有子元素在3D平面呈现，
* 如果被扁平化，则子元素不会独立的存在于三维空间。
* 因为该属性不会被（自动）继承，所以必须为元素所有非叶后代节点设置该属性。
* */
```





### backface-visibility

```css
/* 设置是否显示元素的背面，默认是显示的  */
	- backface-visibility: keyword;
		- hidden
		- visible 默认值
```







# 动画 ( animation )



## animation-name

```css
/* 属性指定应用的一系列动画，每个名称代表一个由@keyframes定义的动画序列 */
    - none
    	特殊关键字，表示无关键帧。
    - keyframename
    	标识动画的字符串

```

```css
animation-name: move;
@keyframes move{
    from{
        transform:rotate(0deg);
    }
    to{
        transform:rotate(360deg);
    }
}
```



## animation-duration

```css
/* 指定一个动画周期的时长 */
	- 0s，表示无动画。
	- 值 一个动画周期的时长，单位为秒(s)或者毫秒(ms)，无单位值无效。

# Notes: 负值无效，浏览器会忽略该声明，但是一些早起的带前缀的声明会将负值当作0s

```



## animation-timing-function

```css
/* 定义CSS动画在每一动画周期中执行的节奏 */
	- 对于关键帧动画来说，timing function作用于一个关键帧周期而非整个动画周期，即从关键帧开始，到关键帧结束。
 
动画的默认效果：由慢变快再变慢
    linear:线性过渡，等同于贝塞尔曲线（0,0,1,1）
    ease:平滑过渡，等同于贝塞尔曲线（0.25,0.1,0.25,1.0）
    ease-in:由慢到快，等同于贝塞尔曲线（0.42,0,1,1）
    ease-out:由快到慢，等同于贝塞尔曲线（0,0,0.58,1）
    ease-in-out:由慢到快再到慢，等同于贝塞尔曲线（0.42,0,0.58,1）
    cubic-bezier(1,1,2,3)
    steps(n,[start|end]) 
       传入一到两个参数，第一个参数意思是把动画分成 n 等分，然后动画就会平均地运行。
       第二个参数 start 表示从动画的开头开始运行，相反，end 就表示从动画的结尾开始运行，
       默认值为 end。
 
```



##  animation-delay

```css
/* 定义动画开始前等待的时间,以秒或毫秒计(属于动画外的范畴) */
	- <time> 从动画样式应用到元素上到元素开始执行动画的时间差。
			该值可用单位为秒(s)和毫秒(ms)。如果未设置单位，定义无效
 
```



## animation-iteration-count

```css
/* 定义了动画执行的次数（属于动画内的范畴） */
   - infinite	无限循环播放动画.
   - <number>	动画播放的次数 不可为负值. 

```



##  animation-direction

```css
/* 定义了动画执行的方向 */
	- normal	每个循环内动画向前循环，换言之，每个动画循环结束，动画重置到起点重新开始,默认属性。

	- alternate	动画交替反向运行，反向运行时，动画按步后退，同时，带时间功能的函数也反向，       
			   比如，ease-in 在反向时成为ease-out。计数取决于开始时是奇数迭代还是偶数迭代

	- reverse 反向运行动画，每周期结束动画由尾到头运行。

	- alternate-reverse 反向交替， 反向开始交替

```



## animation-fill-mode

```css
/* 属于动画外的范畴，定义动画在动画外的状态 */
    1.animation-fill-mode: none
    2.animation-fill-mode: backwards
    3.animation-fill-mode: forwards
    4.animation-fill-mode: both

/* 
* backwards：
*	from之前的状态与form的状态保持一致
* forwards：
*	to之后的状态与to的状态保持一致
* both：
*	backwards + forwards
*/
```



## animation-play-state

```css
/* 定义了动画执行的运行和暂停 */
	- running
      	 	当前动画正在运行。
	- paused
      		 当前动画以被停止。

```





## 关键帧 ( @keyframes )

```css
# 语法：
    @keyframes animiationName{
        keyframes-selector{
            css-style;
        }
    }
 
# 参数：
    - animiationName:必写项，定义动画的名称
    - keyframes-selector：必写项，动画持续时间的百分比
                 from：0%
                 to：100%
    - css-style：css声明
 
```



## animation

- [深入理解CSS动画animation - 小火柴的蓝色理想 - 博客园 (cnblogs.com)](https://www.cnblogs.com/xiaohuochai/p/5391663.html)

```css
# Notes:  在每个动画定义中，顺序很重要
		 可以被解析为时间的第一个值被分配给animation-duration, 第二个分配给 animation-delay。
```



- https://animista.net/









# filter

```css
/* 将模糊或颜色偏移等图形效果应用于元素。滤镜通常用于调整图像，背景和边框的渲染 */
	- grayscale()
		改变输入图像灰度。值为 100% 则完全转为灰度图像，值为 0% 图像无变化。
		值在 0% 到 100% 之间，则是效果的线性乘数。若未设置值，默认是 0。filter: grayscale(100%)	


```









# webkit



## -webkit-box-reflect

```css
/* 设置元素的倒影 */
    - 第一个值：倒影的方向	above, below, right, left
    - 第二个值：倒影的距离，长度单位
    - 第三个值：渐变

# Nodes: 值的顺序不能改变
```



## -webkit-text-stroke

- [-webkit-text-stroke - CSS（层叠样式表） | MDN (mozilla.org)](https://developer.mozilla.org/zh-CN/docs/Web/CSS/-webkit-text-stroke)

```css
/* 为文本字符指定了宽和颜色（文字描边）*/
	- <length> 文本宽.
	- <color> 文本颜色.
	- -webkit-text-stroke: 4px navy;
```

















```js
•••超出DIV溢出隐藏		
		https://blog.csdn.net/xiaodouya87/article/details/50084651

		
•••calc() 函数:
		width: calc(100% - 20px);
		- css3 的 calc()函数。这里的意思是设置宽度比100%的宽度少20px。
		- calc()函数用于动态计算长度值。
		- calc()函数支持 "+", "-", "*", "/" 运算；
		- calc()函数使用标准的数学运算优先级规则；
		
•••水平垂直居中：
	1. display: flex;
	   margin: auto;

	2. display: grid;
	   place-items: center;
	   


•••列表的 marker 属性：小圆点的颜色
	li::marker {
		color: #ccc;
	}
	
	或者使用伪类
	
	li::before {
		content: "•";
		color: #ccc;
		margin-right: 0.5em;
	}

	
•••css3 文字过长用...代替
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;

		
•••CSS中:和:: 一个冒号是伪类，两个冒号是伪元素	https://blog.csdn.net/sinat_36146776/article/details/53138178
		伪类
			:link 			
			伪类将应用于未被访问过的链接，与:visited互斥。
			
			:hover 			
			伪类将应用于有鼠标指针悬停于其上的元素。
			
			:active 		
			伪类将应用于被激活的元素，如被点击的链接、被按下的按钮等。
			
			:visited		
			伪类将应用于已经被访问过的链接，与:link互斥。
			
			:focus 			
			伪类将应用于拥有键盘输入焦点的元素。
			
			:first-child 	
			伪类将应用于元素在页面中第一次出现的时候。
			
			:lang 			
			伪类将应用于元素带有指定lang的情况。
			
			
		伪元素
			::first-letter
			伪元素的样式将应用于元素文本的第一个字（母）。

			::first-line
			伪元素的样式将应用于元素文本的第一行。
			
			::before
			在元素内容的最前面添加新内容。

			::after
			在元素内容的最后面添加新内容。

			
•••box-shadow 添加阴影
			box-shadow: x轴偏移 y轴偏移 模糊距离 阴影颜色 阴影开始方向（默认是从里往外，设置inset就是从外往里）
			box-shadow: 10px 10px 5px #888888 inset; 


•••background-image	添加背景图片
			background-image: url, 定位, 平铺


•••background-size	指定背景图像的大小。CSS3以前，背景图像大小由图像的实际大小决定
			background-size: 宽 高

			
CSS3文本效果
•••text-shadow 文本阴影
			text-shadow: 水平阴影，垂直阴影，模糊的距离，阴影的颜色、
			text-shadow: 5px 5px 5px #FF0000;

•••text-overflow 指定应向用户如何显示溢出内容
			text-overflow: clip|ellipsis|string;
			clip： 修剪文本
			ellipsis：显示省略符号来代表被修剪的文本
			string：使用给定的字符串来代表被修剪的文本

•••word-wrap 自动换行属性允许您强制文本换行 - 即使这意味着分裂它中间的一个字
			word-wrap: normal|break-word;
			normal：只在允许的断字点换行（浏览器保持默认处理）
			break-word：在长单词或 URL 地址内部进行换行

•••outline-offset 简单来说就是在边框 border 外面又加了一层
			outline-offset: length|inherit		轮廓与边框边缘的距离。| 规定应从父元素继承 outline-offset 属性的值。

			
CSS3 媒体查询
•••@media 媒体查询 很多就是用来进行响应式开发了		https://blog.csdn.net/gtlishujie/article/details/81975157
			@media 媒体类型 and (条件) 
			{
			
			}

•••a 标签属性	
	href属性：规定链接指向的页面的 URL。    
	target属性：_blank 新窗口打开链接
	text-decoration:none 删除下划线

边距：
•••margin:上 右 下 左 (顺时针);(4)		margin:上 左右 下;(3)		margin:上下 左右;(2)	margin:上下左右;(1)

```

















