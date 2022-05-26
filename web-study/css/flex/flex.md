# flex布局

## flex布局模型

![](1582080190(1).jpg)

### 一.  flex-container

#### 1.flex-direction

![](1582079737(1).jpg)

#### 2.justify-content

![](1582081270(1).jpg)

#### 3.align-items

![](1582082541(1).jpg)

![](1582082699(1).jpg)

#### 4.flex-wrap

![](1582083472(1).jpg)

#### 5.flex-flow

![](1582166404(1).jpg)

#### 6.align-content

![](1582166275(1).jpg)

### 二. flex-items

#### 1.order

![](1582167101(1).jpg)

#### 2.align-self

![](1582167349(1).jpg)

#### 3.flex-grow

![](1582175743(1).jpg)

#### 4.flex-shrink

![](1582176692(1).jpg)

#### 5.flex-basis

![](1582249704(1).jpg)

#### 6.flex

![](1582250041(1).jpg)





# flex文字描述



	flex容器的属性:      cursor: pointer;
		-flex-direction: 决定主轴的方向（即项目的排列方向）。
			--row（默认值）：主轴为水平方向，起点在左端。
			--row-reverse：主轴为水平方向，起点在右端。
			--column：主轴为垂直方向，起点在上沿。
			--column-reverse：主轴为垂直方向，起点在下沿。
			
	-flex-wrap: 默认项目都排在一条线（又称”轴线”）上。flex-wrap属性定义，如果一条轴线排不下，如何换行。
		--nowrap（默认）：不换行。
		--wrap：换行，第一行在上方。
		--wrap-reverse：换行，第一行在下方。
		
	-flex-flow: 属性是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap。
	
	-justify-content: 属性定义了项目在主轴上的对齐方式。
		具体对齐方式与轴的方向有关。下面假设主轴为从左到右。
		--flex-start（默认值）：左对齐
		--flex-end：右对齐
		--center： 居中
		--space-between：两端对齐，项目之间的间隔都相等。
		--space-around：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。
	
	-align-items: 属性定义项目在侧轴上如何对齐(单行)。
		具体的对齐方式与侧轴的方向有关，下面假设侧从上到下。
		--flex-start：侧轴的起点对齐。
		--flex-end：侧轴的终点对齐。
		--center：侧轴的中点对齐。
		--baseline: 项目的第一行文字的基线对齐。
		--stretch（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度。
		
	-align-content: 属性定义了多根轴线的对齐方式。如果项目只有一行，该属性不起作用(多行)。
		--flex-start：与侧轴的起点对齐。
		--flex-end：与侧轴的终点对齐。
		--center：与侧轴的中点对齐。
		--space-between：与侧轴两端对齐，轴线之间的间隔平均分布。
		--space-around：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。
		--stretch（默认值）：轴线占满整个侧轴。
		
	flex项目的属性:
		-order: 定义项目的排列顺序。数值越小，排列越靠前，默认为0。
		
		-flex-grow: 定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。
	
	-flex-shrink: 定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。
	
	-flex-basis: 定义了在分配多余空间之前，项目占据的主轴空间（main size）。
				 浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。
				 
	-flex: 定义了项目分配剩余空间，用flex来表示占多少份数。
		   是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。
	
	-align-self: 允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。
				 默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch

