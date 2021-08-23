/**
 * 1、func waitTime
 * 2、this
 * 3、arguments
 * 4、是否立即执行
 * 5、取消防抖
 */

function debounce(func, waitTime) {
    let timeout, result

    let debounced = function () {
        let context = this
        let args = arguments
        clearTimeout(timeout)
        timeout = setTimeout(function () {
            result = func.apply(context, args)
        }, waitTime)
        return result
    }

    // 取消防抖
    debounced.cancel = function () {
        clearTimeout(timeout)
        timeout = null
    }

    return debounced
}

let count = 0;
let box = document.querySelector('.box')
let btn = document.querySelector('.btn')

function move(e) {
    console.log(this)
    console.log(e)
    box.innerHTML = count++
}

let doSome = debounce(move, 2000)
btn.onclick = function () {
    doSome.cancel()
}

box.onmousemove = doSome
// box.onmousemove = _.debounce(move, 30)
