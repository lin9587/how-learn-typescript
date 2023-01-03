// function fn() {
//     let a = 1
//     let b = 2

//     return {
//         x: a,
//         y: b
//     }
// }

(function(root, factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = fn
    } else if (typeof define === 'function' && define.amd) {
        define( fn )
    } else {
        root.fn = fn
    }
})(this, function(){
    let a = 1
    let b = 2

    return {
        x: a,
        y: b
    }
})