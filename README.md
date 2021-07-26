### better-scroll
1、滑动使用 better-scroll
2、滑动右侧左侧菜单更新
    |- 收集每个li到ul的高度 tops 累加操作
    |- 现在的高度scrollY
    |- 左侧 使用索引来确定现在是第几个
    |- 通过scroY在tops中的哪个位置 (findIndex) 确定其索引位置 更新左侧菜单索引(计算属性)


### 父子组件通信
1、父传子
    |— props
2、子传父
    |- $emit
2、父访问子方法
    |- 先使用ref引用子组件，通过$refs. 方法调用子组件方法



### Plugs
1、better-scroll

2、mint-ui

3、moment | date-fns

4、vue-lazyload

# toutiao
1、移动端适配
    |- postcss-pxtorem 是一款 postcss 插件，用于将 px 单位转化为 rem
          将 px 转为 rem
    |- lib-flexible 用于设置 rem 基准值
          动态设置 REM 基准值（html 标签的字体大小）

2、iconfont

3、css加载样式问题


# CSS
- box-shadow
    盒子阴影


- display
    block
    inline-block
    inline
    none

      |- display: none;       不再占据页面的位置
      |- visibility: hidden;  位置会依然保持


- overflow
    hidden
    auto
    scroll


- opacity
    半透明(兼容写法)
      opacity: 0.5
      filter:alpha(opacity=50)  (IE8以下)


- box-sizing
    content-box (*)
    border-box


- border-radius
    圆角


- float
    left
    right

    解决高度塌陷问题最佳方案
        .clearfix:after{
            content: "";    /*添加一个内容*/
            display: block;     /*转换为一个块元素*/
            clear: both;    /*清除两侧的浮动*/
          }


- position
    relative
    absolute
    fixed

  z-index


- css权重
    1、先从高等级进行比较，高等级相同时，再比较低等级的，以此类推
    2、完全相同的话，就采用 后者优先 原则

    注意：
        出现了!important，则不管权重如何都取有!important的属性值，
        但如设置了max-width/min-width则不会取!important



## line-height





## vertical-align









=== 不熟样式 ===
- vertical-align    https://developer.mozilla.org/zh-CN/docs/Web/CSS/vertical-align
    指定行内元素（inline）或表格单元格（table-cell）元素的垂直对齐方式
      baseline




-- min()
-- max()
-- clamp()









=== 不常用样式 ===
- resize
  控制一个元素的可调整大小性





# VUE 源码学习

## 模板引擎
1、dom
2、join
3、反引号 ``
4、mustache



第一周
  css js


保十争九
规划
一、vue黑马项目为驱动 学习vue
- https://www.bilibili.com/video/BV1tN411f7tV?p=40

二、飞书为主体 查缺补漏
- https://bytedance.feishu.cn/base/app8Ok6k9qafpMkgyRbfgxeEnet?table=tblEnSV2PNAajtWE&view=vewJHSwJVd




原型链
    prototype
    __proto__



-- 闭包

-- 组件调用




















