/**
 * 路由对象属性
 */









// string 当前路由的绝对路径
console.log('$route.path: ', this.$route.path);
// Object 包含了动态片段和全匹配片段，没有路由参数，则为空对象
console.log('$route.params: ', this.$route.params);
// Object 表示URL查询参数。例如，对于路径 /foo?user=1，则有 $route.query.user == 1，没有查询参数，则为空对象
console.log('$route.query: ', this.$route.query);
// string 当前路由的hash值(带#)，如果没有hash值，则为空字符串
console.log('$route.hash: ', this.$route.hash);
// string 完成解析后的 URL，包含查询参数和 hash 的完整路径。
console.log('$route.fullPath: ', this.$route.fullPath);
// Array<RouteRecord> 包含当前路由的所有嵌套路径片段的路由记录 。路由记录就是 routes 配置数组中的对象副本 (还有在 children 数组)。
console.log('$route.matched: ', this.$route.matched);
// 当前路由的名称，如果有的话
console.log('$route.name: ', this.$route.name);
// 如果存在重定向，即为重定向来源的路由的名字
console.log('$route.redirectedFrom: ', this.$route.redirectedFrom);
