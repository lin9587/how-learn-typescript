// let a: null
// let b: undefined


// let c: number
// c = null
// c = undefined


// let a: number
// a = null
// // ok (实际运行是有问题的)
// a.toFixed(1)

let ele = document.querySelector('div')
ele.style.display = 'none'
if (ele) {
    ele.style.display = 'none'
}
