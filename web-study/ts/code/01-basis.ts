let d: unknown;

// 对象
let dd: { name: string, [propName: string]: any }
dd = {name: 'jeremy', age: 12, job: 'teacher'}

let fun: (name: string, age: number) => number;

// 数组
let arr: string[]
arr = ['11', '22', '33']

let arr2: Array<number>
arr2 = [1, 2, 3]


// 元祖
let tuple: [string, number]
tuple = ['112', 222]


// 枚举
enum Gender {
  Male ,
  Female
}
