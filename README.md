### goods better-scroll
1、滑动使用 better-scroll
2、滑动右侧左侧菜单更新
    |- 收集每个li到ul的高度 tops 累加操作
    |- 现在的高度scrollY
    |- 左侧 使用索引来确定现在是第几个
    |- 通过scroY在tops中的哪个位置 (findIndex) 确定其索引位置 更新左侧菜单索引(计算属性)
