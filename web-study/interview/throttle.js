// 第一次会触发，最后不会触发
/*
function throttle(func, wait) {
    let context, args
    let old = 0
    return function () {
        context = this
        args = arguments
        let now = Date.now()
        if ((now - old) > wait) {
            func.apply(context, args)
            old = now
        }

    }
}
*/

// 第一次不会触发，最后会触发
function throttle(func, wait) {
    let context, args, timeout
    return function () {
        context = this
        args = arguments
        if (!timeout) {
            timeout = setTimeout(function () {
                func.apply(context, args)
                timeout = null
            }, wait)
        }
    }
}


let count = 0;
let box = document.querySelector('.box')

// let btn = document.querySelector('.btn')

function move() {
    box.innerHTML = ++count
}

box.onmousemove = throttle(move, 2000)
// box.onmousemove = _.throttle(move, 2000)
