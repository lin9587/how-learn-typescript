# 7dayTypeScript
one week to learn typescript

### 01day TypeScript初体验-环境搭建与编译执行
---
#### 环境搭建
`TypeScript` 编写的程序并不能直接通过浏览器运行，我们需要先通过 `TypeScript` 编译器把 `TypeScript` 代码编译成 `JavaScript`

`TypeScript` 的编译器是基于 `Node.js` 的，所以我们需要先安装 `Node.js`
#### 安装 `Node.js`
[https://nodejs.org](https://nodejs.org)
安装完成以后，可以通过 `终端` 或者 `cmd` 等命令工具来调佣 `node`
```javascript
# 查看当前 node 版本
node -v
```
#### 安装 `TypeScript` 编译
通过 `npm` 包管理工具安装 `TypeScript` 编译器
```javascript
npm i -g typescript
```
安装完成以后，我们可以通过命令 `tsc` 来调用编译器
```javascript
#查看当前 tsc 编译器版本
tsc -v
```
#### 编写代码
代码编辑器 - vocode
[https://code.visualstudio.com/](https://code.visualstudio.com/)
`vscode` 和 `Typescript` 都是微软的产品，`vs code` 本身就是基于 `TypeScript` 进行开发的，`vs code` 对 `TypeScript` 有着天然的友好的支持
`TypeScript` 默认情况下，`TypeScript` 的文件的后缀为 `.ts`
```javascript
// ./src/hellots.ts
let str: string = 'lin'
```
#### 编译执行
使用我们安装的 `TypeScript` 编译器 `tsc` 对 `.ts` 文件进行编译
```javascript
tsc ./src/hellots.ts
```
默认情况下会在当前文件所在目录下生成同名的js文件
#### 一些有用的编译选项
编译命令 `tsc` 还支持许多编译选项，这里是几个较为常用的
##### --outDir
指定编译文件输出目录
```javascript
tsc --outDir ./dist ./src/hellots.ts
```
##### --target
指定编译的代码版本目标，默认为 `ES3`
```javascript
tsc --ourDir ./dist --target ES6 ./src/hellots.ts
```
##### --watch
在监听模式下运行，当文件发生变化的时候自动编译
```javascript
tsc --outDir ./dist --target ES6 --watch ./src/hellots.ts
```
如果每次编译都输入这么一大堆的选项其实是很繁琐的，好在 `TypeScript` 编译为我们提供了一个更加强大且方便的方式，编译配置文件：`tsconfig.json` ，我们可以把上门的编译选项保存到这个配置文件中
#### 编译配置文件
我们可以把编译的一些选项保存在一个指定的 `json` 文件中，默认情况下 `tsc` 命令运行的时候会自动去加载运行命令所在的目录下的 `tsconfig.json` 文件，配置文件格式如下
```javascript
{
    "compilerOptions": {
        "outDir": "./dist",
        "target": "es6",
        "watch": true
    },
    // ** : 所有目录（包含子目录）
    // * : 所有文件，也可以指定类型 *.ts
    "include": ["./src/**/*"]
}
```
有了单独的配置文件，我们就可以直接运行 `tsc`

##### 指定加载的配置文件
使用 `--project` 或 `-p` 指定配置文件目录，会默认加载该目录下的 `tsconfig.json` 文件
```bash
tsc -p ./configs
```
也可以指定某个具体的配置文件
```bash
tsc -p ./config/ts.json
```

### 02day 类型系统
---
#### 什么是类型
程序 = 数据结构 + 算法 = 各种格式的数据 + 处理数据的逻辑
##### 数据是有格式（类型）的
- 数字、布尔值、字符
- 数组、集合
##### 程序是可能出错的
- 计算错误（对非数字类型数据进行一些数学运算）
- 调用一个不存在的方法
> 不同类型的数据有不同的操作方式或方法，如：字符串类型的数据就不应该直接参与数学运算
##### 动态类型语言 & 静态类型语言
**动态类型语言**
程序运行期间才做数据类型检查的语言，如：JavaScript
**静态类型语言**
程序编译期间做数据类型检查的语言，如：Java
##### 静态类型语言的优缺点
优点
- 程序编译阶段（配合IDE\编辑器甚至可以在编码阶段）即可发现一些潜在错误，避免程序在生产环境运行了以后再出现错误
- 编码规范、有利于团队开发协作、也更有利于大型项目开发、项目重构
- 配合IDE、编辑器提供了更强大的代码只能提示/检查
- 代码即文档
缺点
- 麻烦
- 缺少灵活性
##### 动态类型语言
优点
- 静态类型语言的缺点
缺点
- 静态类型语言的优点

<font color="#58bc85"/>静态类型语言的核心：类型系统</font>

#### 什么是类型系统
类型系统包含两个重要组成部分
- 类型标注（定义、注解）- typing
- 类型检测（检车）- type-checking
##### 类型标注
类型标注就是在代码中给数据（变量、函数（参数，返回值））添加类型说明，当一个变量或者函数（参数）等被标注以后就不能存储或传入与标注类型不符合的类型有了标注，`TypeScript` 编译器就能安装标注对这些数据进行类型合法检测。有了标注，各种编辑器、IDE等就能进行智能提示
##### 类型检测
顾名思义，就是对数据的类型进行检测。注意这里，重点是类型两字。
类型系统检测的是类型，不是具体的值（虽然，某些时候也可以检测值），比如某个参数的取值范围（1~100之间），我们不能依靠类型系统来完成这个检测，它应该是我们的业务层具体逻辑，类型系统检测的是它的值类型是否为数字！
#### 类型标注
在 `TypeScript` 中，类型标注的基本语法格式为：
```javascript
数据载体：类型
```
`TypeScript` 的类型标注，我们可以分为
- 基础的简单的类型标注
- 高级的深入的类型标注
#### 基础的简单的类型标注
- 基础类型
- 空和未定义类型
- 对象类型
- 数组类型
- 元组类型
- 枚举类型
- 无值类型
- Never类型
- 任意类型
- 未知类型（Version3.0 added）
##### 基础类型
基础类型包含：string、number、boolean
标注语法：
```javascript
let title: string = 'lin'
let n: number = 100
let isOk: boolean = true
```
##### 空和未定义类型
因为在 `Null` 和 `Undefined` 这两种类型有且只有一个值，在标注一个变量为 `Null` 和 `Undefined` 类型，那就表示该变量不能修改了
```javascript
let a: null
// ok
a = null
// error
a = 1
```
默认情况下 `null` 和 `undefined` 是所有类型的子类型。就是说你可以把 `null` 和 `undefined` 其他类型的变量
```javascript
let a: number
// ok
a = null
```
如果一个变量声明了，但是未赋值，那么该变量的值为 `nudefined`，但是如果它同时也没有标注类型的话，默认类型为 `any`，`any` 类型后面有详细说明
小技巧
因为 `null` 和 `nudefined` 都是其它类型的子类型，所以默认情况喜爱会有一些隐藏的问题
```javascript
let a: numder
a = null
// ok (实际运行是有问题的)
a.toFixed(1)
```
> 小技巧：指定 `strictNullChecks` 配置为 `true`，可以有效的检测 `null` 或者 `undefined`，避免很多常见问题
```javascript
let a: number
a = null
// error
a.tofixed(1)
```
> 也可以使我们程序编写更加严谨
```javascript
let ele = document.querySelector('div')
// 获取元素的方法返回的类型可能会包含null，所以最好是先进行必要的判断，再进行操作
if (ele) {
    ele.style.display = 'none'
}
```

##### 对象类型

**内置对象**
在 `JavaScript` 中，有许多的内置对象，比如：Object、Array、Date......，我们可以通过对象 构造函数 或者类 来进行标注
```javascript
let a: object = {}
// 数组这里标注格式有点不太一样，后面我们在数组标注中进行详细讲解
let arr: Array<number> = [1, 2, 3]
let d1: Date = new Date()
```
**自定义对象类型**
另外一种情况下，许多时候，我们可能需要自定义结构的对象。这个时候，我们可以：
- 字面量标注
- 接口
- 定义 类 或者 构造函数

字面量标注：
```javascript
let a: { username: string, age: number } = {
    username: 'lin',
    age: 18
}
// ok
a.username
a.age
// error
a.gender
```
优点：方便、直接
缺点：不利于复用和维护
接口：
```javascript
// 这里使用了 interface 关键字，在后面的接口会详细说明
interface Person {
    username: string
    age: number
}
let a: Person {
    username: 'lin',
    age: 18
}
// ok
a.username
a.age
// error
a.gender
```
优点：复用性高
缺点：接口只能作为类型标注使用，不能作为具体值，它只是一种抽象的结构定义，并不是实体，没有具体功能实现

类与构造函数：
```javascript
// 类的具体使用，也会在后面的说明
class Person {
    constructort(public username: string, public age: number) {

    }
}
// ok
a.username
a.age
// error
a.gender
```
优点：功能相对强大，定义实体的同时也定义了对应的类型
缺点：复杂，比如只想约束某个函数接收的参数结构，没有必要去定义一个类，使用接口会更简单
```javascript
interface AjaxOptions {
    url: string;
    method: string;
}

function ajax(options: AjaxOptions) {}

ajax({
    url: '',
    method: 'get'
})
```
**扩展**
这里说的包装对象其实就是 `JavaScript` 中的 `String`、`Number`、`Boolean`，我们知道 `string` 类型和 `String` 类型并不一样，在 `TypeScript` 中也是一样
```javascript 
let a: string
a = 'lin'
// error String 有的， string不一定有（对象有的，基础类型不一定有）
a = new String('lin')

let b: String;
b = new String('2')
// ok 和上面正好相反
b = '2'
``` 

##### 数组类型
`TypeScript` 中数组存储的类型必须一致，所以在标注数组类型的时候，同时要标注数组中存储的数据类型

**使用泛型标注**
```javascript
// <number> 表示数组中存储的数据类型，泛型具体概念后续说
let arr1: Array<number> = [];
// ok
arr1.push(100)
// error
arr1.push('lin')
```
**简单标注**
```javascript
let arr2: string[] = [];
// ok
arr2.push('lin')
// error
arr2.push(1)
```

##### 元组类型
元组类似数组，但是存储的元素类型不必相同，但是需要注意：
- 初始化数据的个人以及对应位置标注类型必须一致
- 越界数据必须是元组标注中的类型之一（标注越界数据可以不用对应顺序 - 联合类型）
```javascript
let data1: [string, number] = ['lin', 12]
// ok
data1.push(100)
// ok
data1.push('li')
// error
data1.push(true)
```

##### 枚举类型
枚举的作用组织收集一组关联数据的方式，通过枚举我们可以给一组有关联意义的数据赋予一些友好的名字
```javascript
enum HTTP_CODE {
    OK = 200,
    NOT_FOUND = 404,
    METHOD_NOT_ALLOWEO
};
// 200
HTTP_CODE.OK;
// 405
HTTP_CODE.METHOD_NOT_ALLOWEO
// error
HTTP_CODE.OK = 1
```
注意事项：
- key 不能是数字
- value 可以是数字，称为 数字类型枚举，也可以是字符串，称为 字符串类型枚举，但不能是其他值，默认为数字：0
- 枚举值可以省略，如果省略，则：
    * 第一个枚举值默认为：0
    * 非第一个枚举值为上一个数字枚举值 + 1
- 枚举值为只读（常量），初始化后不能修改

**字符串类型枚举**
枚举类型的值，也可以是字符串类型
```javascript
enum URLS {
    USER_REGISETER = '/user/register',
    USER_LOGIN = '/user/login',
    // 如果前一个枚举值类型为字符串，则后续枚举项必须手动赋值
    INDEX = 0
}
```
注意：如果前一个枚举值类型为字符串，则后续枚举项必须手动赋值

> 小技巧：枚举名称可以是大小，也可以是小写，推荐使用全大写（通常使用全大写的命名方式来标注值为常量）

##### 无值类型

表示没有任何数据的类型，通常用于标注无返回值函数的返回值类型，函数默认标注类型为：void

```javascript
function fn():void {
    // 没有 return 或者 return undefined
}
```
> 在 `strictNullChecks` 为 `false` 的情况下，`undefined` 和 `null` 都可以复制给 `void`，但是当 `strictNullChecks` 为 `true` 的情况下，只有 `undefined` 才可以复制给 `void`

##### Never类型

当一个函数永远不可能执行 `return` 的时候，返回就是 `never`，与 `void` 不同，`void` 是执行了 `return`，只是没有值，`never` 是不会执行 `return`，比如抛出错误，导致函数终止执行
```javascript
function fn(): never {
    throw new Error('error')
}
```

##### 任意类型

有时候，我们并不确定这个值到底是什么类型或者不需要对该值进行类型检测，就可以标注为 `any` 类型
```javascript
let a: any
```
- 一个变量申明未赋值且未标注类型的情况下，默认为 `any` 类型
- 任何类型值都可以赋值给 `any` 类型
- `any` 类型也可以赋值给任意类型
- `any` 类型有任意属性和方法

注意：标注为 `any` 类型，也意味着放弃对该值的类型检测，同时放弃 IDE 的智能提示

> 小技巧：当指定 `noImplicitAny` 配置为 `true`，当函数参数出现隐含的 `any` 类型时报错

##### 未知类型

unknow，3.0 版本中新增，属于安全版的 any，但是与 any 不同的是：
- unknow 仅能赋值给 unknow、any
- unknow 没有任何属性和方法

##### 函数类型

在 JavaScript 函数是非常重要的、在 TypeScript 也是如此。同样的，函数也有自己的类型标注格式
- 参数
- 返回值

`函数名称( 参数1：类型，参数2：类型...): 返回值类型；`
```javascript
function add(x: number, y: number): number {
    return x + y
}
```

### 03day 高级类型与接口
---

#### 接口定义

前面我们说到，TypeScript 的核心之一就是对值（数据）所具有的结构进行类型检查，除了一些前面说到基本类型标注，针对对象类型的数据，除了前面提到的一些方式以外，我们还可以通过：Interface （接口），来进行标注。

接口：对复杂的对象类型进行标注的一种方式，或者给其它代码定义一种契约（比如：类）

接口的基础语法定义结构特别简单
```typescript
interface Point {
    x: number;
    y: number;
}
```
上面代码定义了一个类型，该类型包含两个属性，一个 number 类型 x 和一个 number 类型的 y，接口中多个属性之间可以使用 逗号 或者 分号 进行分隔

我们可以通过这个接口类给一个数据进行标注
```javascript
let p1: Point = {
    x: 100,
    y: 100
}
```
> 注意：接口是一种 类型，不能作为 值 使用

##### 可选属性

接口也可以定义可选的属性，通过?来进行标注
```javascript
interface Point {
    x: number;
    y: number;
    color?: string
}
```
其中的 color? 表示该属性是可选的

##### 只读属性

我们还可以通过 readonly 来标注属性为只读
```javascript
interface Point {
    readonly x: number;
    readonly y: number;
}
```
当我们标注了一个属性为只读，那么该属性除了初始化以外，这个属性不能再次赋值的

##### 任意属性

有的时候，我们希望给一个接口添加任意属性，可以通过索引类型来实现

数字类型索引
```javascript
interface Point {
    x: number;
    y: number;
    [prop: number]: number;
}
```
字符串类型索引
```javascript
interface Point {
    x: number;
    y: number;
    [prop: string]: number;
}
```
数字索引是字符串索引的子类型

> 注意：索引签名参数类型必须为 string 或 number 之一，但两者可同时出现
```javascript
interface Point {
    [prop1: string]: string;
    [prop2: number]: string;
}
```
> 注意：当同时存在数字类型索引和字符串类型索引的时候，数字类型的值类型必须是字符串类型的值类型或子类型
```javascript
interface Point1 {
    [prop1: string]: string;
    [prop2: number]: number; // 错误
}
interface Point2 {
    [prop1: string]: Object;
    [prop2: number]: Date; // 正确
}
```

#### 使用接口描述函数

我们还可以使用接口描述一个函数
```javascript
interface IFunc {
    (a: string): string;
}
let fn: IFunc = function(a) {}
```
> 注意，如果使用接口来单独描述一个函数，是没 key 的

#### 接口合并

多个同名的接口合并成一个接口
```javascript
interface Box {
    height: number;
    width: number;
}
interface Box {
    scale: number;
}

let box: Box = {height: 5, width: 6, scale: 10}
```
- 如果合并的接口存在同名的非函数成员，则必须保证他们类型一致，否则编译报错
- 接口中的同名函数则是采用重载（后期函数说明）

### 04day 高级类型
---

#### 联合类型

联合类型也可以称为多选类型，当我们希望标注一个变量为多个类型之一时可以选择联合类型标注，或 的关系
```javascript
function css(ele: Element, attr: string, value: string | number) {
    // ...
}

let box = document.querySelector('.box')
// document.querySelector 方法返回值就是一个联合类型
if(box) {
    // ts 会提示 null 的可能性，加上判断更严谨
    css(box, 'width', '100px');
    css(box, 'opacity', 1);
    css(box, 'opacity', [1,3]); // 错误
}
```

#### 交叉类型

交叉类型也可以称为合并类型，可以把多种类型合并到一起成为一种的类型，并且 的关系

对一个对象进行扩展：
```javascript
interface o1 { x: number, y: string };
interface o2 { z: number };

let o:o1 & o2 = Object.assign({}, {x: 1, y: '2'}, {z: 100})
```
**小技巧**

> TypeScript 在编译过程中只会转换语法（比如扩展运算符，箭头函数等语法进行转换，对于 API 是不会进行转换的 （也没必要转换，而是引入一些扩展库进行处理的），如果我们的代码中使用了 target 中没有的 API，则需要手动引入，默认情况下 TypeScript 会根据 target 载入核心的类型库）

target 为 es5 时：["dom", "es5", "scripthost"]

target 为 es6 时：["dom", "es6", "dom.iterable", "scripthost"]

如果代码中使用了这些默认载入库以外的代码，则可以通过 lib 选项来进行设置


#### 字面量类型

有的时候，希望标注的不是某个类型，而是一个固定值，就可以使用字面量类型，配合联合类型会更有用
```javascript
function setPositiom(ele: Element, direction: 'left' | 'top' | 'right' | 'bottom') {
    // ...
}

// ok
box && setPosition(box, 'bottom')
// error
box && setDirection(box, 'lin')
```

#### 类型别名

有的时候类型标注比较复杂，这个时候我们就可以类型标注起一个相对简单的名字
```javascript
type dir = 'left' | 'top' | 'right' | 'bottom';
function setPosition(ele: Element, direction: dir) {
    // ...
}
```

**使用类型别名定义函数类型**

这里需要注意一下，如果使用 type 来定义函数类型，和接口有点不太相同
```javascript
type callback = (a: string) => string;
let fn: callback = function(a) {};

// 或者直接
let fn: (a: string) => string = function(a) {}
```

**interface 与 type 的区别**

interface
- 只能描述 Object/class/function 的类型
- 同名 interface 自动合并，利于扩展

type
- 不能重名
- 能描述所有数据


#### 类型推导

每次都显示标注类型会比较麻烦，typescript 提供了一种更加方便的特性：类型推导。typescript 编译器会根据当前上下文自动的推导出对应的类型标注，这个过程发生在：
- 初始化变量
- 设置函数默认参数值
- 返回函数值
```javascript
// 自动推断 x 为 number
let x = 1;
// 不能将类型"a" 分配给类型"number"
x = 'a';

// 函数参数类型、函数返回值会根据对应的默认值和返回值进行自动推断
function fn(a = 1) {return a * a}
```

#### 类型断言

有的时候，我们可能标注一个更加精确的类型（缩小类型标注范围），比如：
```javascript
let img = document.querySelector('#img');
```
我们可以看到 img 的类型为 Element，而 Element 类型其实只是元素类型的通用类型，如果我们去访问 src 这个属性是有问题的，我们需要把它的类型标注得更为精确：HTMLImageElement 类型，这个时候，我们就可以使用类型断言，它类似于一种 类型转换：
```javascript
let img = <HTMLImageElement> document.querySelector('#img');
```
或者
```javascript
let image = document.querySelector('#img') as HTMLImageElement;
```
> 注意： 断言只是一种预判，并不会数据本身产生实际的作用，即：类似转换，但并非真的转换了

### 04day 函数详情
---
#### 函数的标注

一个函数的标注
- 参数
- 返回值
```javascript
function fn(a: string): string {};
let fn: (a: string) => string = function(a) {}

type callback = (a: string): string;
interface ICallback {
    (a: string): string;
}

let fn: callback = function(a) {};
let fn: ICallback = function(a) {};
```

##### 可选参数和默认参数

- 可选参数
通过参数名后面添加 `?` 来标注该参数可选的
```javascript
let div = document.querySelector('div');
function css(el: HTMLElement, attr: string, val?: string) {

}
// 设置
div && css( div, 'width', '100px' );
// 获取
div && css( div, 'width' );
```

- 默认参数
我们还可以给参数设置默认值

- 有默认值的参数也是可选的
- 设置了默认值的参数可以根据值自动推导类型
```typescript
function sort(items: Array<number>, order = 'desc') {}

sort([1,2,3]);

// 也可以通过联合类型来限制取值
funtion sort(items: Array<number>, order: 'desc' | 'asc' = 'desc') {}
// ok
sort([1,2,3]);
// ok
sort([1,2,3], 'asc');
// error
sort([1,2,3], 'abc');
```

- 剩余参数
剩余参数是一个数组，所以标注的时候一定要注意
```typescript
interface IObj {
    [key: string]: any;
}
function merge(target: IObj, ...others: Array<IObj>) {
    return others.reduce( (prev, currnet) => {
        prev = Object.assign(prev, currnet);
        return prev
    }, target );
}
let newObj = merge({x: 1}, {y: 2}, {z: 3})
```

#### 函数中的this

无论是 `javascript` 还是 `TypeScript`，函数中的 `this` 都是我们需要关心的，那函数中的 `this` 的类型该如何进行标注呢？

1.普通函数

2.箭头函数

- 普通函数

对于普通函数而言，`this` 是会随着调用环境的变化而变化的，所以默认情况下，普通函数中的 `this` 被标注为 `any`，但我们可以在函数的第一个参数位（它不占据实际参数位置）上显示的标注 `this` 的类型
```typescript
interface T {
    a: number;
    fn: (x: number) => void
}

let obj1: T = {
    a: 1,
    fn(x: number) {
        // any类型
        console.log(this);
    }
}

let obj2: T = {
    a: 1,
    fn(this: T, x: number) {
        // 通过第一个参数位标注 this 的类型，它对实际参数不会有影响
        console.log(this)
    }
}
obj2.fn(1)
```

- 箭头函数

箭头函数的 `this` 不能像普通函数那样进行标注，属于它所在的作用域 `this` 的标注类型
```typescript
interface T {
    a: number;
    fn: (x: number) => void;
}

let obj2: T = {
    a: 1,
    fn(this: T, x: number) {
        return () => {
            // this T
            console.log(this)
        }
    }
}
```

#### 函数重载

有的时候，同一个函数会接收不同类型的参数返回不同类型的返回值，我们可以使用函数重载来实现，通过下面的例子体会一下函数重载
```typescript
function showOrHide(el: HTMLElement, attr: 'display' | 'opacity', value: 'block' | 'none' | number) {
    // ...
}

let div = document.querySelector('div');

if (div) {
    showOrHide( div, 'display', 'none' );
    showOrHide( div, 'opacity', 1 );
    // error，这里是有问题，虽然通过联合类型能够处理同时接收不同类型的参数，但是多个参数之间是一种组合的模式，我们需要的应该是一种对应的关系
    showOrHide( div, 'display', 1 );
}
```
我们来看一下函数重载
```typescript
function showOrHide(el: HTMLElement, attr: 'display', value: 'block' | 'none');
function showOrHide(el: HTMLElement, attr: 'opacity', value: number);
function showOrHide(el: HTMLElement, attr: string, value: any) {
    el.style[attr] = value;
}
```

重载函数类型只需要定义结构，不需要实体，类似接口
```typescript
interface PlainObject {
    [key: string]: string | number;
}

function css(el: HTMLElement, attr: PlainObject);
function css(el: HTMLElement, attr: string, value: string | number);
function css(el: HTMLElement, attr: any, value?: any) {
    if(typeof attr === 'string' && value) {
        el.style[attr] = value;
    }
    if(typeof attr === 'object') {
        for(let key in attr) {
            el.style[attr] = attr[key];
        }
    }
}

let div = document.querySelector('div');
if (div) {
    css( div, 'width', '100px' );
    css( div, {
        width: '100px'
    } )

    // error，如果不使用重载，这里就会有问题了
    css(div, 'width')
}
```

### 05day 面向对象

#### 类

面相对象编程中一个重要的核心就是：`类`，当我们使用面向对象的方式进行编程的时候，通常会首先去分析具体要实现的功能，把特性相似的抽象成一个一个的类，然后通过这些类实例化出来的具体对象来完成具体业务需求。

##### 类的基础

在类的基础中，包含下面几个核心的知识点，也是 `typescript` 与 `ECMAScript2015+` 在类方面共有的一些特性

- `class` 关键字
- 构造函数：`constructor`
- 成员属性定义
- 成员方法
- this 关键字

除了以上的共同特性以外，在 `TypeScript` 中还有许多 `ECMAScript` 没有的，或当前还不支持的一些特性，如：抽象

##### class

通过 `class` 就可以描述和组织一个类的结构，语法：
```javascript
// 通常类的名称我们会使用 大驼峰命名， 规则，也就是（单词）首字母大写
class User {
    // 类的特征都定义在 {} 内部
}
```

##### 构造函数

通过 `class` 定义了一个类以后，我们可以通过 `new` 关键字来调用该类从而得到该类型的一个具体对象：也就是实例化。

为什么类可以像函数一样去调用呢，其实我们执行的并不是这个类，而是类中包含的一个特殊函数：构造函数 - `constructor`
```javascript
class User {
    constructor() {
        console.log('实例化...')
    }
}
let user1 = new User;
```
- 默认情况下，构造函数是一个空函数
- 构造函数会在类被实例化的时候调用
- 我们定义的构造函数会覆盖默认构造函数
- 如果在实例化 (new) 一个类的时候无需传入参数，则可以省略 `()`
- 构造函数 `constructor` 不允许有 `retrun` 和返回值类型标注得 (因为要返回实例对象)

通常情况下，我们会把一个类实例化的时候的初始化相关代码写在构造函数中，比如对类成员属性的初始化赋值

##### 成员属性与方法定义

```javascript
class User {
    id: number;
    username: string;

    constructor(id: number, username: string) {
        this.id = id;
        this.username = username;
    }

    postArticle(title: string, content: string): void {
        console.log(`发表了一篇文章：${title}`)
    }
}

let user1 = new User(1, 'lin');
let user2 = new User(1, 'li');
```

##### this 关键字

在类内部，我们可以通过 `this` 关键字来访问类的成员属性和方法
```typescript
class User {
    id: number;
    username: string;

    postArticle(title: string, content: string): void {
        // 在类的内部可以通过 this 来访问成员属性和方法
        console.log(`${this.username} 发表了一篇文章:${title}`)
    }
}
```

##### 构造函数参数属性

因为在构造函数中对类成员属性进行传参赋值初始化是一个比较常见的场景，所以 `ts` 提供了一个简化操作：给构造函数参数添加修饰符来直接生成成员属性

- `public` 就是类的默认修饰符，表示该成员可以在任何地方进行读写操作

```typescript
class User {
    // id: number;
    // username: string;

    constructor(
        public id: number,
        public username: string
    ) {
        // this.id = id;
        // this.username = username;
    }

    postArticle(title: string, content: string) {
        console.log(this.username, '这是一遍文章', title, content);
    }
}
```

#### 继承


























