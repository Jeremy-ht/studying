## 尚优选PC端项目流程

### 一、项目开篇

### 二、登录注册布局搭建

- html

~~~html
<div id="wrap">
	<!--头部开始-->
    	<header id="header">
        	<!--头部上半部-->
        	<div class="headTop">
            	<!--头部上半部版心-->
            	<div class="headTopMain">
                	<!--左边-->
                	<div class="left">
                    	<h5>欢迎来到尚品汇！   请</h5>
                    	<p>
                        	<a href="javascript:;">登录</a>
                        	<a href="javascript:;">注册</a>
                    	</p>
                	</div>
            	</div>
    		</div>
~~~

- css

~~~css
#wrap{
    //头部开始
    #header
    {
        //头部上半部
        .headTop
        {
            background: #eaeaea;
            height: 30px;
            //头部上半部版心
            .headTopMain
            {
                width: 1200px;
                height: 30px;
                line-height: 30px;
                margin: 0 auto;
                .left
                {
                    float: left;
                    h5{
                        float: left;
                    }
                    p{
                        float: left;
                        a{
                            &:first-child
                            {
                                margin-left: 5px;
                                border-right: 1px solid #b3aeae;
                                padding-right: 5px;
                            }
                        }
                    }
                }
            }
        }
    }
}
~~~

### 三、列表布局搭建

- html

~~~html
 <!--右边-->
 <div class="right">
     <nav>
         <a href="##">我的订单</a>
         <a href="##">我的购物车</a>
         <a href="##">我的尚品汇</a>
         <a href="##">尚品汇会员</a>
         <a href="##">企业采购</a>
         <a href="##">关注尚品汇</a>
         <a href="##">合作招商</a>
         <a href="##">商家后台</a>
     </nav>
 </div>
~~~

- css

~~~css
.right{
    float: right;
    nav{
        font-size: 0px;
        a{
            font-size: 12px;
            margin-right: 10px;
            padding-right: 10px;
            border-right: 1px solid #b3aeae;
            &:last-child
            {
                margin-right:0px;
                padding-right:0px;
                border-right:none;
            }
        }
    }
}
~~~

### 四、logo以及搜索框

- html

~~~html
<!--头部下半部-->
        <div class="headBottom">
            <!--头部下半部版心-->
            <div class="headBottomMain">
                <!--logo-->
                <h1 class="logo">
                    <a href="javascript:;">
                        <img src="images/Logo.png" alt="">
                    </a>
                </h1>
                <!--搜索框-->
                <div class="search">
                    <!-- input 中的提示文本信息-->
                    <input type="text" placeholder="请输入搜索内容">
                    <input type="button" value="搜索">
                </div>
            </div>
        </div>
~~~

- css

~~~css
//头部下半部
.headBottom
{
    //头部下半部版心
    .headBottomMain
    {
        width: 1200px;
        margin: 0 auto;
        .clearfix();
        //logo
        .logo
        {
            float: left;
            img
            {
                width: 175px;
                height: 56px;
                margin: 25px 45px;
            }
        }
        //搜索框
        .search
        {
            float: right;
            margin-top: 35px;
            input
            {
                float: left;
                box-sizing:border-box;
                width: 490px;
                height: 32px;
                padding:0px 4px;
                border: 3px solid #ea4a36;
                color: blue; //设置输入文本的样式
                &:last-child
                {
                    width: 68px;
                    height: 32px;
                    background: #ea4a36;
                    color: #fff;
                    border: none;
                }
                //设置提示文本的样式
                &::-webkit-input-placeholder
                {
                    color: yellowgreen;
                }

            }
        }
    }
}
~~~

由于父元素中的子元素的浮动效果，会产生父元素的高度塌陷问题，这种现象在后面的样式中也是比较常见的，所

以我们需要在css目录中创建一个单独的mixins目录，在其中创建一个clear.less文件，然后在需要的位置调用即可。

~~~css
.clearfix()
{
    &::after
    {
        content: '';
        display: block;
        clear: both;
    }
}
~~~

### 五、分类导航

- html

~~~html
<!--分类导航开始-->
    <div class="navWrap">
        <!--分类导航的版心-->
        <div class="navWrapMain">
            <nav>
                <a href="javascript:;">全部商品分类</a>
                <a href="javascript:;">服装城</a>
                <a href="javascript:;">美妆馆</a>
                <a href="javascript:;">尚品汇超市</a>
                <a href="javascript:;">全球购</a>
                <a href="javascript:;">闪购</a>
                <a href="javascript:;">团购</a>
                <a href="javascript:;">有趣</a>
                <a href="javascript:;">秒杀</a>
            </nav>
        </div>
    </div>
<!--分类导航结束-->
~~~

- css

~~~css
//分类导航开始
.navWrap
{
    border-bottom: 2px solid #e1251b;
    //分类导航的版心
    .navWrapMain
    {
        width: 1200px;
        margin: 0 auto;
        nav
        {
            .clearfix();
            a
            {
                float: left;
                margin:0px 22px;
                font-size: 16px;
                color: #333;
                line-height: 50px;
                &:first-child
                {
                    width: 210px;
                    height: 50px;
                    background: #e1251b;
                    color: #fff;
                    font-size: 14px;
                    font-weight: bold;
                    text-align: center;
                }

            }
        }
    }
}
//分类导航结束
~~~

### 六、路径导航布局搭建

- html

~~~html
<!--内容区域开始-->
<div id="content">
    <!--内容区域的版心-->
    <div class="conMain">
        <!--路径导航开始-->
        <div class="navPath">
            <a href="javascript:;">手机、数码、通讯</a>
            <span>/</span>
            <a href="javascript:;">手机</a>
            <span>/</span>
            <a href="javascript:;">Apple苹果</a>
            <span>/</span>
            <a>iphone 6S系</a>
        </div>
        <!--路径导航结束-->
    </div>
</div>
~~~

- css

~~~css
#content
{
    //内容区域的版心
    .conMain
    {
        width: 1200px;
        margin: 15px auto 0;
        //路径导航开始
        .navPath
        {
            padding: 9px 15px 9px 0;
            font-size: 0px;
            a
            {
                font-size: 12px;
            }
            span
            {
                padding: 0 5px;
                font-size: 12px;
            }
        }
        //路径导航结束
    }
}
~~~

### 七、路径导航数据动态渲染

> 思路提示：
>
> 1、由于路径导航中的数据是动态数据，所以需要获取
>
> 2、拿到的数据是一个数组，所以需要遍历来获取其中的每一条数据
>
> 3、在遍历过程中根据之前布局的结构来动态创建a元素以及i元素，并填充内容以及设置相应的属性。
>
> 4、最后处理细节，导航中的最后一个数据是普通文本，所以在遍历的条件中需要判断。
>
> 5、考虑到开发中的变量存储都在全局作用域中，容易被污染，所以需要把每一个功能列为一个函数。

第一步：在html页面的底部引入data.js文件以及index.js

~~~js
<script src="js/data.js"></script>
<script src="js/index.js"></script>
~~~

第二步：考虑到需要将所有的DOM和资源都加载完毕之后才执行此功能，在文件的开头添加一句话

~~~js
window.onload = function(){}
~~~

第三步：在事件函数中创建第一个功能函数，起名为 navPathBind，并调用，当然函数名也可以自定义。

~~~js
//调用函数(能够在定义函数之前调用，原因是因为预解析)
navPathBind();
//定义函数
function navPathBind() {
	//1.获取相应的DOM元素对象
    var navPath = document.querySelector('#wrap #content .conMain .navPath');
    //2.获取data.js数组中的path数据
    var data = goodData.path;
    //3.path数据是一个数组，所以需要遍历获取
     for (var i = 0; i < data.length; i++) {
         //4.由于导航中的最后一个元素是普通文本，其他都是超链接并且后面带有"/",需要条件判断
         //当i的值循环到满足条件的最后一个值的时候
         if(i === data.length-1){
             //创建一个a元素
             var aNode = document.createElement('a');
             //设置a的值为数组对应下标的title的值
             aNode.innerHTML = data[i].title;
             //让navPath元素来追加这个新创建的a
             navPath.appendChild(aNode)
         }else {
             //创建一个a元素
             var aNode = document.createElement('a');
             //设置a元素的href属性为数组对应下标的url的值
             aNode.href = data[i].url;
             //设置a的值为数组对应下标的title的值
             aNode.innerHTML = data[i].title;
             //让navPath元素来追加这个新创建的a
             navPath.appendChild(aNode)

             //创建span 元素
             var spanNode = document.createElement('span');
             //设置span元素的值为"/"
             spanNode.innerHTML = '/';
             //让navPath元素来追加这个新创建的span
             navPath.appendChild(spanNode)
         }
     }
}
~~~

### 八、左侧放大镜布局搭建

- html

~~~html
<!--放大镜区域开始-->
<div class="bigWrap">
    <!--左边：放大镜的布局-->
    <div class="left">
        <!--上半部：图片的显示-->
        <div class="leftTop">
            <!--小图-->
            <div class="smallPic">
                <img src="images/s1.png" alt="">
                <!--蒙版：遮罩层-->
                <div class="mask"></div>
            </div>
            <!--大图-->
            <div class="bigimgWrap"></div>
        </div>
    </div>
</div>
~~~

- css

~~~css
//放大镜区域开始
.bigWrap
{
    margin:5px 0 15px;
    .clearfix();
    //左边：放大镜的布局
    .left
    {
        float: left;
        width: 400px;
        //上半部：图片的显示
        .leftTop
        {
            position: relative;
            width: 400px;
            height: 400px;
            border: 1px solid #DFDFDF;
            //小图
            .smallPic
            {
                width: 400px;
                height: 400px;
                position: relative;
                img
                {
                    width: 400px;
                    height: 400px;
                }
                //蒙版
                .mask
                {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 200px;
                    height: 200px;
                    background: rgba(255,255,255,.5);
                    border: 1px solid #ddd;
                }
            }
            //大图
            .bigimgWrap
            {
                width: 400px;
                height: 400px;
                position: absolute;
                left: 420px;
                top: 0;
                border: 1px solid #ddd;
                overflow: hidden;
                img
                {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 800px;
                    height: 800px;
                }
            }
        }
    }
}
~~~

### 九、放大镜鼠标移入移出效果

> 思路提示：
>
> 1、给小图元素设置鼠标移入(onmouseenter)、移动(onmousemove)、移出(onmouseleave)事件，主要考虑移入
>
> 和移出事件是没有冒泡效果的。
>
> 2、根据效果得知，鼠标移入会显示一个蒙版元素以及大图框元素，移出时就会消失，
>
> 3、所以在移入事件中进行元素的创建，在移出事件中进行元素的移除即可

第一步：创建一个函数，起名为 bigClassBind ，并调用

~~~js
//函数调用
magnifyingGlass ();
//函数定义
function magnifyingGlass(){
	//1.获取小图元素对象
    var smallPic = document.querySelector('#wrap #content .conMain .bigWrap .left .leftTop .smallPic');
    //2.获取leftTop元素
    var leftTop = document.querySelector('#wrap #content .conMain .bigWrap .left .leftTop')
    
    //3.获取数据
    var imagessrc = goodData.imagessrc;
    //4.设置事件整体架构
    
    //移入事件
    smallPic.onmouseenter = function () {
        
        
        //移动事件
        smallPic.onmousemove = function () {
            
        }
        
        //移出事件
        smallPic.onmouseleave = function () {
            
        }
    }
}
~~~

在移入事件中创建蒙版元素以及大图框和大图片元素

~~~js
smallPic.onmouseenter = function () {
 	//创建蒙版元素
    var mask = document.createElement('div');
    //设置class属性为mask
    mask.className = 'mask'
    //让smallPic元素追加mask蒙版元素
    smallPic.appendChild(mask);
    
    //创建大图框元素
    var bigimgWrap = document.createElement('div');
    //设置class属性为bigimgWrap
    bigimgWrap.className = 'bigimgWrap'
    
    //创建大图片元素
    var bigImg = document.createElement('img')
    //设置大图片元素的路径
    bigImg.src = "images/b1.png";
    //让大图框元素追加大图片元素
    bigimgWrap.appendChild(bigImg);
    //让leftTop追加大图框元素
    leftTop.appendChild(bigimgWrap);
 }
~~~

在移出事件中移除蒙版元素以及大图框元素

~~~js
smallPic.onmouseleave = function () {
    //对onmousemove和onmouseleave事件进行解绑
    smallPic.onmousemove = smallPic.onmouseleave = null;
    //移除 蒙版 区域
    smallPic.removeChild(mask)
    //移除 大图 区域
    leftTop.removeChild(bigimgWrap)
}
~~~

### 十、放大镜鼠标移动实现蒙版元素的拖拽效果

![](素材\蒙版元素移动的距离1.png)

~~~js
smallPic.onmousemove = function (event) {
    //蒙版发生移动
    //确定蒙版的 left top
    //蒙版位置 = 鼠标的位置 - 小图距离屏幕左侧的距离 - 蒙版宽度的一半
    var left = event.clientX - smallPic.getBoundingClientRect().left - mask.offsetWidth/2;
    var top = event.clientY - smallPic.getBoundingClientRect().top - mask.offsetHeight/2;

    mask.style.left = left + 'px';
    mask.style.top = top + 'px';

}
~~~

### 十一、蒙版元素移动的边界控制

在mask蒙版元素拖拽过程最后设置left以及top属性之前，需要添加left方向以及top方向的边界判断。

~~~js
if(left < 0){
	left = 0;
}else if(left > (smallPic.clientWidth-mask.offsetWidth)){
	left = smallPic.clientWidth-mask.offsetWidth;
}
if(top < 0){
	top = 0;
}else if(top > (smallPic.clientHeight-mask.offsetHeight)){
	top = smallPic.clientHeight-mask.offsetHeight;
}
~~~

### 十二、放大镜鼠标移动实现大图元素等比例移动效果

![](素材\移动比.png)

~~~js
//大图发生移动
//确定 bigImg 的left top
//移动比 = 蒙版的位置/大图的位置 = (小图的宽度-蒙版的宽度)/(大图片的宽度-大图框的宽度);
var scale = (smallPic.clientWidth-mask.offsetWidth)/(bigImg.offsetWidth-bigimgWrap.clientWidth)

bigImg.style.left = -left/scale + 'px';
bigImg.style.top = -top/scale + 'px';
~~~

### 十三、放大镜缩略图布局搭建

- html

~~~html
<!--下半部：缩略图-->
<div class="leftBttom">
    <a href="javascript:;" class="prev">&lt;</a>
    <div class="picsWrap">
        <ul>
            <li><img src="images/s1.png" alt=""></li>
            <li><img src="images/s1.png" alt=""></li>
            <li><img src="images/s1.png" alt=""></li>
            <li><img src="images/s1.png" alt=""></li>
            <li><img src="images/s1.png" alt=""></li>
            <li><img src="images/s1.png" alt=""></li>
            <li><img src="images/s1.png" alt=""></li>
        </ul>
    </div>
    <a href="javascript:;" class="next">&gt;</a>
</div>
~~~

- css

~~~css
//下半部：缩略图
.leftBttom
{
    width: 400px;
    margin-top: 5px;
    .clearfix();
    a{
        float: left;
        width: 10px;
        height: 54px;
        line-height: 54px;
        border: 1px solid #CCC;
        background: #EBEBEB;
        &.prev
        {
            margin-right: 4px;
        }
        &.next{

        }
    }
    .picsWrap
    {
        float: left;
        width: 372px;
        height: 56px;
        overflow: hidden; //溢出元素隐藏
        position: relative;
        ul
        {
            .clearfix();
            white-space: nowrap; //文本元素永不换行
            float: left; //让li撑开 ul 的宽度高度
            font-size: 0px; //inline-block 缝隙问题
            position: absolute;
            top: 0;
            left: 0;
            transition: 0.5s;
            li
            {
                display: inline-block;
                width: 50px;
                height: 50px;
                border: 1px solid #CCC ;
                padding: 2px;
                margin-right: 20px;
                img
                {
                    width: 50px;
                    height: 50px;
                }
            }
        }
    }
}
~~~

### 十四、放大镜缩略图数据动态渲染

> 思路提示：
>
> 1、由于不同商品的缩略图是不同的，所以需要获取相应的数据。
>
> 2、数据是数组，需要遍历，根据数组中元素的个数来动态创建li元素以及img元素，并让li追加img
>
> 3、最后让ul遍历追加每一条li即可。

第一步：先把ul中的所有的li都注释掉

第二步：创建一个函数，起名为  thumbnailData ，并调用

~~~js
//调用函数
thumbnailData();
//定义函数
function thumbnailData(){
	//获取ul元素
    var ulNode = document.querySelector('#wrap #content .conMain .bigWrap .left .leftBttom .picsWrap ul');
    //获取数据
    var imagessrc = goodData.imagessrc;
	//遍历数组
    for (var i = 0; i < imagessrc.length; i++) {
        //创建li元素
        var liNode = document.createElement('li');
        //创建img元素
        var imgNode = document.createElement('img');
        //设置src路径
        imgNode.src = imagessrc[i].s;
        //li追加img元素
        liNode.appendChild(imgNode);
        //ul追加li元素
        ulNode.appendChild(liNode)
    }
}
~~~

### 十五、点击缩略图实现换小图以及大图效果

> 思路提示：
>
> 1、给 li 添加点击事件 
>
> 2、获取点击li的下标 
>
> 3、根据下标去数据中那小图的路径，并且给小图设置上 ，由于大图是动态创建的，所以不能直接去获取 。
>
> 4、需要在全局定义一个大图下标变量 ，只要点击 ，把这个变量做一个更新 
>
> 5、默认情况下 ，小图与缩略图第一张图片一致 

第一步：在全局作用域中创建一个变量，用来记录点击的缩略图下标和大图的下标保持一致。

~~~js
//定义一个变量：保存大图的下标
var bigImgIndex = 0;
~~~

第二步：创建一个函数，起名为   thumbnailClick ，并调用

~~~js
//函数调用
thumbnailClick();
//定义函数
function thumbnailClick(){
	//获取 li 元素
    var liNodes = document.querySelectorAll('#wrap #content .conMain .bigWrap .left .leftBttom .picsWrap ul li');
    //获取小图元素
    var smallPic = document.querySelector('#wrap #content .conMain .bigWrap .left .leftTop .smallPic img');

    //获取数据
    var imagessrc = goodData.imagessrc;

    //小图的默认图片与缩略图第一张图片一致
    smallPic.src = imagessrc[0].s;

    //li的下标 与 数据中 imagessrc 数组的下标 是 一一对应关系
    //给每一个 li 绑定点击事件
    for (var i = 0; i < liNodes.length; i++) {
        //设置自定义索引
        liNodes[i].index = i;
        liNodes[i].onclick = function () {
            //点击哪一个图片，小图就要换成哪一个图片，大图也要换成哪一个图片
            smallPic.src = imagessrc[this.index].s;

            //大图下标变化
            bigImgIndex = this.index;

        }
    }
}
~~~

第二步：修改 bigClassBind函数中移入事件中默认大图的路径

~~~js
把 bigImg.src = "images/b1.png" 换成 bigImg.src = imagessrc[bigImgIndex].b;
~~~

### 十六、实现缩略图点击左右箭头的图片轮播效果原理分析

> 思路提示：
>
> 1、无论点击的是左右哪个箭头，确定移动的元素是ul
>
> 2、根据效果得知，每次图片走过的路程是两个li的宽度以及右侧20px的间距和
>
> 3、ul的总宽度一定会大于div框的宽度，那么ul最终可以移动的总距离也就是用ul的总宽度 - div的总宽度

### 十七、计算每一次图片移动的距离以及ul移动的总距离

创建一个函数，起名为    thumbnailLeftRightClick ，并调用

~~~js
//函数调用
thumbnailLeftRightClick();
//函数定义
function thumbnailLeftRightClick(){
	//获取ul元素
    var ul = document.querySelector('#wrap #content .conMain .bigWrap .left .leftBttom .picsWrap ul');
    //获取所有的li元素
    var liNodes = document.querySelectorAll('#wrap #content .conMain .bigWrap .left .leftBttom .picsWrap ul li');
    //元素移动的三要素：从哪开始移动，每一次移动步长，可以移动的最大距离
    //(1) 定义移动的初始位置变量值
    var temp = 0;
    //(2) 计算每一次所走过的步长
    var everyLeft = (liNodes[0].offsetWidth + 20) * 2;
    //(3) 计算ul所可以移动的总距离 = ul的宽度 - div框的宽度 = （图片总数-图片显示数）*一个图片的宽度
    var sumLeft = (liNodes.length - 5) * (liNodes[0].offsetWidth + 20);
    console.log(sumLeft);
}
~~~

### 十八、实现缩略图点击左右箭头的图片轮播效果

~~~js
//点击 next ,ul往前走
next.onclick = function () {
    temp += everyLeft;
    //范围限定
    if(temp > sumLeft){
    	temp = sumLeft;
    }

    ul.style.left = -temp + 'px';
}
~~~

~~~js
//点击 prev ,ul往后走
prev.onclick = function () {
    temp -= everyLeft;
    //范围限定
    if(temp < 0){
    	temp = 0;
    }
    ul.style.left = -temp + 'px';
}
~~~

### 十九、右侧商品上半部分详情介绍布局搭建

- html

~~~html
<!--右边：产品的信息介绍-->
<div class="right">
    <div class="rightTop">
        <h3>Apple iPhone 6s（A1700）64G玫瑰金色 移动通信电信4G手机bbb123</h3>
        <p>推荐选择下方[移动优惠购],手机套餐齐搞定,不用换号,每月还有花费返</p>
        <div class="priceWrap">
            <div class="priceTop">
                <span>价&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;格</span>
                <div class="price">
                    <span>￥</span>
                    <p>$5299</p>
                    <i>降价通知</i>
                </div>
                <p>
                    <span>累计评价</span>
                    <span>670000</span>
                </p>
            </div>
            <div class="priceBottom">
                <span>促&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;销</span>
                <p>
                    <span>加价购</span>
                    <span>满999.00另加20.00元，或满1999.00另加30.00元，或满2999.00另加40.00元，即可在购物车换购热销商品</span>
                </p>
            </div>
        </div>
        <div class="support">
            <span>支&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;持</span>
            <p>以旧换新，闲置手机回收 4G套餐超值抢 礼品购</p>
        </div>
        <div class="address">
            <span>配&nbsp;送&nbsp;至</span>
            <p>广东省 深圳市 宝安区</p>
        </div>
    </div>
</div>
~~~

- css

~~~css
.right
{
    float: right;
    width: 700px;
    .rightTop
    {
        h3
        {
            font-size: 14px;
            line-height: 21px;
            margin-top: 15px;
        }
        >p
        {
            color: #e12228;
            margin-top: 15px;
        }
        .priceWrap
        {
            margin-top: 10px;
            line-height: 28px;
            background: #fee9ec;
            padding: 7px;
            .priceTop
            {
                .clearfix();
                >span
                {
                    float: left;
                    margin-right: 15px;
                }
                .price
                {
                    float: left;
                    color:#cc1122;
                    >span
                    {
                        float: left;
                        font-size: 16px;
                    }
                    p{
                        float: left;
                        font-size: 24px;
                        font-weight: bold;
                    }
                    i{
                        float: left;
                        font-size: 12px;
                    }
                }
                >p{
                    float: right;
                }
            }
            .priceBottom
            {
                .clearfix();
                >span
                {
                    float: left;
                    margin-right: 15px;
                }
                p{
                    float: left;
                    width: 520px;
                    line-height: 28px;
                    span
                    {
                        color: #999;
                        &:first-child
                        {
                            background: #c81623;
                            color: #fff;
                            padding: 3px;
                        }
                    }
                }
            }
        }
        .support
        {
            margin-top: 10px;
            line-height: 28px;
            .clearfix();
            >span
            {
                float: left;
                margin-right: 15px;
            }
            >p
            {
                float: left;
                width: 520px;
                color: #999;
            }
        }
        .address
        {
            margin-top: 10px;
            line-height: 28px;
            border-bottom: 1px solid #ededed;
            padding-bottom: 5px;
            .clearfix();
            >span
            {
                float: left;
                margin-right: 15px;
            }
            >p{
                
                float: left;
                width: 520px;
                color: #999;
            }
        }
    }
}
~~~

### 二十、右侧商品上半部分详情介绍数据动态渲染

第一步：需要先将rightTop这个div中的代码全部注释掉

第二步：创建一个函数，起名为  rightTopData ，并调用

~~~js
//函数调用
rightTopData();
//函数定义
function rightTopData(){
	//获取元素
    var rightTop = document.querySelector('#wrap #content .conMain .bigWrap .right .rightTop');
    //获取数据
    var goodsDetail = goodData.goodsDetail;
    
    //定义模板字符串变量,将rightTop中的代码全部打开注释，剪切到字符串中
    //并且进行相应的数据替换
    var s =  `
            <h3>${goodsDetail.title}</h3>
            <p>${goodsDetail.recommend}</p>
            <div class="priceWrap">
            	<div class="priceTop">
            	<span>价&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;格</span>
            	<div class="price">
            		<span>￥</span>
            		<p>${goodsDetail.price}</p>
            		<i>降价通知</i>
            	</div>
            <p>
            	<span>累计评价</span>
            	<span>${goodsDetail.evaluateNum}</span>
            </p>
            </div>

            <div class="priceBottom">
            	<span>促&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;销</span>
            <p>
            	<span>${goodsDetail.promoteSales.type}</span>
            	<span>${goodsDetail.promoteSales.content}</span>
            </p>
            </div>

            </div>
            <div class="support">
            	<span>支&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;持</span>
           	 <p>${goodsDetail.support}</p>
            </div>

            <div class="address">
            	<span>配&nbsp;送&nbsp;至</span>
            	<p>${goodsDetail.address}</p>
            </div>
            `
   	//将渲染后数据的字符串重新写回rightTop元素中
    rightTop.innerHTML = s;
}
~~~

### 二十一、右侧商品下半部分商品参数布局搭建

- html

~~~html
<!--右边下半部-->
<div class="rightBottom">
    <!--被选择的区域-->
    <div class="choosed"></div>
    <!--选择区域的列表-->
    <div class="chooseWrap">
        <dl>
            <dt>选择颜色</dt>
            <dd>金色</dd>
            <dd>银色</dd>
            <dd>黑色</dd>
        </dl>
        <dl>
            <dt>内存容量</dt>
            <dd>16G</dd>
            <dd>64G</dd>
            <dd>128G</dd>
            <dd>256G</dd>
        </dl>
        <dl>
            <dt>选择版本</dt>
            <dd>公开版</dd>
            <dd>移动版</dd>
        </dl>
        <dl>
            <dt>购买方式</dt>
            <dd>官方标配</dd>
            <dd>优惠移动版</dd>
            <dd>电信优惠版</dd>
        </dl>
    </div>
</div>

<!--加入购物车-->
<div class="addcart">
    <div class="count">
        <input type="text">
        <a href="javascript:;">+</a>
        <a href="javascript:;">-</a>
    </div>
    <button>加入购物车</button>
</div>
~~~

- css

~~~css
.rightBottom 
{
    margin-top: 10px;
    line-height: 28px;

    //选择区域的列表
    .chooseWrap 
    {
        dl 
        {
            margin-top: 13px;
            margin-bottom: 13px;
            .clearfix();

            dt 
            {
                float: left;
                margin-right: 15px;
            }

            dd 
            {
                float: left;
                margin-right: 5px;
                color: #666;
                line-height: 24px;
                padding: 2px 14px;
                border-top: 1px solid #eee;
                border-left: 1px solid #eee;
                border-right: 1px solid #bbb;
                border-bottom: 1px solid #bbb;

                &:first-of-type 
                {
                    color: red;
                }
            }
        }
    }

    //加入购物车
    .addcart 
    {
        .clearfix();

        .count 
        {
            float: left;
            width: 55px;
            margin-right: 15px;
            position: relative;

            input 
            {
                width: 38px;
                height: 37px;
                border: 1px solid #ddd;
                color: #555;
            }

            a 
            {
                width: 15px;
                height: 18px;
                line-height: 18px;
                text-align: center;
                border: 1px solid #ddd;
                background: #f1f1f1;
                color: #666;
                position: absolute;
                right: 1px;

                &:first-child {
                    top: 0;
                }

                &:last-child {
                    top: 20px;
                    border-top: none;
                }
            }
        }

        button {
            float: left;
            padding: 0 25px;
            height: 36px;
            font-size: 16px;
            background: #e1251b;
            color: #fff;
            border: none;
        }
    }
}
~~~

### 二十二、右侧商品下半部分商品参数数据动态渲染

> 思路提示：
>
> 1、获取data.js文件中的相应数据( crumbData )
>
> 2、遍历该数组、根据数组的长度来循环创建dl以及dt元素，并让dl追加dt元素
>
> 3、根据crumbData 数组下的data的元素个数来循环创建dd并让dl来追加

创建一个函数，起名为   rightBottomData ，并调用

~~~js
//函数调用
rightBottomData();
//函数定义
function rightBottomData(){
	//获取元素
    var chooseWrap = document.querySelector('#wrap #content .conMain .bigWrap .right .rightBottom .chooseWrap');
    //获取数据
    var crumbData = goodData.goodsDetail.crumbData;

    //遍历数组
    for (var i = 0; i < crumbData.length; i++) {
        //创建 dl 元素
        var dlNode = document.createElement('dl');
        //创建 dt 元素
        var dtNode = document.createElement('dt');
        //设置dt的值为数组中的title的值
        dtNode.innerHTML = crumbData[i].title;
        //让dl追加dt元素
        dlNode.appendChild(dtNode);
        
		//循环crumbData里面每一个元素下的data
        for (var j = 0; j < crumbData[i].data.length; j++) {
            //创建 dd 元素
            var ddNode = document.createElement('dd');
            //设置dd的值为数组中type的值
            ddNode.innerHTML = crumbData[i].data[j].type;
			//让dl追加dd元素
            dlNode.appendChild(ddNode);

        }
        //让chooseWrap循环追加dl元素
        chooseWrap.appendChild(dlNode);
    }
}
~~~

### 二十三、实现点击每行参数的文字颜色排他效果

第一步：创建一个函数，起名为    clickDDbind ，并调用

~~~js
//函数调用
clickDDbind();
//函数定义
function clickDDbind(){
	
}
~~~

第二步：降低思路难度，先实现第一行dl中的所有dd颜色点击的排他效果

~~~js
//获取所有的dl元素
var dlNodes = document.querySelectorAll('#wrap #content .conMain .bigWrap .right .rightBottom .chooseWrap dl');

//获取第一个dl中的所有的dd元素
var ddNodes = dlNodes[0].querySelectorAll('dd');

//循环添加点击事件
for (var i = 0; i < ddNodes.length; i++) {
	ddNodes[i].onclick = function () {
        //排他思想：
        //(1) 其他dd保持不动
        for (var j = 0; j < ddNodes.length; j++) {
            ddNodes[j].style.color = '#666'
        }
        //(2) 点击dd变色
        this.style.color = 'red';
	}
}
~~~

第三步：其他几行dl的点击dd颜色排他效果，只是下标发生了变化，

所以我们只需要在刚才的操作外侧套一层for循环，解决不同dl的下标就可以了,调整一下循环变量。

~~~js
for (var i = 0; i < dlNodes.length; i++) {
	//获取第一个dl中的所有的dd元素
    var ddNodes = dlNodes[i].querySelectorAll('dd');

    //循环添加点击事件
    for (var j = 0; j < ddNodes.length; j++) {
        ddNodes[j].onclick = function () {
            //排他思想：
            //(1) 其他dd保持不动
            for (var k = 0; k < ddNodes.length; k++) {
                ddNodes[k].style.color = '#666'
            }
            //(2) 点击dd变色
            this.style.color = 'red';
        }
    }
}
~~~

### 二十四、利用闭包函数来解决循环中事件里面的变量问题

在之前的代码中，运行后我们能看到只有最后一行dl中的dd进行了颜色排他的效果，其他三行都没有，这是因为在

事件之前的i变量以及j变量都已经循环完毕了，则无法得到每一次循环的变量值，那么针对这个问题，我们的需求

就是想要每一次循环的变量都有所保留，我们可以使用闭包函数来解决这个问题

~~~js
for (var i = 0; i < dlNodes.length; i++) {
 (function (i) {
        //获取第一个dl中的所有的dd元素
        var ddNodes = dlNodes[i].querySelectorAll('dd');

        //循环添加点击事件
        for (var j = 0; j < ddNodes.length; j++) {
            ddNodes[j].onclick = function () {
                //排他思想：
                //(1) 其他dd保持不动
                for (var k = 0; k < ddNodes.length; k++) {
                    ddNodes[k].style.color = '#666'
                }
                //(2) 点击dd变色
                this.style.color = 'red';
            }
        }
 })(i)
}
~~~

### 二十五、实现选择结果的布局搭建

- html

~~~html
<!--被选择的区域-->
<div class="choosed">
    <div class="mark">金色<a>X</a></div>
    <div class="mark">128G<a>X</a></div>
    <div class="mark">移动版<a>X</a></div>
    <div class="mark">优惠移动版<a>X</a></div>
</div>
~~~

- css

~~~css
//被选择的区域
.choosed 
{
    .clearfix();
    .mark 
    {
        float: left;
        height: 30px;
        background: snow;
        border: 1px solid #ddd;
        padding: 0 20px;
        margin-right: 20px;

        a 
        {
            color: red;
            margin-left: 20px;
        }
    }
}
~~~

### 二十六、点击商品参数实现对应结果的动态添加

> 思路提示：
>
> 1、 创建一个数组，数组的长度与 dl长度一样，默认元素0 
>
> 2、 点击dd元素,根据点击的dd元素,获取其对应父元素dl的下标
>
> 3、 然后找数组相对应的位置，把dd的内容添加到数组中 
>
> 4、 遍历最终的数组，如果其位置有元素，创建新的元素，如果没有元素，则忽略掉 
>
> 5、在每一次点击dd的时候，都需要把 choosed 中的内容清空，否则会一直追加

第一步：在 clickDDbind 函数中创建一个空数组并按照dl的个数来填充初始值0

~~~js
var arr = new Array(dlNodes.length);
arr.fill(0);
~~~

第二步：在点击dd的时候，先清空choosed元素的值

~~~js
ddNodes[j].onclick = function () {
	//1、 清空值
    choosed.innerHTML = '';
    //2、将点击的dd的值放到arr对应下标中
    arr[i] = this.innerHTML;
    //3、遍历数组，如果其位置有元素，创建新的元素，如果没有元素，则忽略掉
    arr.forEach(function (item,index) {
        //item : 数组中的每一个元素
        //index : 数组中的下标
        //如果其位置有元素，创建新的元素
        //['黑色','128G',0,'电信优惠版']
        if(item){
            //创建div元素
            var divNode = document.createElement('div');
            //给div添加class属性为mark
            divNode.className = 'mark';
            //将数组中的元素赋值给div的值
            divNode.innerHTML = item;
            //创建a元素
            var aNode = document.createElement('a');
            //设置值为"X"
            aNode.innerHTML = 'X';
            //div追加a元素
            divNode.appendChild(aNode);
            //让choosed追加div
            choosed.appendChild(divNode)
        }
    })
}
~~~

### 二十七、点击删除按钮实现删除对应参数数据

> 思路提示：
>
> 1、 获取a元素，绑定点击事件 ，但是需要知道点击的是哪一个a
>
> 2、 点击的a元素的父元素，需要删除
>
> 3、 数组对应的位置，恢复成默认值0 
>
> 4、 dd第一个区域变成红色，其他的dd变成#666 

第一步：修改代码将点击的dd的值添加到数组换成dd元素本身添加到数组

~~~js
arr[i] = this;
~~~

第二步：在创建每一个a元素的时候，在其身上记录a元素的下标

~~~js
aNode.setAttribute('num',index)
~~~

第三步：获取所有的删除a元素并循环点击

~~~js
 //获取所有的a元素
 var aNodes = document.querySelectorAll('#wrap #content .conMain .bigWrap .right .rightBottom .choosed .mark a');
 //循环所有的a元素，注意循环变量不能使用之前的i，j，k等变量
 for (var n = 0; n < aNodes.length; n++) {
     //给每一个a添加点击事件
     aNodes[n].onclick = function () {
         //点击的a元素的父元素，需要删除
         choosed.removeChild(this.parentNode);
         //获取 点击 a 的下标
         var aIndex = this.getAttribute('num');
         //并且让数组中对应下标的元素重置为0,数组的下标 ，aIndex , dl的下标 是一致的
         arr[aIndex] = 0;
         //dd第一个区域变成红色，其他的dd变成#666
         //获取相对应dl中的dd
         var dds = dlNodes[aIndex].querySelectorAll('dd');
         for (var m = 0; m < dds.length; m++) {
         	dds[m].style.color = '#666'
         }
         dds[0].style.color = 'red';
    }
}
~~~

### 二十八、封装价格变动的函数

考虑到点击dd元素后价格变动，删除后价格也会变动，功能需求不单一，所以我们需要封装一个公共的函数。

> 思路提示：最终的价格 = 原有的价格 +  变动的价格
>
> 1、获取data.js中已有的价格
>
> 2、获取数组中不为0的所有dd元素身上的价格值
>
> 3、将原有的价格循环添加变动的价格，在重新写到对应的标签上。

第一步：在创建dd元素的位置需要给每一个dd添加一个价格属性

~~~js
ddNode.setAttribute('changePrice',crumbData[i].data[j].changePrice)
~~~

第二步：创建一个函数，起名为 changePriceBind ，并调用

~~~js
//调用函数
changePriceBind();
//定义函数
function changePriceBind(){
	//获取已有价格
    var price = goodData.goodsDetail.price; //5299
    //获取p标签
    var pNode = document.querySelector('#wrap #content .conMain .bigWrap .right .rightTop .priceWrap .priceTop .price p');
    //遍历数组
    for (var i = 0; i < arr.length; i++) {
        if(arr[i]){
            var changeP = Number(arr[i].getAttribute('changePrice'));
            // 字符串 转化 数值  Number()   Number.parseInt()  parseInt()
            //最终的价格 = 上边原有的价格 + 变动的价格
            price += changeP;
        }
    }
    //把最终的价格给元素添加上去
    pNode.innerHTML = price;
}
~~~

### 二十九、中间左侧选项卡整体结构布局搭建

- html

~~~html
<!--商品详情区域开始-->
<div class="goodsDetailWrap">
    <!--左边侧边栏-->
    <aside class="leftAside">
        <!--上部点击按钮区域-->
        <div class="asideTop">
            <h4 class="active">相关分类</h4>
            <h4>推荐品牌</h4>
        </div>
        <!--下部对应内容切换区域-->
        <div class="asideCont">
            <div class="active"></div>
            <div>推荐品牌内容</div>
        </div>
    </aside>
</div>
~~~

- css

~~~css
.goodsDetailWrap 
{
    width: 1200px;
    margin: 30px auto 0;
    .clearfix();

    //左边侧边栏
    .leftAside 
    {
        float: left;
        width: 210px;
        border: 1px solid #ccc;

        //上部点击按钮区域
        .asideTop 
        {
            height: 40px;

            h4 {
              float: left;
              width: 50%;
              height: 37px;
              line-height: 37px;
              text-align: center;
              border-top: 3px solid #fff;
              border-bottom: 1px solid #ccc;

              &.active {
                border-top: 3px solid #e1251b;
                border-bottom: 1px solid #fff;
              }
            }
        }

        //下部对应内容切换区域
        .asideCont 
        {
            padding: 10px;

            >div 
            {
                display: none;

                &.active 
                {
                    display: block;

                }
            }
        }
    }
}
~~~

### 三十、中间左侧选项卡中具体内容布局搭建

- html

~~~html
<div class="active">
    <ul class="goodsList">
        <li>手机</li>
        <li>手机壳</li>
        <li>内存卡</li>
        <li>iphone配件</li>
        <li>贴膜</li>
        <li>手机耳机</li>
        <li>移动电源</li>
        <li>平板电脑</li>
    </ul>
    <ul class="goodsList2">
        <li>
            <img src="images/part01.png" alt="">
            <span>Apple苹果iPhone 6s (A1699)</span>
            <p>¥6088.00</p>
            <div class="button">
                <a href="javascript:;">加入购物车</a>
            </div>
        </li>
        <li>
            <img src="images/part01.png" alt="">
            <span>Apple苹果iPhone 6s (A1699)</span>
            <p>¥6088.00</p>
            <div class="button">
                <a href="javascript:;">加入购物车</a>
            </div>
        </li>
        <li>
            <img src="images/part01.png" alt="">
            <span>Apple苹果iPhone 6s (A1699)</span>
            <p>¥6088.00</p>
            <div class="button">
                <a href="javascript:;">加入购物车</a>
            </div>
        </li>
        <li>
            <img src="images/part01.png" alt="">
            <span>Apple苹果iPhone 6s (A1699)</span>
            <p>¥6088.00</p>
            <div class="button">
                <a href="javascript:;">加入购物车</a>
            </div>
        </li>
    </ul>
</div>
~~~

- css

~~~css
.goodsList {
    .clearfix();
    li {
        float: left;
        width: 50%;
        line-height: 28px;
        border-bottom: 1px dashed #ededed;
    }
}
.goodsList2 {
    li {
        margin: 5px 0 15px;
        border-bottom: 1px solid #ededed;

        img {
            width: 152px;
        }

        p {
            font-size: 16px;
            color: #c81623;
        }

        .button {
            margin-top: 5px;
            margin-bottom: 5px;
            text-align: center;

            a {
                border: 1px solid #8c8c8c;
                color: #8c8c8c;
                padding: 2px 14px;
                line-height: 18px;
            }
        }

    }
}
~~~

### 三十一、中间右侧选择搭配的整体结构布局搭建

- html

~~~html
<!--右边具体的详情区域-->
<div class="rightDetail">
    <!--选择区域-->
    <div class="chooseWrap">
        <h4>选择搭配</h4>
        <div class="listWrap">
            <div class="left">
                <img src="images/l-m01.png" alt="">
                <p>¥5299</p>
                <i>+</i>
            </div>
            <ul class="middle">
                <li>
                    <img src="images/dp01.png" alt="">
                    <span>Feless费勒斯VR</span>
                    <div>
                        <input type="checkbox" value="50">
                        <span>50</span>
                    </div>
                </li>
                <li>
                    <img src="images/dp02.png" alt="">
                    <span>Feless费勒斯VR</span>
                    <div>
                        <input type="checkbox" value="50">
                        <span>50</span>
                    </div>
                </li>
                <li>
                    <img src="images/dp03.png" alt="">
                    <span>Feless费勒斯VR</span>
                    <div>
                        <input type="checkbox" value="50">
                        <span>50</span>
                    </div>
                </li>
                <li>
                    <img src="images/dp04.png" alt="">
                    <span>Feless费勒斯VR</span>
                    <div>
                        <input type="checkbox" value="50">
                        <span>50</span>
                    </div>
                </li>
            </ul>
            <div class="right">
                <div>已购0件商品</div>
                <p>套餐价</p>
                <i>¥5299</i>
                <div>
                    <button>加入购物车</button>
                </div>
            </div>
        </div>
    </div>
~~~

- css

~~~css
//右边具体的详情区域
.rightDetail {
    float: right;
    width: 980px;

    //选择区域
    .chooseWrap {
        border: 1px solid #ddd;
        margin-bottom: 15px;

        h4 {
            border-bottom: 1px solid #ddd;
            background: #f1f1f1;
            color: #333;
            padding: 5px 0 5px 15px;
        }

        .listWrap {
            height: 170px;
            padding-top: 10px;

            .left {
                float: left;
                width: 127px;
                height: 165px;
                position: relative;

                img {
                    width: 87px;
                    margin: 0 auto;
                }

                p {
                    color: #c81623;
                    font-size: 16px;
                    text-align: center;
                }

                i {
                    font-size: 16px;
                    position: absolute;
                    top: 48px;
                    right: -25px;
                }
            }

            .middle {
                float: left;
                width: 668px;
                height: 165px;

                li {
                    float: left;
                    width: 127px;
                    margin: 0 20px;
                    text-align: center;

                    img {
                        width: 120px;
                        height: 130px;
                    }
                }
            }

            .right {
                float: left;
                border-left: 1px solid #ddd;
                width: 153px;
                height: 165px;
                padding-left: 20px;

                >div {
                    margin-top: 10px;
                    margin-bottom: 10px;
                }

                >p {
                    font-weight: bold;
                    margin-bottom: 10px;
                }

                >i {
                    font-size: 16px;
                    color: #B1191A;
                    margin-bottom: 10px;
                }

                button {
                    padding: 10px 25px;
                    font-size: 16px;
                    color: #fff;
                    background: #e1251b;
                    border: none;
                }
            }
        }
    }
}
~~~

### 三十二、选择搭配中复选框选中状态的套餐价联动效果

> 思路提示：
>
> 1、获取左侧元素并赋值为商品详情参数数据dd点击后的价格值
>
> 2、获取中间所有的复选框元素遍历找出选中的元素的value值
>
> 3、将选择的价格和左侧的价格进行相加后重新赋值给右侧的价格元素

第一步：在 changePriceBind 这个函数中继续获取选择搭配中左侧元素并赋予其最终价格

~~~js
var leftN = document.querySelector('#wrap #content .conMain .goodsDetailWrap .rightDetail .chooseWrap .listWrap .left p')
//左边价格 = 上边价格（赋值）
leftN.innerHTML = '￥' + price;
~~~

第二步：获取复选框元素遍历找出选中的并追加value值

~~~js
var checkbox = document.querySelectorAll('#wrap #content .conMain .goodsDetailWrap .rightDetail .chooseWrap .listWrap .middle li input')

for (var i = 0; i < checkbox.length; i++) {
	if(checkbox[i].checked){
		price = price + Number(checkbox[i].value);
	}
}
~~~

第三步：获取右侧元素，重新赋值价格

~~~js
var rightN = document.querySelector('#wrap #content .conMain .goodsDetailWrap .rightDetail .chooseWrap .listWrap .right > i');
 rightN.innerHTML = '￥' + price;
~~~

### 三十三、中间右侧选项卡布局搭建

- html

~~~html
<div class="bottomDetail">
    <ul class="tabBtns">
        <li class="active"><a href="javascript:;">商品介绍</a></li>
        <li><a href="javascript:;">规格包装</a></li>
        <li><a href="javascript:;">售后与保障</a></li>
        <li><a href="javascript:;">商品评价</a></li>
        <li><a href="javascript:;">手机社区</a></li>
    </ul>
    <div class="tabConts">
        <div class="active">
            <ul>
                <li>分辨率：1920*1080(FHD)</li>
                <li>后置摄像头：1200万像素</li>
                <li>前置摄像头：500万像素</li>
                <li>核 数：其他</li>
                <li>频 率：以官网信息为准</li>
                <li>品牌： Apple</li>
                <li>商品名称：APPLEiPhone 6s Plus</li>
                <li>商品编号：1861098</li>
                <li>商品产地：中国大陆</li>
                <li>商品毛重：0.51kg</li>
                <li>热点：指纹识别，Apple Pay，金属机身，拍照神器</li>
                <li>系统：苹果（IOS）</li>
                <li>像素：1000-1600万品毛重：0.51kg</li>
                <li>机身内存：64GB</li>
            </ul>
            <img src="images/intro01.png" alt="">
            <img src="images/intro02.png" alt="">
            <img src="images/intro03.png" alt="">

        </div>
        <div>规格包装</div>
        <div>售后与保障</div>
        <div>商品评价</div>
        <div>手机社区</div>
    </div>
</div>
~~~

- css

~~~css
//下边商品详情区域
.bottomDetail {
    .tabBtns {
        background: #ededed;
        .clearfix();
        li {
            float: left;
            border: 1px solid #ddd;
            background: #fff;
            height: 40px;
            padding: 0 11px;
            line-height: 40px;
            text-align: center;
            border-right: none;

            &:last-child {
                border-right: 1px solid #ddd;
            }

            &.active {
                background: red;

                a {
                    color: #fff;
                }
            }
        }
    }

    .tabConts {
        >div {
            padding-left: 20px;
            display: none;

            &.active {
                display: block;

                li {
                    margin: 10px 0;
                }
            }
        }
    }
}
~~~

### 三十四、封装一个公共的选项卡功能函数并调用

由于网站中出现了两个位置都有选项卡，功能不在单一实现，所以我们需要封装一个公共的函数。

在这个函数中需要知道发生事件的元素以及切换内容元素作为函数的形参

~~~js
/**
 * tabBtns：发生事件的元素，大多数为li、btn等居多
 * tabCont：切换内容的元素，大多数为div
*/
function tab(tabBtns,tabCont) {
    //遍历tabBtns
    for (var i = 0; i < tabBtns.length; i++) {
        tabBtns[i].index = i;
        tabBtns[i].onclick = function () {
            //其他元素 移出 active
            for (var j = 0; j < tabBtns.length; j++) {
                tabBtns[j].className = '';
                tabCont[j].className = '';
            }
            //点击的元素 添加active
            this.className = 'active';
            tabCont[this.index].className = 'active'
        }
    }
}
~~~

第一步：左侧选项卡的功能需要定义一个函数，起名为 leftTab ，并调用

~~~js
//调用函数
leftTab();
//定义函数
function leftTab(){
	//获取点击按钮的区域
    var tabBtns = document.querySelectorAll('#wrap #content .conMain .goodsDetailWrap .leftAside .asideTop h4')
    //获取内容切换的区域
    var tabCont = document.querySelectorAll('#wrap #content .conMain .goodsDetailWrap .leftAside .asideCont > div')
    
    //调用功能函数
    tab(tabBtns,tabCont);
}
~~~

第二步：右侧选项卡的功能也需要单独定义一个函数，起名为 rightRab ，并调用

~~~js
//调用函数
rightRab();
//定义函数
function rightRab(){
	//获取点击按钮的区域
    var tabBtns = document.querySelectorAll('#wrap #content .conMain .goodsDetailWrap .rightDetail .bottomDetail .tabBtns li')
    //获取内容切换的区域
    var tabConts = document.querySelectorAll('#wrap #content .conMain .goodsDetailWrap .rightDetail .bottomDetail .tabConts > div')
	//调用功能函数
    tab(tabBtns,tabConts);
}
~~~

### 三十五、右侧导航栏的上半部分搭建

- html

~~~html
<!--右边侧边栏开始-->
<div class="rightAside asideClose">
    <!--按钮区域-->
    <div class="btns btnClose"></div>
    <!--侧边栏内容区域-->
    <div class="content"></div>
</div>
<!--右边侧边栏结束-->
~~~

- css

~~~css
.rightAside {
    position: fixed;
    top: 0;
    width: 300px;
    height: 100%;
    background: #7a6e6e;
    transition: 0.5s;

    &.asideClose {
        right: -294px;
    }

    &.asideOpen {
        right: 0px;
    }

    .btns {
        width: 35px;
        height: 35px;
        background-color: #7a6e6e;
        position: absolute;
        top: 0;
        left: -29px;
        border-radius: 3px 0px 0px 3px;
        background-size: 35px 35px;

        &.btnClose {
            background-image: url("../images/list.png");
        }

        &.btnOpen {
            background-image: url("../images/cross.png");
        }
    }

    .content {
        width: 294px;
        position: absolute;
        top: 0;
        bottom: 0;
        //height: 100%;
        left: 6px;
        background: bisque;
        z-index: 50;
    }
}
~~~

### 三十六、右侧导航栏的中间布局搭建

- html

~~~html
<!--侧导航-->
<ul class="navList">
    <li>
        <p></p>
        <i>尚品会员</i>
    </li>
    <li>
        <p></p>
        <i>尚品会员</i>
    </li>
    <li>
        <p></p>
        <i>尚品会员</i>
    </li>
    <li>
        <p></p>
        <i>尚品会员</i>
    </li>
    <li>
        <p></p>
        <i>尚品会员</i>
    </li>
    <li>
        <p></p>
        <i>尚品会员</i>
    </li>
</ul>
~~~

- css

~~~css
.navList {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: -29px;

    li {
        width: 35px;
        height: 35px;
        position: relative;

        &:hover {
            p {
                background-color: pink;
            }

            i {
                background-color: pink;
                left: -62px;
            }
        }

        p {
            width: 35px;
            height: 35px;
            background-image: url("../images/toolbars.png");
            background-position: -87px -174px;
            background-color: #7a6e6e;
            transition: 0.5s;
        }

        i {
            width: 62px;
            height: 35px;
            line-height: 35px;
            text-align: center;
            position: absolute;
            top: 0;
            left: 35px;
            background-color: #7a6e6e;
            transition: 0.5s;
        }
    }

}
~~~

### 三十七、右侧导航栏的点击切换状态实现

> 思路提示：
>
> 1、根据现象得知，点击后是两个不同的状态相互切换，所以我们可以利用布尔值的变量来模拟这种状态。
>
> 2、按钮点击后根据状态判断，设置不同的样式

创建一个函数，起名为 rightAsideBind ，并调用

~~~js
//函数调用
rightAsideBind();
//函数定义
function rightAsideBind(){
    //获取按钮
    var btn = document.querySelector('#wrap .rightAside .btns')

    //获取侧边栏
    var rightAside = document.querySelector('#wrap .rightAside')

    var flag = true; // flag 标记，旗帜
    btn.onclick = function () {

        if(flag){
            //默认关闭，应该打开
            rightAside.className = 'rightAside asideOpen'
            btn.className = 'btns btnOpen'

        }else {
            //现在是打开，需要关闭
            rightAside.className = 'rightAside asideClose'
            btn.className = 'btns btnClose'
        }
	    //状态的取反
        flag = !flag;
    }
}
~~~

