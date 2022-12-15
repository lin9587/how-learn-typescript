// let a: object = {} 
// let arr: Array<number> = [1, 2, 3]
// let d1: Date = new Date()
// let a: object = {
//     x: 1,
//     y: 2
// } 
// let user: {username: string, age: number} = {
//     username: 'lin',
//     age: 18,
//     // gender: '男'
// }
// user.gender = '男'
// interface Person {
//     username: string
//     age: number
// }
// let a: Person = {
//     username: 'lin',
//     age: 18
// }
// let b: Person = {
//     username: 'qi',
//     age: 18
// }
// 缺点：接口只能作为类型标注使用，不能作为具体值，它只是一种抽象的结构定义，并不是实体，没有具体功能实现
// let user2 = Person
// class Person {
//     // username: string;
//     // age: number;
//     constructor(public username: string, public age: number) {
//     }
// }
// let user: Person = new Person('lin', 18)
// interface AjaxOptions {
//     url: string;
//     method: string;
// }
// function ajax(options: AjaxOptions) {}
// ajax({
//     url: '',
//     method: 'get'
// })
