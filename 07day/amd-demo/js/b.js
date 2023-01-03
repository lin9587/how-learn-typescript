define( function(require, exports, module) {
    let a = 1
    let b = 2

    // return {
    //     x: a,
    //     y: b
    // }

    // module.exports === exports; // true

    // exports.x = a
    // exports.y = b

    module.exports = {
        x: a,
        y: b
    }
} )

