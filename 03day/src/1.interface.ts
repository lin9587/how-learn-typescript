// class Person {
//     constructor(public username: string) {}
// }
// class Student extends Person {}


// interface Point {
    // 只读
    // readonly x: number,
    // readonly y: number,
    // // 可选
    // code?: number,
    // // 可变属性
    // [key: string] : number | undefined
//     [key: string]: Person;
//     [key: number]: Student;
// }

// let p1: Point = {
//     x: 100,
//     y: 100,
//     code: 1
// }

// 不能作为值使用
// let p2 = Pinot; // error
// p1.x = 200 // error

// p1.z = 100


interface IFunc {
    (x: number, y: number): number
}
// function f1(x: number, y: number): number {
//     return x + y;
// }
// function f1(x: number, y: number): number {
//     return x + y;
// }
let fn1: IFunc = function(a: number, b: number): number {
    return a + b;
}






