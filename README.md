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


# VUE 源码学习

## 模板引擎

























