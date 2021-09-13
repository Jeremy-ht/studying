console.dir(Function)
console.dir(Function.prototype)
console.dir(Function.prototype === Function.__proto__)

// apply call bind
console.dir(Array.prototype.filter)

const str = "huangTAO真帅"

const newStr = str.replace(/[a-zA-Z]/g, item => {
  return item.toUpperCase() === item ? item.toLowerCase() : item.toUpperCase()
})
console.log(newStr)
