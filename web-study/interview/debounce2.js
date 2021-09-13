/**
 * 1、func waitTime
 * 2、this
 * 3、arguments
 * 4、是否立即执行
 * 5、取消防抖
 */

function debounce (func, waitTime, now) {
  let timeout = null, result

  let debounced = function () {
    let context = this
    let args = arguments

    if (timeout) {
      clearTimeout(timeout)
    }

    if (now) {
      let exec = !timeout

      timeout = setTimeout(() => {
        timeout = null
      }, waitTime)

      if (exec) {
        result = func.apply(context, args)
      }
    } else {
      timeout = setTimeout(() => {
        result = func.apply(context, args)
      }, waitTime)
    }

    return result
  }

  // 取消防抖
  debounced.cancel = function () {
    clearTimeout(timeout)
    timeout = null
  }

  return debounced
}

let count = 0
let box = document.querySelector('.box')
let btn = document.querySelector('.btn')

function move (e) {
  console.log(this)
  console.log(e)
  box.innerHTML = count++
}

let doSome = debounce(move, 1000, false)
btn.onclick = function () {
  doSome.cancel()
}

box.onmousemove = doSome
// box.onmousemove = _.debounce(move, 30)
