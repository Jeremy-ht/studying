///////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////// ES6 ///////////////////////////////////////////////////////

/**
 * 解构赋值
 */

let obj = {
	"sucess": true,
	"msg": "",
	"result": [
		{"name": "ht", "age": 10},
		{"name": "ht2", "age": 102}
	]
}


let {sucess, msg, result} = obj;

// console.log(sucess);
// console.log(msg);
// console.log(result);

/**
 * Map
 */
console.log("========== Map ==========");

let map = new Map();
map.set("1", 1);
map.set("12", 12);
map.set("13", 13);
// 1. 遍历map	map
for (let [key, value] of map) {
	console.log(JSON.stringify(key + "--" + value));
}

// 2. 遍历map	map.entries()
for (let [key, value] of map.entries()) {
	console.log(JSON.stringify(key + "--" + value));
}

// 3. 遍历map	map.forEach({})
map.forEach((key, value) => {
	console.log(JSON.stringify(key + "--" + value));
})

// 4. 获取所有key	map.keys()
for (let key of map.keys()) {
	console.log(JSON.stringify(key));
}

// 5. 获取所有value	map.value()
// for (let value of map.value()) {
// 	console.log(JSON.stringify(value));
// }

// 6. 将map转换成一个二维键值对数组	Array.from(Map)
let arr = Array.from(map);
console.log(arr);

// 7. Map 构造函数可以将一个 二维 键值对数组转换成一个 Map 对象
let arr2 = [["1", 1], ["11", 11], ["111", 111]];
let map2 = new Map(arr2);
console.log(map2);

/**
 * Set
 */
console.log("========== Set ==========");

let mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add("3");
mySet.add({"4": 4});
mySet.add({"4": 4});		// 对象之间引用不同不恒等，即使值相同，Set 也能存储
console.log(mySet);

// 类型转换
// 1. Set 转换 Array		用 ...操作符，将 Set 转 Array
let arr3 = [...mySet];
console.log(arr3);

let [a, b, c, {"4": d}, {"4": e}] = arr3;	// 解构赋值
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);

// 2. String 转 Set
let mySet2 = new Set("hello");
console.log(mySet2)		// { 'h', 'e', 'l', 'o' }

// Set 对象作用
// 1. 数组去重
let arr4 = [1, 2, 3, 4, 3];
let set = new Set(arr4);
console.log(set);

// 并集
let arr5 = [1, 2, 3];
let arr6 = [1, 4, 5];
let set2 = new Set([...arr5, ...arr6]);
console.log(set2);

// 交集

// 差集


/**
 * 字符串
 */

///////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////// 16. Promise 对象 /////////////////////////////////////////////////
/**
 *  Promise     =    对象容器  =  保存着某个未来才会结束的事件（通常是一个异步操作）的结果
 *
 *  三种状态：
 *        pending（进行中）、fulfilled（已成功）和rejected（已失败）
 *
 *  缺点：
 *        1. 无法取消Promise，一旦新建它就会立即执行，无法中途取消
 *        2. 如果不设置回调函数，Promise内部抛出的错误，不会反应到外部
 *        3. 当处于pending状态时，无法得知目前进展到哪一个阶段（刚刚开始还是即将完成）
 *
 *
 *  https://juejin.cn/post/6844904077537574919
 */


///////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////// 17. Iterator 和 for...of 循环 ////////////////////////////////////
/**
 * 扩展运算符 (...)
 */
console.log("========== 扩展运算符 ==========");

// 1. 对象	 对象中的扩展运算符(...)用于取出参数对象中的所有可遍历属性，拷贝到当前对象之中
let obj2 = {a: 1, b: 2, c: 3};

let cloneObj = {...obj2};			// 浅拷贝
console.log(cloneObj);				// { a: 1, b: 2, c: 3 }
console.log(obj2 === cloneObj);		// false

let cloneObj2 = obj2;				// 直接赋值，是对象的引用，指向同一地址
console.log(cloneObj2);				// { a: 1, b: 2, c: 3 }
console.log(obj2 === cloneObj2);		// true


// 2. 数组
// 2.1. 将数组转换为参数序列
let add = (x, y) => {
	return x + y;
}
const numbers = [4, 38];
add(...numbers) // 42


// 2.2. 复制数组
let arr8 = [1, 2];
let arr7 = [...arr8];
console.log(arr7);


// 2.3. 扩展运算符可以与解构赋值结合起来，用于生成数组
const [first, ...rest] = [1, 2, 3, 4, 5];
console.log(first); // 1
console.log(rest);  // [2, 3, 4, 5]
// 注意：如果将扩展运算符用于数组赋值，只能放在参数的最后一位，否则会报错
// const [...rest, last] = [1, 2, 3, 4, 5];		// 报错
// const [first, ...rest, last] = [1, 2, 3, 4, 5]; // 报错


/**
 * for...of 循环
 */
console.log("========== for...of 循环 ==========");
let array3 = ["1", "2", "3", "4", "5"];
let object3 = {
	name: "jeremy",
	age: 10,
	sex: "nan"
};


// for...in		适合遍历对象
for (let arr in array3) {
	console.log(arr);		// 0 1 2 3 4  下标值
	console.log(array3[arr]);	// 1 2 3 4 5
}

for (let key in object3) {
	console.log(key + "---" + object3[key]);
}

// for...of		适合遍历数组，在循环体内可以使用 break，continue
for (let arr of array3) {
	// console.log(arr);		// 1 2 3 4 5
}

let array4 =
	[
		{
			name: "jeremy",
			age: 10,
			sex: "nan"
		},
		{
			name: "jeremy2",
			age: 102,
			sex: "nan"
		}
	]

for (let arr of array4) {
	console.log(arr.name + "-" + arr.age + "-" + arr.sex);		// sex---nan	jeremy-10-nan	jeremy2-102-nan

}

/**
 * js 常用遍历方式总结
 */
// forEach 遍历			缺点是不能跳出循环
// map 遍历				适用于改变一个数组内容
// for ... in 遍历		适用于遍历对象
// for ... of 遍历		ES6新增，它只能遍历带有iterable属性的对象，所以不能遍历对象，除非刻意给object加上一个iterable属性。


///////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////// 23. export import ///////////////////////////////////////////////

/**
 export：
 1.
 常量
 export var firstName = 'Michael';
 export var lastName = 'Jackson';
 export var year = 1958;

 函数
 export function multiply(x, y) { return x * y; };


 2.
 常量
 var firstName = 'Michael';
 var lastName = 'Jackson';
 var year = 1958;

 export { firstName, lastName, year };

 函数
 function v1() { ... }
 function v2() { ... }

 export {
			  v1 as streamV1,
			  v2 as streamV2,
			  v2 as streamLatestVersion		// 起别名  as
			};

 import：

 import { firstName, lastName, year } from './profile.js';
 import { lastName as surname } from './profile.js';
 import * as circle from './circle';


 default：

 export default function () {
			  console.log('foo');
			}

 // 或者写成

 function foo() {  console.log('foo');	}
 export default foo;


 import 任意名称 from './export-default';

 */


///////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////  ///////////////////////////////////////////////////////

// 1、随机获取一个布尔值
const randomTrue = () => Math.random() >= 0.5
console.log(randomTrue())


const scrollTop = () => window.scrollTo(0, 0)
// scrollTop()




///////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////// Date() ////////////////////////////////////////////////////





///////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////// Array /////////////////////////////////////////////////////

/**
 * 	1、Array.fill()
 * 		- https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/fill
 * 		- 用一个固定值填充一个数组中从起始索引到终止索引内的全部元素。不包括终止索引
 * 		- 参数: arr.fill(value[, start[, end]])
 * 			-- value 用来填充数组元素的值
 * 		    -- start 可选 起始索引，默认值为0
 * 		    -- end 可选 终止索引，默认值为 this.length
 */






















