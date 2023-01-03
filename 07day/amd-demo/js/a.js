// define(['./b'], function(b) {
//     console.log(b)
// })

define(function(require, exports, module){

    let b = require('./b')
    console.log(b)
})

// function fn(arr, fn1) {

//     arr.forEach(item => {
//       fn1(item)  
//     });
// }