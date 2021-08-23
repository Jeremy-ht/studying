
// https://zoo.team/article/cycle-in-js

/**
 *  1、for
 *      - 索引
 *  2、for....of
 *      - 适合数组遍历，可能效率稍微差一些
 *  3、forEach
 *      - 不能break和continue
 *
 *
 *  4、some
 *      - 任意元素满足就终止循环返回true，所有元素都不满足才会返回false
 *  5、every
 *      - 任意元素不满足就终止循环返回false，所有元素都满足才会返回true
 *
 *
 *  6、filter
 *      - 生成一个新的数组，会跳过空元素，返回满足条件的元素组成一个新数组
 *  7、map
 *      - 生成一个与原数组同大小的新数组，适合需要元素某个属性时使用组成新的数组
 *
 *
 *  8、find
 *      - 查找元素，返回满足条件的第一个元素，没有返回undefined
 *  9、findIndex
 *      - 查找元素索引，返回满足条件的第一个元素的索引，没有返回-1
 *
 *
 *  10、reduce
 *      - https://juejin.cn/post/6844904063729926152
 *  11、reduceRight
 *
 *
 *  12、对象遍历
 */


/*
    1、for
    2、for....of
    3、forEach

    Notes:
        - forEach 无法跳出循环；for 和 for...of 可以使用 break 或者 continue 跳过或中断
        - for...of 直接访问的是实际元素。for 遍历数组索引，forEach 回调函数参数更丰富，元素、索引、原数组都可以获取
        - for...of 与 for 如果数组中存在空元素，同样会执行
        - 优先使用 for...of 和 forEach

 */

const arr = [1, 2, 3, 4, 5, 6, 7]

// 1、for
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 7) {
        break
    }

    console.log(arr[i])     // 1 2 3 4 5 6
}


// 2、for....of
for (let item of arr) {
    if (item === 7) {
        break
    }

    console.log(item)     // 1 2 3 4 5 6
}


// 3、forEach
arr.forEach((item, index, arr) => {
    console.log(item)       // 1 2 3 4 5 6 7
    console.log(index)       // 0 1 2 3 4 5 6
})


/*
    4、some
    5、every

    Notes:
        - 二者都是用来做数组条件判断的，都是返回一个布尔值
        - 二者都可以被中断
        - some 若某一元素满足条件，返回 true，循环中断；所有元素不满足条件，返回 false。
        - every 与 some 相反，若有益元素不满足条件，返回 false，循环中断；所有元素满足条件，返回 true

 */

const list = [
    {name: '头部导航', backward: false},
    {name: '轮播', backward: true},
    {name: '页脚', backward: false},
];

// 4、some
list.some(item => item.backward)    // true


// 5、every
list.every(item => item.backward)   // false


/*
    6、filter
    7、map

    Notes:
        - 二者都是生成一个新数组，都不会改变原数组（不包括遍历对象数组是，在回调函数中操作元素对象）
        - 二者都会跳过空元素
        - filter 会将符合回调函数条件的元素组成一个新数组，数组长度与原数组可能不同
        - map 会将回调函数的返回值组成一个新数组，数组长度与原数组一致
        - map 生成的新数组元素是可自定义
        - filter 生成的新数组元素不可自定义，与对应原数组元素一致

*/

const list2 = [
    {name: '头部导航', type: 'nav', id: 1},
    {name: '轮播', type: 'content', id: 2},
    {name: '页脚', type: 'nav', id: 3},
]


// 6、filter
const list2Result = list2.filter(item => {
    return item.type === 'nav'
})
console.log(list2Result) // [{ name: '头部导航', type: 'nav', id: 1 },{ name: '页脚', type: 'nav', id: 3 }]


// 7、map
const list2ResultMap = list2.map(item => {
    return item.id * 3
})
console.log(list2ResultMap) // [ 3, 6, 9 ]


const list2ResultMap2 = list2.map(item => {
    return item.id + '-' + item.name
})
console.log(list2ResultMap2) // [ '1-头部导航', '2-轮播', '3-页脚' ]


/*
    8、find
    9、findIndex

    Notes:
        - 二者都是用来查找数组元素
        - find 方法返回数组中满足 callback 函数的第一个元素的值。如果不存在返回 undefined
        - findIndex 它返回数组中找到的元素的索引，而不是其值，如果不存在返回 -1

*/

// 8、find
const resultFind = list.find(item => !item.backward)
console.log(resultFind);    // { name: '头部导航', backward: false }


// 9、findIndex
const resultFindIndex = list.findIndex(item => item.backward)
console.log(resultFindIndex)    // 1


/*
    10、reduce
    11、reduceRight

    Notes:
        - reduce 方法接收两个参数，第一个参数是回调函数（callback） ，第二个参数是初始值（initialValue）。
        - reduceRight 方法除了与reduce执行方向相反外(从右往左)，其他完全与其一致。
        - 回调函数接收四个参数：
                accumulator：截至当前元素，之前所有的数组元素被回调函数处理累计的结果。
                current：当前被执行的数组元素。
                currentIndex: 当前被执行的数组元素索引
                sourceArray：原数组，也就是调用 reduce 方法的数组

     https://juejin.cn/post/6844904063729926152

*/

const listReduce = [
    {name: 'left', width: 20},
    {name: 'center', width: 70},
    {name: 'right', width: 10}
]

// 10、reduce    累加操作    找出最大最小值
const total = listReduce.reduce((currentTotal, item) => {
    return currentTotal + item.width
}, 0)
console.log(total)  // 100


const listReduce2 = [
    {name: 'left', width: 20},
    {name: 'right', width: 30},
    {name: 'center', width: 70},
    {name: 'top', width: 40},
    {name: 'bottom', width: 20},
];
const max = listReduce2.reduce((curItem, item) => {
    return curItem.width >= item.width ? curItem : item;
});
console.log(max)   //  { name: "center", width: 70 }


const min = listReduce2.reduce((curItem, item) => {
    return curItem.width <= item.width ? curItem : item;
})
console.log(min)   // { name: "left", width: 20 }





/**
 *  12、对象遍历     https://zoo.team/article/cycle-in-js
 *      - 对象数组的去重，并统计每一项重复次数
 *      - for in
 *      - Object.keys
 *      - Object.values
 *      - Object.entries
 *      - Object.getOwnPropertyNames
 */
