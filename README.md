# 7dayTypeScript

01day

## TypeScript 初体验-环境搭建与编译执行

（1）环境搭建

```
TypeScript 编写的程序并不能直接通过浏览器运行，我们需要先通过 TypeScript 编译器把 TypeScript 代码编译成 JavaScript

TypeScript 的编译器是基于 Node.js 的，所以我们需要先安装 Node.js
```

（2）安装 `Node.js`

[https://nodejs.org](https://nodejs.org) 安装完成以后，可以通过 `终端` 或者 `cmd` 等命令工具来调佣 `node`

```bash
# 查看当前 node 版本
node -v
```

（3）安装 `TypeScript` 编译

通过 `npm` 包管理工具安装 `TypeScript` 编译器

```bash
npm i -g typescript
```

安装完成以后，我们可以通过命令 `tsc` 来调用编译器

```bash
#查看当前 tsc 编译器版本
tsc -v
```

（4）编写代码

代码编辑器 - [vscode](https://code.visualstudio.com/)
和 `Typescript` 都是微软的产品，`vs code` 本身就是基于 `TypeScript` 进行开发的，`vs code` 对 `TypeScript` 有着天然的友好的支持
`TypeScript` 默认情况下，`TypeScript` 的文件的后缀为 `.ts`

```typescript
// ./src/hellots.ts
let str: string = 'lin'
```

（5）编译执行

使用我们安装的 `TypeScript` 编译器 `tsc` 对 `.ts` 文件进行编译

```typescript
tsc ./src/hellots.ts
```

默认情况下会在当前文件所在目录下生成同名的 js 文件

（6）一些有用的编译选项

编译命令 `tsc` 还支持许多编译选项，这里是几个较为常用的

--outDir 指定编译文件输出目录

```typescript
tsc --outDir ./dist ./src/hellots.ts
```

--target 指定编译的代码版本目标，默认为 `ES3`

```typescript
tsc --ourDir ./dist --target ES6 ./src/hellots.ts
```

--watch 在监听模式下运行，当文件发生变化的时候自动编译

```bash
tsc --outDir ./dist --target ES6 --watch ./src/hellots.ts
```

如果每次编译都输入这么一大堆的选项其实是很繁琐的，好在 `TypeScript` 编译为我们提供了一个更加强大且方便的方式，编译配置文件：`tsconfig.json` ，我们可以把上面的编译选项保存到这个配置文件中

（7）编译配置文件

我们可以把编译的一些选项保存在一个指定的 `json` 文件中，默认情况下 `tsc` 命令运行的时候会自动去加载运行命令所在的目录下的 `tsconfig.json` 文件，配置文件格式如下

```json
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

指定加载的配置文件

使用 `--project` 或 `-p` 指定配置文件目录，会默认加载该目录下的 `tsconfig.json` 文件

```typescript
tsc -p ./configs
```

也可以指定某个具体的配置文件

```typescript
tsc -p ./config/ts.json
```

02day

## 类型系统

（1）什么是类型

```
程序 = 数据结构 + 算法 = 各种格式的数据 + 处理数据的逻辑
```

（2）数据是有格式（类型）的

- 数字、布尔值、字符
- 数组、集合

（3）程序是可能出错的

- 计算错误（对非数字类型数据进行一些数学运算）
- 调用一个不存在的方法

> 不同类型的数据有不同的操作方式或方法，如：字符串类型的数据就不应该直接参与数学运算

（4）动态类型语言 & 静态类型语言

```
动态类型语言 -> 程序运行期间才做数据类型检查的语言，如：JavaScript
静态类型语言 -> 程序编译期间做数据类型检查的语言，如：Java
```

（5）静态类型语言的优缺点

- 优点

  - 程序编译阶段（配合 IDE\编辑器甚至可以在编码阶段）即可发现一些潜在错误，避免程序在生产环境运行了以后再出现错误
  - 编码规范、有利于团队开发协作、也更有利于大型项目开发、项目重构
  - 配合 IDE、编辑器提供了更强大的代码只能提示/检查
  - 代码即文档

- 缺点
  - 麻烦
  - 缺少灵活性

（6）动态类型语言

- 优点

  - 静态类型语言的缺点

- 缺点
  - 静态类型语言的优点

> <font color="#58bc85"/>静态类型语言的核心：类型系统</font>

### 什么是类型系统

类型系统包含两个重要组成部分

- 类型标注（定义、注解）- typing
- 类型检测（检测）- type-checking

（1）类型标注

```
类型标注就是在代码中给数据（变量、函数（参数，返回值））添加类型说明，当一个变量或者函数（参数）等被标注以后就不能存储或传入与标注类型不符合的类型有了标注，TypeScript 编译器就能安装标注对这些数据进行类型合法检测。有了标注，各种编辑器、IDE等就能进行智能提示
```

（2）类型检测

```
顾名思义，就是对数据的类型进行检测。注意这里，重点是类型两字。

类型系统检测的是类型，不是具体的值（虽然，某些时候也可以检测值），比如某个参数的取值范围（1~100之间），我们不能依靠类型系统来完成这个检测，它应该是我们的业务层具体逻辑，类型系统检测的是它的值类型是否为数字！
```

### 类型标注

在 `TypeScript` 中，类型标注的基本语法格式为：

```typescript
数据载体：类型
```

`TypeScript` 的类型标注，我们可以分为

- 基础的简单的类型标注
- 高级的深入的类型标注

### 基础的简单的类型标注

- 基础类型
- 空和未定义类型
- 对象类型
- 数组类型
- 元组类型
- 枚举类型
- 无值类型
- Never 类型
- 任意类型
- 未知类型（Version3.0 added）

（1）基础类型

```
基础类型包含：string、number、boolean
```

标注语法：

```typescript
let title: string = 'lin'
let n: number = 100
let isOk: boolean = true
```

（2）空和未定义类型

因为在 `Null` 和 `Undefined` 这两种类型有且只有一个值，在标注一个变量为 `Null` 和 `Undefined` 类型，那就表示该变量不能修改了

```typescript
let a: null
// ok
a = null
// error
a = 1
```

默认情况下 `null` 和 `undefined` 是所有类型的子类型。就是说你可以把 `null` 和 `undefined` 其他类型的变量

```typescript
let a: number
// ok
a = null
```

如果一个变量声明了，但是未赋值，那么该变量的值为 `nudefined`，但是如果它同时也没有标注类型的话，默认类型为 `any`，`any` 类型后面有详细说明

> 小技巧: 因为 `null` 和 `nudefined` 都是其它类型的子类型，所以默认情况下会有一些隐藏的问题

```typescript
let a: numder
a = null
// ok (实际运行是有问题的)
a.toFixed(1)
```

> 小技巧：指定 `strictNullChecks` 配置为 `true`，可以有效的检测 `null` 或者 `undefined`，避免很多常见问题

```typescript
let a: number
a = null
// error
a.tofixed(1)
```

也可以使我们程序编写更加严谨

```typescript
let ele = document.querySelector('div')
// 获取元素的方法返回的类型可能会包含null，所以最好是先进行必要的判断，再进行操作
if (ele) {
	ele.style.display = 'none'
}
```

（3）对象类型

1、内置对象

在 `JavaScript` 中，有许多的内置对象，比如：Object、Array、Date......，我们可以通过对象 构造函数 或者类 来进行标注

```typescript
let a: object = {}
// 数组这里标注格式有点不太一样，后面我们在数组标注中进行详细讲解
let arr: Array<number> = [1, 2, 3]
let d1: Date = new Date()
```

2、自定义对象类型

另外一种情况下，许多时候，我们可能需要自定义结构的对象。这个时候，我们可以：

- 字面量标注
- 接口
- 定义类或者构造函数

1、字面量标注：

```javascript
let a: { username: string, age: number } = {
	username: 'lin',
	age: 18,
}
// ok
a.username
a.age
// error
a.gender
```

优点：方便、直接

缺点：不利于复用和维护

2、接口：

```typescript
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

3、类与构造函数：

```typescript
// 类的具体使用，也会在后面的说明
class Person {
	constructort(public username: string, public age: number) {}
}
// ok
a.username
a.age
// error
a.gender
```

优点：功能相对强大，定义实体的同时也定义了对应的类型

缺点：复杂，比如只想约束某个函数接收的参数结构，没有必要去定义一个类，使用接口会更简单

```typescript
interface AjaxOptions {
	url: string
	method: string
}

function ajax(options: AjaxOptions) {}

ajax({
	url: '',
	method: 'get',
})
```

4、扩展

这里说的包装对象其实就是 `JavaScript` 中的 `String`、`Number`、`Boolean`，我们知道 `string` 类型和 `String` 类型并不一样，在 `TypeScript` 中也是一样

```typescript
let a: string
a = 'lin'
// error String 有的， string不一定有（对象有的，基础类型不一定有）
a = new String('lin')

let b: String
b = new String('2')
// ok 和上面正好相反
b = '2'
```

（4）数组类型

`TypeScript` 中数组存储的类型必须一致，所以在标注数组类型的时候，同时要标注数组中存储的数据类型

- 使用泛型标注

```typescript
// <number> 表示数组中存储的数据类型，泛型具体概念后续说
let arr1: Array<number> = []
// ok
arr1.push(100)
// error
arr1.push('lin')
```

- 简单标注

```typescript
let arr2: string[] = []
// ok
arr2.push('lin')
// error
arr2.push(1)
```

（5）元组类型

元组类似数组，但是存储的元素类型不必相同，但是需要注意：

- 初始化数据的个人以及对应位置标注类型必须一致
- 越界数据必须是元组标注中的类型之一（标注越界数据可以不用对应顺序 - 联合类型）

```typescript
let data1: [string, number] = ['lin', 12]
// ok
data1.push(100)
// ok
data1.push('li')
// error
data1.push(true)
```

（6）枚举类型

枚举的作用组织收集一组关联数据的方式，通过枚举我们可以给一组有关联意义的数据赋予一些友好的名字

```typescript
enum HTTP_CODE {
	OK = 200,
	NOT_FOUND = 404,
	METHOD_NOT_ALLOWEO,
}
// 200
HTTP_CODE.OK
// 405
HTTP_CODE.METHOD_NOT_ALLOWEO
// error
HTTP_CODE.OK = 1
```

注意事项：

- key 不能是数字
- value 可以是数字，称为 数字类型枚举，也可以是字符串，称为 字符串类型枚举，但不能是其他值，默认为数字：0
- 枚举值可以省略，如果省略，则：
  - 第一个枚举值默认为：0
  - 非第一个枚举值为上一个数字枚举值 + 1
- 枚举值为只读（常量），初始化后不能修改

1、字符串类型枚举

枚举类型的值，也可以是字符串类型

```typescript
enum URLS {
	USER_REGISETER = '/user/register',
	USER_LOGIN = '/user/login',
	// 如果前一个枚举值类型为字符串，则后续枚举项必须手动赋值
	INDEX = 0,
}
```

注意：如果前一个枚举值类型为字符串，则后续枚举项必须手动赋值

> 小技巧：枚举名称可以是大小，也可以是小写，推荐使用全大写（通常使用全大写的命名方式来标注值为常量）

（7）无值类型

表示没有任何数据的类型，通常用于标注无返回值函数的返回值类型，函数默认标注类型为：void

```typescript
function fn(): void {
	// 没有 return 或者 return undefined
}
```

> 在 `strictNullChecks` 为 `false` 的情况下，`undefined` 和 `null` 都可以复制给 `void`，但是当 `strictNullChecks` 为 `true` 的情况下，只有 `undefined` 才可以复制给 `void`

（8）Never 类型

当一个函数永远不可能执行 `return` 的时候，返回就是 `never`，与 `void` 不同，`void` 是执行了 `return`，只是没有值，`never` 是不会执行 `return`，比如抛出错误，导致函数终止执行

```typescript
function fn(): never {
	throw new Error('error')
}
```

（9）任意类型

有时候，我们并不确定这个值到底是什么类型或者不需要对该值进行类型检测，就可以标注为 `any` 类型

```typescript
let a: any
```

- 一个变量申明未赋值且未标注类型的情况下，默认为 `any` 类型
- 任何类型值都可以赋值给 `any` 类型
- `any` 类型也可以赋值给任意类型
- `any` 类型有任意属性和方法

注意：标注为 `any` 类型，也意味着放弃对该值的类型检测，同时放弃 IDE 的智能提示

> 小技巧：当指定 `noImplicitAny` 配置为 `true`，当函数参数出现隐含的 `any` 类型时报错

（10）未知类型

unknow，3.0 版本中新增，属于安全版的 any，但是与 any 不同的是：

- unknow 仅能赋值给 unknow、any
- unknow 没有任何属性和方法

（11）函数类型

在 JavaScript 函数是非常重要的、在 TypeScript 也是如此。同样的，函数也有自己的类型标注格式

- 参数
- 返回值

`函数名称( 参数1：类型，参数2：类型...): 返回值类型；`

```javascript
function add(x: number, y: number): number {
	return x + y
}
```

03day

## 高级类型与接口

（1）接口定义

```
前面我们说到，TypeScript 的核心之一就是对值（数据）所具有的结构进行类型检查，除了一些前面说到基本类型标注，针对对象类型的数据，除了前面提到的一些方式以外，我们还可以通过：Interface （接口），来进行标注。

接口：对复杂的对象类型进行标注的一种方式，或者给其它代码定义一种契约（比如：类）
```

接口的基础语法定义结构特别简单

```typescript
interface Point {
	x: number
	y: number
}
```

上面代码定义了一个类型，该类型包含两个属性，一个 number 类型 x 和一个 number 类型的 y，接口中多个属性之间可以使用 逗号 或者 分号 进行分隔

我们可以通过这个接口类给一个数据进行标注

```typescript
let p1: Point = {
	x: 100,
	y: 100,
}
```

> 注意：接口是一种 类型，不能作为 值 使用

- 可选属性

接口也可以定义可选的属性，通过?来进行标注

```typescript
interface Point {
	x: number
	y: number
	color?: string
}
```

其中的 color? 表示该属性是可选的

- 只读属性

我们还可以通过 readonly 来标注属性为只读

```typescript
interface Point {
	readonly x: number
	readonly y: number
}
```

当我们标注了一个属性为只读，那么该属性除了初始化以外，这个属性不能再次赋值的

- 任意属性

有的时候，我们希望给一个接口添加任意属性，可以通过索引类型来实现

数字类型索引

```typescript
interface Point {
	x: number
	y: number
	[prop: number]: number
}
```

字符串类型索引

```typescript
interface Point {
	x: number
	y: number
	[prop: string]: number
}
```

数字索引是字符串索引的子类型

> 注意：索引签名参数类型必须为 string 或 number 之一，但两者可同时出现

```typescript
interface Point {
	[prop1: string]: string
	[prop2: number]: string
}
```

> 注意：当同时存在数字类型索引和字符串类型索引的时候，数字类型的值类型必须是字符串类型的值类型或子类型

```typescript
interface Point1 {
	[prop1: string]: string
	[prop2: number]: number // 错误
}
interface Point2 {
	[prop1: string]: Object
	[prop2: number]: Date // 正确
}
```

（2）使用接口描述函数

我们还可以使用接口描述一个函数

```typescript
interface IFunc {
	(a: string): string
}
let fn: IFunc = function (a) {}
```

> 注意，如果使用接口来单独描述一个函数，是没 key 的

（3）接口合并

多个同名的接口合并成一个接口

```typescript
interface Box {
	height: number
	width: number
}
interface Box {
	scale: number
}

let box: Box = { height: 5, width: 6, scale: 10 }
```

- 如果合并的接口存在同名的非函数成员，则必须保证他们类型一致，否则编译报错
- 接口中的同名函数则是采用重载（后期函数说明）

04day

## 高级类型

（1）联合类型

联合类型也可以称为多选类型，当我们希望标注一个变量为多个类型之一时可以选择联合类型标注，`或` 的关系

```typescript
function css(ele: Element, attr: string, value: string | number) {
	// ...
}

let box = document.querySelector('.box')
// document.querySelector 方法返回值就是一个联合类型
if (box) {
	// ts 会提示 null 的可能性，加上判断更严谨
	css(box, 'width', '100px')
	css(box, 'opacity', 1)
	css(box, 'opacity', [1, 3]) // 错误
}
```

（2）交叉类型

交叉类型也可以称为合并类型，可以把多种类型合并到一起成为一种的类型，并且 的关系

对一个对象进行扩展：

```typescript
interface o1 {
	x: number
	y: string
}
interface o2 {
	z: number
}

let o: o1 & o2 = Object.assign({}, { x: 1, y: '2' }, { z: 100 })
```

> 小技巧：TypeScript 在编译过程中只会转换语法（比如扩展运算符，箭头函数等语法进行转换，对于 API 是不会进行转换的 （也没必要转换，而是引入一些扩展库进行处理的），如果我们的代码中使用了 target 中没有的 API，则需要手动引入，默认情况下 TypeScript 会根据 target 载入核心的类型库）

target 为 es5 时：["dom", "es5", "scripthost"]

target 为 es6 时：["dom", "es6", "dom.iterable", "scripthost"]

如果代码中使用了这些默认载入库以外的代码，则可以通过 lib 选项来进行设置

（3）字面量类型

有的时候，希望标注的不是某个类型，而是一个固定值，就可以使用字面量类型，配合联合类型会更有用

```typescript
function setPositiom(
	ele: Element,
	direction: 'left' | 'top' | 'right' | 'bottom',
) {
	// ...
}

// ok
box && setPosition(box, 'bottom')
// error
box && setDirection(box, 'lin')
```

（4）类型别名

有的时候类型标注比较复杂，这个时候我们就可以类型标注起一个相对简单的名字

```typescript
type dir = 'left' | 'top' | 'right' | 'bottom'
function setPosition(ele: Element, direction: dir) {
	// ...
}
```

- 使用类型别名定义函数类型

这里需要注意一下，如果使用 type 来定义函数类型，和接口有点不太相同

```typescript
type callback = (a: string) => string
let fn: callback = function (a) {}

// 或者直接
let fn: (a: string) => string = function (a) {}
```

- interface 与 type 的区别
  - interface
    - 只能描述 Object/class/function 的类型
    - 同名 interface 自动合并，利于扩展
  - type
    - 不能重名
    - 能描述所有数据

（5）类型推导

每次都显示标注类型会比较麻烦，typescript 提供了一种更加方便的特性：类型推导。typescript 编译器会根据当前上下文自动的推导出对应的类型标注，这个过程发生在：

- 初始化变量
- 设置函数默认参数值
- 返回函数值

```typescript
// 自动推断 x 为 number
let x = 1
// 不能将类型"a" 分配给类型"number"
x = 'a'

// 函数参数类型、函数返回值会根据对应的默认值和返回值进行自动推断
function fn(a = 1) {
	return a * a
}
```

（6）类型断言

有的时候，我们可能标注一个更加精确的类型（缩小类型标注范围），比如：

```typescript
let img = document.querySelector('#img')
```

我们可以看到 img 的类型为 Element，而 Element 类型其实只是元素类型的通用类型，如果我们去访问 src 这个属性是有问题的，我们需要把它的类型标注得更为精确：HTMLImageElement 类型，这个时候，我们就可以使用类型断言，它类似于一种 类型转换：

```typescript
let img = <HTMLImageElement>document.querySelector('#img')
```

或者

```typescript
let image = document.querySelector('#img') as HTMLImageElement
```

注意： 断言只是一种预判，并不会数据本身产生实际的作用，即：类似转换，但并非真的转换了

## 04day 函数详情

（1）函数的标注

一个函数的标注

- 参数
- 返回值

```typescript
function fn(a: string): string {};
let fn: (a: string) => string = function(a) {}

type callback = (a: string): string;
interface ICallback {
    (a: string): string;
}

let fn: callback = function(a) {};
let fn: ICallback = function(a) {};
```

（1）可选参数和默认参数、剩余参数

1、可选参数

通过参数名后面添加 `?` 来标注该参数可选的

```typescript
let div = document.querySelector('div')
function css(el: HTMLElement, attr: string, val?: string) {}
// 设置
div && css(div, 'width', '100px')
// 获取
div && css(div, 'width')
```

2、默认参数

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

3、剩余参数

剩余参数是一个数组，所以标注的时候一定要注意

```typescript
interface IObj {
	[key: string]: any
}
function merge(target: IObj, ...others: Array<IObj>) {
	return others.reduce((prev, currnet) => {
		prev = Object.assign(prev, currnet)
		return prev
	}, target)
}
let newObj = merge({ x: 1 }, { y: 2 }, { z: 3 })
```

（2）函数中的 this

无论是 `javascript` 还是 `TypeScript`，函数中的 `this` 都是我们需要关心的，那函数中的 `this` 的类型该如何进行标注呢？

- 普通函数

- 箭头函数

1、普通函数

对于普通函数而言，`this` 是会随着调用环境的变化而变化的，所以默认情况下，普通函数中的 `this` 被标注为 `any`，但我们可以在函数的第一个参数位（它不占据实际参数位置）上显示的标注 `this` 的类型

```typescript
interface T {
	a: number
	fn: (x: number) => void
}

let obj1: T = {
	a: 1,
	fn(x: number) {
		// any类型
		console.log(this)
	},
}

let obj2: T = {
	a: 1,
	fn(this: T, x: number) {
		// 通过第一个参数位标注 this 的类型，它对实际参数不会有影响
		console.log(this)
	},
}
obj2.fn(1)
```

2、箭头函数

箭头函数的 `this` 不能像普通函数那样进行标注，属于它所在的作用域 `this` 的标注类型

```typescript
interface T {
	a: number
	fn: (x: number) => void
}

let obj2: T = {
	a: 1,
	fn(this: T, x: number) {
		return () => {
			// this T
			console.log(this)
		}
	},
}
```

（3）函数重载

有的时候，同一个函数会接收不同类型的参数返回不同类型的返回值，我们可以使用函数重载来实现，通过下面的例子体会一下函数重载

```typescript
function showOrHide(
	el: HTMLElement,
	attr: 'display' | 'opacity',
	value: 'block' | 'none' | number,
) {
	// ...
}

let div = document.querySelector('div')

if (div) {
	showOrHide(div, 'display', 'none')
	showOrHide(div, 'opacity', 1)
	// error，这里是有问题，虽然通过联合类型能够处理同时接收不同类型的参数，但是多个参数之间是一种组合的模式，我们需要的应该是一种对应的关系
	showOrHide(div, 'display', 1)
}
```

看一下函数重载

```typescript
function showOrHide(el: HTMLElement, attr: 'display', value: 'block' | 'none')
function showOrHide(el: HTMLElement, attr: 'opacity', value: number)
function showOrHide(el: HTMLElement, attr: string, value: any) {
	el.style[attr] = value
}
```

重载函数类型只需要定义结构，不需要实体，类似接口

```typescript
interface PlainObject {
	[key: string]: string | number
}

function css(el: HTMLElement, attr: PlainObject)
function css(el: HTMLElement, attr: string, value: string | number)
function css(el: HTMLElement, attr: any, value?: any) {
	if (typeof attr === 'string' && value) {
		el.style[attr] = value
	}
	if (typeof attr === 'object') {
		for (let key in attr) {
			el.style[attr] = attr[key]
		}
	}
}

let div = document.querySelector('div')
if (div) {
	css(div, 'width', '100px')
	css(div, {
		width: '100px',
	})

	// error，如果不使用重载，这里就会有问题了
	css(div, 'width')
}
```

05day

## 面向对象

（1）类

面相对象编程中一个重要的核心就是：`类`，当我们使用面向对象的方式进行编程的时候，通常会首先去分析具体要实现的功能，把特性相似的抽象成一个一个的类，然后通过这些类实例化出来的具体对象来完成具体业务需求。

1、类的基础

在类的基础中，包含下面几个核心的知识点，也是 `typescript` 与 `ECMAScript2015+` 在类方面共有的一些特性

- `class` 关键字
- 构造函数：`constructor`
- 成员属性定义
- 成员方法
- this 关键字

除了以上的共同特性以外，在 `TypeScript` 中还有许多 `ECMAScript` 没有的，或当前还不支持的一些特性，如：抽象

2、class

通过 `class` 就可以描述和组织一个类的结构，语法：

```javascript
// 通常类的名称我们会使用 大驼峰命名， 规则，也就是（单词）首字母大写
class User {
	// 类的特征都定义在 {} 内部
}
```

3、构造函数

通过 `class` 定义了一个类以后，我们可以通过 `new` 关键字来调用该类从而得到该类型的一个具体对象：也就是实例化。

为什么类可以像函数一样去调用呢，其实我们执行的并不是这个类，而是类中包含的一个特殊函数：构造函数 - `constructor`

```javascript
class User {
	constructor() {
		console.log('实例化...')
	}
}
let user1 = new User()
```

- 默认情况下，构造函数是一个空函数
- 构造函数会在类被实例化的时候调用
- 我们定义的构造函数会覆盖默认构造函数
- 如果在实例化 (new) 一个类的时候无需传入参数，则可以省略 `()`
- 构造函数 `constructor` 不允许有 `retrun` 和返回值类型标注得 (因为要返回实例对象)

通常情况下，我们会把一个类实例化的时候的初始化相关代码写在构造函数中，比如对类成员属性的初始化赋值

4、成员属性与方法定义

```javascript
class User {
	id: number
	username: string

	constructor(id: number, username: string) {
		this.id = id
		this.username = username
	}

	postArticle(title: string, content: string): void {
		console.log(`发表了一篇文章：${title}`)
	}
}

let user1 = new User(1, 'lin')
let user2 = new User(1, 'li')
```

5、this 关键字

在类内部，我们可以通过 `this` 关键字来访问类的成员属性和方法

```typescript
class User {
	id: number
	username: string

	postArticle(title: string, content: string): void {
		// 在类的内部可以通过 this 来访问成员属性和方法
		console.log(`${this.username} 发表了一篇文章:${title}`)
	}
}
```

6、构造函数参数属性

因为在构造函数中对类成员属性进行传参赋值初始化是一个比较常见的场景，所以 `ts` 提供了一个简化操作：给构造函数参数添加修饰符来直接生成成员属性

`public` 就是类的默认修饰符，表示该成员可以在任何地方进行读写操作

```typescript
class User {
	// id: number;
	// username: string;

	constructor(public id: number, public username: string) {
		// this.id = id;
		// this.username = username;
	}

	postArticle(title: string, content: string) {
		console.log(this.username, '这是一遍文章', title, content)
	}
}
```

（2）继承

在 `ts` 中，也是通过 `extends` 关键字类实现类的继承

```javascript
class VIP extends User {}
```

（3）super 关键字

在子类中，我们可以通过 `super` 来引用父类

- 如果子类没有重写构造函数，则会在默认的 `constructor` 中调用 `super()`
- 如果子类有自己的构造函数，则需要在子类构造函数中显示的调用父类构造函数：`super(//参数)`，否则会报错
- 在子类构造函数中只有在 `super(//参数)` 之后才能访问 `this`
- 在子类中，可以通过 `super` 来访问父类的成员属性和方法
- 通过 `super` 访问父类的同时，会自动绑定上下文对象为当前子类 `this`

```typescript
class VIP extends User {
	constructor(id: number, username: string, public score = 0) {
		super(id, username)
	}

	postAttrachment(file: string): void {
		console.log(`${this.username} 上传了一个附件；${file}`)
	}
}

let vip1 = new VIP(1, 'lin')
vip1.postArticle('标题', '内容')
vip1.postAttrachment('1.png')
```

（4）方法的重写与重载

默认情况下，子类成员方法集成自父类，但是子类也可以对它们进行重写和重载

```typescript
class VIP extends User {
	constructor(id: number, username: string, public score = 0) {
		super(id, username)
	}

	// 参数个数，参数类型不同: 重载
	postArticle(title: string, content: string): void
	postArticle(title: string, content: string, file: string): void
	postArticle(title: string, content: string, file?: stringj): void {
		super.postArticle(title, content)

		if (file) {
			this.postAttachment(file)
		}
	}

	postAttachment(file: string): void {
		console.log(`${this.username} 上传了一个附件: ${file}`)
	}
}

// 使用场景
let vip1 = new VIP(1, 'lin')
vip1.postArticle('标题', '内容')
vip1.postArticle('标题', '内容', '1.png')
```

（5）修饰符

有的时候，我们希望对类成员（属性、方法）进行一定的访问控制，来保证数据的安装，通过 `类修饰符` 可以做到这一点，目前 TypeScript 提供了四种修饰符:

- public: 公有，默认
- protected: 受保护
- private: 私有
- readonly: 只读

1、public 修饰符

这个是类成员的默认修饰符，它的访问级别为:

- 自身
- 子类
- 类外

2、protected 修饰符

它的访问级别为:

- 自身
- 子类

3、private 修饰符

它的访问级别为:

- 自身

4、readonly 修饰符

只读修饰符只能针对成员属性使用，且必须在声明时或构造函数里被初始化，它的访问级别为:

- 自身
- 子类
- 类外

```typescript
class User {
	constructor(
		// 可以访问，但是一旦确定不能修改
		readonly id: number,
		// 可以访问，但是不能外部修改
		protected username: string,
		// 外部包括子类不能访问，也不可修改
		private password: string,
	) {
		// ...
	}

	// ...
}

let user1 = new User(1, 'lin', '123')
```

（6）寄存器

有的时候，我们需要对类成员 `属性` 进行更加细腻的控制，就可以使用 `寄存器` 来完成这个需求，通过 `寄存器`，我们可以对类成员属性的访问进行拦截并加以控制，更好的控制成员属性的设置和访问边界，寄存器分为两种:

- getter
- setter

1、getter

访问控制器，当访问指定成员属性时调用

2、setter - 组件

- 函数式组件
- 类式组件
- props 与 state
- 组件通信
- 表单与受控组件

设置控制器，当设置指定成员属性时调用

```typescript
class User {

    constructor(
        // 外部包括子类不能访问，也不可修改
        provate _password: string
    ) {

    }

    set password(password: string) {
        if(password.length >= 6) {
            this._password = password
        }
    }

    get password():string {
        return '****'
    }

}
```

（7）静态成员

前面说的是成员属性和方法都是实例对象的，但是有的时候，我们需要给类本身添加成员，区分某成员是静态还是实例的:

- 该成员属性或方法是类型的特征还是实例化对象的特征
- 如果一个成员方法中没有使用或依赖 `this`，那么该方法就是静态的

```typescript
type IAllowFileTypeList = 'png' | 'gif' | 'jpg' | 'jpeg' | 'webp'

class VIP extends User {
	// static 必须在 readonly 之前
	static readonly ALLOW_FILE_TYPE_LIST: Array<IAllowFileTypeList> = [
		'png',
		'gif',
		'jpg',
		'jpeg',
		'webp',
	]

	constructor(
		id: number,
		username: string,
		private _allowFileTypes: array<iallow_file_type_list>,
	) {
		super(id, username)
	}

	static info(): void {
		// 类的静态成员都是使用 类名.静态成员 来访问
		// VIP 这种类型的用户允许上传的所有类型有哪一些
		console.log(VIP.ALLOW_FILE_TYPE_LIST)
		// 当前这个 vip 用户允许上传类型有哪一些
		// console.log(this._allowFileType);
	}
}

let user1 = new User(1, 'lin', ['png', 'gif'])
User.ALLOW_FILE_TYPE_LIST
User.info()
```

（8）抽象类

有的时候，一个基类（父类）的一些方法无法确定具体的行为，而是由继承的子类去实现，看下面的例子：

现在前端比较流行组件化设计，比如 `react`

```tsx
class MyComponent extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		// ...
	}
}
```

根据上面代码，我们可以大致设计如下结构

- 每个组件都一个 `props` 属性， 可以通过构造函数进行初始化，有父级定义
- 每个组件都一个 `state` 属性， 由父级定义
- 每个组件都必须有一个 `render` 的方法

```tsx
class Component<T1, T2> {
	public state: T2

	construtor(public props: T1) {
		// ...
	}

	render(): string {
		// ... 不知道做点才好， 但是为了避免子类没有 render 方法而导致组件解析错误，父类就用一个默认的 render 去处理可能会出现错误的
	}
}

interface IMyComponentProps {
	title: string
}

interface IMyComponentState {
	val: number
}

class MyComponent extends Component<IMyComponentProps, IMyComponentProps> {
	constructor(props: IMyComponentProps) {
		super(props)

		this.state = {
			val: 1,
		}
	}

	render() {
		this.props.title
		this.state.val
		return `<div>组件</div>`
	}
}
```

上面的代码虽然从功能上讲没什么太大问题，但是可以看到，父类的 `render` 有点尴尬，其实我们更应该从代码层面上去约束子类必须得有 `render` 方法，否则编码就不能通过

（9）abstract 关键字

如果一个方法没有具体的实现方法，则可以通过 abstract 关键字进行修饰

```tsx
abstract class Component<T1, T2> {
	public state: T2

	constructor(public props: T1) {
		// ...
	}

	public abstract render(): string
}
```

使用抽象类有一个好处：

约定了所以继承子类的所必须实现的方法，使类的设计更加的规范

使用注意事项：

> - abstract 修饰的方法不能有方法体
> - 如果一个类有抽象方法，那么该类也必须为抽象的
> - 如果一个类是抽象的，那么就不能使用 new 进行实例化（因为抽象类表明该类有未实现的方法，所以不允许实例化）

## 类与接口

```
在前面我们已经学习了接口的使用，通过接口，我们可以为对象定义一种结构和契约。我们还可以把接口与类进行结合，通过接口，让类去强制符合某种契约，从某个方面来说，当一个抽象类中只有抽象的时候，它就与接口没有太大区别了，这个时候，我们更推荐通过接口的方式来定义契约
```

- 抽象类编译后还是会产生实体代码，而接口不会
- `TypeScript` 只支持单继承，即一个子类只能有个父类，但是一个类可以实现多个接口
- 接口不能有实现，抽象类可以

（1）implements

在一个类中使用接口并不是使用 `extends` 关键字，而是 `implements`

- 与接口类似，如果一个类 `implements` 了一个接口，那么就必须实现该接口中定义的契约
- 多个接口使用， 分隔
- `implements` 与 `extends` 可同时存在

```typescript
interface ILog {
	getInfo(): string
}

class MyComponent
	extends Component<IMyComponentProps, IMyComponentState>
	implements ILog
{
	constructor(props: IMyComponentProps) {
		super(props)

		this.state = {
			val: 1,
		}
	}

	render() {
		this.props.title
		this.state.val

		return `<div>组件</div>`
	}

	getInfo() {
		return `组件：MyComponent, props: ${this.props}, state: ${this.state}`
	}
}
```

实现多个接口

```typescript
interface ILog {
	getInfo(): string
}

interface IStorage {
	save(data: string): void
}

class MyComponent
	extends Component<IMyComponentProps, IMyComponentState>
	implements ILog, IStorage
{
	constructor(props: IMyComponentProps) {
		super(props)

		this.state = {
			val: 1,
		}
	}

	render() {
		this.props.title
		this.state.val
		return `<div>组件</div>`
	}

	getInfo(): string {
		return `组件：MyComponent, props: ${this.props}, state: ${this.state}`
	}

	save(data, string) {
		// ...存储
	}
}
```

接口也可以继承

```typescript
interface ILog {
	getInfo(): string
}

interface IStorage extends ILog {
	save(data: string): void
}
```

06day

## 类型系统深入

### 类型保护

通常在 `javascript` 中通过判断来处理一些逻辑，在 `TypeScript` 中这种条件语句块还有另外一个特性：根据判断逻辑的结果，缩小类型范围（有点类似断言）, 这种特性称为 `类型保护`，触发条件：

- 逻辑条件语句块：if、else、else if
- 特定的一些关键字：typeof、instanceof、in.......

（1）typeof

我们知道 `typeof` 可以返回某个数据的类型，在 `TypeScript` 在 `if`、`else` 代码块中能够把 `typeof` 识别为类型保护，推断出合适的类型

```typescript
function fn(a: string | number) {
	// error，不能保证 a 就是字符串
	a.substring(1)
	if (typeof a === 'string') {
		// ok
		a.substring(1)
	} else {
		// ok
		a.toFixed(1)
	}
}
```

（2）instanceof

与 `typeof` 类似的，`instanceof` 也可以被 `TypeScript` 识别为类型保护

```typescript
function fn(a: Date | Array<any>) {
	if (a instanceof Array) {
		a.push(1)
	} else {
		a.getFullYear()
	}
}
```

（3）in

`in` 也是如此

```typescript
interface IA {
	x: string
	y: string
}

interface IB {
	a: string
	b: string
}

function fn(arg: IA | IB) {
	if ('x' in arg) {
		// ok
		arg.x
		// error
		arg.a
	} else {
		// ok
		arg.a
		// error
		arg.x
	}
}
```

### 字面量类型保护

如果类型为字面量类型，那么还可以通过该字面量类型的字面值进行推断

```typescript
interface IA {
	type: 'IA'
	x: string
	y: string
}

interface IB {
	type: 'IB'
	a: string
	b: string
}

function fn(arg: IA | IB) {
	if (arg.type === 'IA') {
		// ok
		arg.x
		// error
		arg.a
	} else {
		// ok
		arg.a
		// error
		arg.x
	}
}
```

### 自定义类型保护

有的时候，以上的一些方式并不能满足一些特殊情况，则可以自定义类型保护规则

```typescript
function canEach(data: any): data is Element[] | Nodelist {
	return data.forEach !== undefined
}

function fn2(elements: Element[] | NodeList | Element) {
	if (canEach(elements)) {
		elements.forEach((el: Element) => {
			el.classList.add('box')
		})
	} else {
		elements.classList.add('box')
	}
}
```

`data is Element[] | NodeList` 是一种类型请问。视为：`xx is XX`，返回这种类型的函数就可以被 `TypeScript` 识别为类型保护

### 类型操作

`TypeScript` 提供了一些方式来操作类型这种数据，但是需要注意的是，类型数据只能作为类型来使用，而不能作为程序中的数据，这是两种不同的数据，一个用在编译检测阶段，一个用于程序执行阶段

（1）typeof

在 `TypeScript` 中，`typeof` 有两种作用

- 获取数据的类型
- 捕获数据的类型

```typescript
let str1 = 'lin'

// 如果是 let , 把 string 作为值
let t = typeof str1

// 如果是 type，把 string 作为类型
type myType = typeof str1

let str2: myType = 'li'
let str2: typeof str1 = 'qi'
```

（2）keyof

获取类型的所有 `key` 的集合

```typescript
interface Person {
	name: string
	age: number
}

// 等同：type personKeys = 'name' | 'age'
type personKeys = keyof Person

let p1 = {
	name: 'lin',
	age: 18,
}

function getPersonVal(k: personKeys) {
	return p1[key]
}

/**
 * 等同：
 * function getPersonVal(k: 'name' | 'age') {
 *      return p1[k]
 * }
 */

getPersonVal('name') // 正确
getPersonVal('gender') // 错误
```

（3）in

针对类型进行操作的话，内部使用的 `for in` 对类型进行遍历

```typescript
interface Person {
	name: string
	age: number
}

type personKey = keyof Person
type newPerson = {
	[k in personKeys]: number
}
/**
 * 等同：[k in 'name' | 'age']: number;
 * 也可以写成
 * [k in keyof Person]: number;
 */

type newPerson = {
	name: number
	age: number
}
```

注意：`in` 后面的类型值必须是 `string` 或者 `number` 或者 `symbol`

### 类型兼容

`TypeScript` 的类型系统是基于结构子类型的，它与名义类型（如：java）不同（名义类型的数据类型兼容性或等价性是通过明确的声明或类型的名称来决定的）。这种基于结构子类型的类型系统是基于组成结构的，只要具有相同类型的成员，则两种类型即为兼容的。

```typescript
class Person {
	name: string
	age: number
}

class Cat {
	name: string
	age: number
}

function fn(p: Person) {
	p.name
}

let xiao = new Cat()
// ok 因为 Cat 类型的结构与 Person 类型结构相似，所以它们是兼容的
fn(xiao)
```

## 泛型

### 为什么要使用泛型

许多时候，标注的具体类型并不能确定，比如一个函数的参数类型

```typescript
function getVal(obj, k) {
	return obj[k]
}
```

```
上面的函数，想实现的是获取一个对象指定的 k 所对应的值，那么实际使用的时候，obj的类型是不确定的，自然 k 的取值范围也是不确定的，它需要我们在具体调用的时候才能确定，这个时候这种定义过程不确定类型的需求就可以通过泛型来解决
```

### 泛型的使用 - 函数

```typescript
function getVal<T>(obj: T, k: keyof T) {
	return obj[k]
}
```

所谓的泛型，就是给可变（不定）的类型定义变量（参数），`<>` 类似 `()`

### 泛型类

在面向对象中有讲过一个基于泛型使用的例子：模拟组件

```typescript
abstract class Component<T1, T2> {
	props: T1
	state: T2

	constructor(props: T1) {
		this.props = props
	}

	abstract render(): string
}

interface IMyComponentProps {
	val: number
}

interface IMyComponentState {
	x: number
}

class MyComponent extends Component<IMyComponentProps, IMyComponentState> {
	constructor(props: IMyComponentProps) {
		super(props)

		this.state = {
			x: 1,
		}
	}

	render() {
		this.props.val
		this.state.x
		return `<myComponent />`
	}
}

let myComponent = new MyComponent({ val: 1 })
myComponent.render()
```

### 泛型接口

在接口中使用泛型

后端提供了一些接口，用以返回一些数据，依据返回的数据格式定义如下接口：

```typescript
interface IResponseData {
	code: number
	message?: string
	data: any
}
```

根据接口，我们封装对应的一些方法

```typescript
function getData(url: string) {
	return fetch(url)
		.then((res) => {
			return res.json()
		})
		.then((data: IResponseData) => {
			return data
		})
}
```

但是，会发现该接口的 `data` 项的具体格式不确定，不同的接口会返回的数据是不一样的，当我们想根据具体当前请求的接口返回具体 `data` 格式的时候，就比较麻烦了，因为 `getData` 并不清楚你调用的具体接口是什么，对应的数据又会是什么样的

这个时候我们可以对 `IResponseData` 使用泛型

```typescript
interface IResponseData<T> {
	code: number
	message?: string
	data: T
}
```

```typescript
function getData<U>(url: string) {
	return fetch(url)
		.then((res) => {
			return res.json()
		})
		.then((data: IResponseData<U>) => {
			return data
		})
}
```

定义不同的数据接口

```typescript
// 用户接口
interface IResponseUserData {
	id: number
	username: string
	email: string
}

// 文章接口
interface IResponseArticleData {
	id: number
	title: string
	author: IResponseUserData
}
```

调用具体代码

```typescript
;(async function () {
	let user = await getData<IResponseUserData>('/user')
	if (user.code === 1) {
		console.log(user.message)
	} else {
		console.log(user.data.username)
	}

	let article = await getData<IResponseArticleData>('/article')
	if (article.code === 1) {
		console.log(article.message)
	} else {
		console.log(article.data.id)
		console.log(article.data.author.username)
	}
})()
```

07day

## 模块化

```
模块化是指自上而下把一个复杂问题（功能）划分成若干模块的过程，在编程中就是指通过某种规则对程序（代码）进行分割、组织、打包，每个模块完成一个特定的子功能，再把所有的模块按照某种规则进行组装，合并成一个整体，最终完成整个系统的所有功能
```

从基于 `Node.js` 的服务端 `commonjs` 模块化，到前端基于浏览器的 `AMD`、`CMD` 模块化，再到 `ECMAScript2015` 开始原生内置的模块化，`javascript` 的模块化方案和系统日逐成熟。

`TypeScript` 也是支持模块化的，而且它的出现要比 `ECMAScript` 模块系统标准化要早，所以在 `Typescript` 中既有对 `ECMAScript` 模块系统的支持，也包含有一些自己的特点

### 模块化历程

- CommonJS
- AMD
- UMD
- ESM

无论是那种模块化规范，重点关注：保证模块独立性的同时又能很好的与其它模块进行交互

- 如何定义一个模块与模块内部私有作用域
- 通过何种方式导出模块内部数据
- 通过何种方式导入其他外部模块数据

## 基于服务端、桌面端的模块化

（1）CommonJS

在早期，对于运行在浏览器端的 `JavaScript` 代码，模块化的需求并不那么的强烈，反而是偏向 服务端、桌面端 的应用对模块化有迫切的需求（相对来说，服务端、桌面端程序的代码的需求要复杂一些）。`CommonJS` 规范就是一套偏向服务端的模块化规范，它为非浏览器端的模块化实现定制了一些的方案和标准，`NodeJS` 就采用了这个规范。

- 独立模块作用域

一个文件就是模块，拥有独立的作用域

- 导出模块内部数据

通过 `module.exports` 或 `exports` 对象导出模块内部数据

```javascript
// a.js
let a = 1
let b = 2

module.exports = {
	x: a,
	y: b,
}

// or
exports.x = a
exports.y = b
```

- 导入外部模块数据

通过 `require` 函数导入外部模块数据

```javascript
// b.js
let a = require('./a')
a.x
a.y
```

## 基于浏览器的模块化

（1）AMD

```
因为 CommonJS 规范一些特性（基于文件系统，同步加载），它并不适用于浏览器，所以另外定义了适用于浏览器端的规范
```

`AMD (Asynchronous Module definition)`

[https://github.com/amdjs/amdjs-api/wiki/AMD](https://github.com/amdjs/amdjs-api/wiki/AMD)

浏览器并没有具体实现该规范的代码，可以通过一些第三方库来解决

- requireJS

[https://requirejs.org/](https://requirejs.org/)

```html
1.html
<script
	data-main="js/a"
	src="https://cdn.bootcss.com/require.js/2.3.6/require.min.js"
></script>
```

- 独立模块作用域

通过一个 `define` 方法来定义一个模块，在该方法内部模拟模块独立作用域

```javascript
// b.js
define(function () {
	// 模块内部代码
})
```

- 导出模块内部数据

通过 `return` 导出模块内部数据

```javascript
// b.js
define(function () {
	let a = 1
	let b = 2

	return {
		x: a,
		y: b,
	}
})
```

- 导入外部模块数据

通过前置依赖列表导入外部模块数据

```javascript
// a.js
define(['./b'], function (b) {
	console.log(b)
})
```

**`requireJS` 的 `CommonJS` 风格**

`requireJS` 的 `CommonJS` 风格的语法

- 导出模块内部数据

```javascript
// b.js
define(function (require, exports, module) {
	let a = 1
	let b = 2

	module.exports = {
		x: a,
		y: b,
	}
})
```

- 导入外部模块数据

```javascript
// a.js
define(function (require, exports, module) {
	let b = require('./b')
	console.log(b)
})
```

（2）UMD

严格来说，`UMD` 并不属于一套模块规范，它主要用来处理 `CommonJS`、`ADM`、`CMD` 的差异兼容，是模块代码能在前面不同的模块环境下都能正常运行。随着 `Node.js` 的流行，前端和后端都可以基于 `JavaScript` 来进行开发，这个时候或多或少的会出现前后端使用相同代码的可能，特别是一些不依赖宿主环境（浏览器、服务器）的偏低层的代码。我们能实现一套代码多端适用（同构），其中在不同的模块化标准下使用也是需要解决问题，`UMD` 就是一种解决方式

```javascript
;(function (root, fectory) {
	if (typeof module === 'object' && typeof module.exports === 'object') {
		// Node, CommonJS-like
		module.exports = fectory()
	} else if (typeof define === 'function' && define.amd) {
		// AMD 模块环境下
		define(factory)
	} else {
		// 不能使用任何模块系统，直接挂在到全局
		root.lin = factory()
	}
})(this, function () {
	let a = 1
	let b = 2

	// 模块导出数据
	return {
		x: a,
		y: b,
	}
})
```

## 模块化的大同世界

（1）ESM

从 `ECMAScript2015/ECMAScript6` 开始，`JavaScript` 原生引入了模块概念，而且现在主流浏览器也都有了很好的支持，同时在 `Node.js` 也有了支持，所以未来基于 `JavaScript` 的程序无论是在前端浏览器还是在后端 `Node.js` 中，都会逐渐的被统一

- 独立模块作用域

一个文件就是模块，拥有独立的作用域，且导出的模块都自动处于 `严格模式` 下，即：`use strict`

`script` 标签需要声明 `type = 'module'`

- 导出模块内部数据

导出 `export` 语句导出模块内部数据

```javascript
// 导出单个特性
export let name1, name2, _, nameN;
export let name1 = _, name2 = _, _, nameN;
export function FunctionName() {...}
export class ClassName {...}

// 导出列表
export { name1, name2, _, nameN };

// 重命名导出
export { variable1 as name1, variable2 as name2, _, nameN }

// 默认导出
export default expression;
export default function() {..}
export default function  name1() {..}
export { name1 as default, _ }

// 模块重定向导出
export * from ...;
export { name1, name2, _, nameN } from _;
export { import1 as name1, import2 as name2, _, nameN } from ...;
export { default } from _;
```

- 导入外部模块数据

导入分为两种模式

- 静态导入
- 动态导入

1、静态导入

使用 `import` 语句导入模块，这种方式称为：`静态导入`

静态导入方式不支持延迟加载，`import` 必须在模块的最开始

```javascript
import defaultExport from 'module-name';
import * as name from 'module-name';
import { export } from 'module-name';
import { export as alias } from 'module-name';
import { export1, export2 } from 'module-name';
import { foo, bar } from 'module-name/path/to/specific/un-exported/file';
import { export1, export2 as alias2, [...] } from 'module-name';
import defaultExport, { export [, [...]] } from 'module-name';
```

```javascript
document.onclick = function () {
	// import 必须放置在当前模块最开始加载
	// import a from './a.js'
	// console.log(m);
}
```

2、动态导入

此外，还有一个类似函数的动态 `import()`，它不需要依赖 `type='module'` 的 script 标签

关键字 `import` 可以像调用函数一样来动态的导入模块。以这种方式调用，将返回一个 `promise`

```javascript
import('./a.js').then((a) => {
	//...
})

// 也支持await
let m = await import('./a.js')
```

> 通过 `import()` 方法导入返回的数据会被包装在一个对象中，即使是 `default` 也是如此

（2）TypeScript 中的模块化

`TypeScript` 也支持模块化，而且它的出现比 `ESM` 还要早，`Typescript` 的模块化实现也有一些地方与上述其他一些模块化系统有所差异，但是随着 `Typescript` 的更新，同时 `ESM` 标准本身也越来越成熟，所以当下和未来 `Typescript` 的模块化也会与 `ESM` 越来越接近

## TypeScript 模块系统

虽然早期的时候，`TypeScript` 有一套自己的模块系统实现，但是随着更新，以及 `JavaScript` 模块化的日渐成熟，`TypeScript` 对 `ESM` 模块系统的支持也是越来越完善

### 模块

无论是 `JavaScript` 还是 `TypeScript` 都是以一个文件作为模块最小单元

- 任何一个包含了顶级 `import` 或者 `export` 的文件都被当成一个模块
- 相反的一个文件不带有顶级的 `import` 或者 `export`，那么它的内容就是全局可见的

### 全局模块

如果一个文件中没有顶级 `import` 或者 `export`，那么它的内容就是全局的，整个项目可见的

```typescript
// a.ts
let a1 = 100
let a2 = 200
```

```typescript
// b.ts
// ok, 100
console.log(a1);
// error
lel a2 = 300;
```

> 不推荐使用全局模块，因为它会容易造成代码命名冲突（全局变量污染）

### 文件模块

任何一个包含了顶级 `import` 或者 `export` 的文件都会当做一个模块，在 `TypeScript` 中也称为外部模块。

### 模块语法

`TypeScript` 与 `ESM` 语法类似

### 导出模块内部数据

使用 `export` 导出模块内部数据（变量、函数、类、类型别名、接口.....）

### 导入外部模块数据

使用 `import` 导入外部模块数据

### 模块编译

`TypeScript` 编译器也能够根据相应的编译参数，把代码编译成指定的模块系统使用的代码

（1）`module` 选项

在 `TypeScript` 编译选项中，`module` 选项是用来指定生成哪个模块系统的代码，可设置的值有：`none`、`commonjs`、`amd`、`umd`、`es6 / es2015 / esnext`、`System`

- `target == "es3" or "es5"` ：默认使用 `commonjs`
- 其他情况，默认 `es6`

### 模块导出默认值的问题

如果一个模块没有默认导出

```typescript
// a1.ts
export let obj = {
	x: 1,
}
```

则在引入该模块的时候，需要使用下列一些方式来导入

```typescript
// main.ts
// error: 提示 m1 模块没有默认导出
import v from 'a1.'

// 可以简单的使用如下方式
import { obj } from './a1'
console.log(obj.x)
// or
import * as m1 from './m1'
console.log(m1.obj.x)
```

### 加载非 `TS` 文件

有的时候，我们需要引入一些 `js` 的模块，比如导入一些第三方的使用 `js` 而非 `ts` 编写的模块，默认情况下 `tsc` 是不对非 `ts` 模块文件进行处理的

我们可以通过 `allowJS` 选项开始该特性

```ts
// a.js
export default 100
// main.ts
import a from './a.js'
```

### 非 `ESM` 模块中的默认值问题

在 `ESM` 中模块可以设置默认导出值

```typescript
export default 'lin'
```

但是在 `CommonJS`、`AMD` 中是没有默认值设置的，它们导出的是一个对象 {`exports`}

```typescript
module.exports.obj = {
	x: 1000,
}
```

在 `TypeScript` 中导入这种模块的时候会出现 `模块没有默认导出的错误提示`。

简单一些的做法：

```typescript
import * as a from './a.js'
```

通过配置选项解决：

allowSyntheticDefaultImports

设置为：`true`，允许从没有设置默认导出的模块中默认导入。
这并不影响代码的输出，仅仅只是为了类型检查。

虽然通过上面的方式可以解决编译过程中的检测问题，但是编译后的具体要运行代码还是有问题的。

esModuleInterop

设置为：`true`，则在编译的同时生成一个 `__importDefault` 函数，用来处理具体的 `default` 默认导出

> 注意：以上设置只能当 `module` 不为 `es6+` 的情况喜爱有效

### 以模块的方式加载 JSON 格式的文件

`TypeScript 2.9+` 版本添加了一个新的编译选项：`resolveJsonModule`，它允许我们把 `JSON` 文件作为模块进行加载

resolveJSONModule

设置为：`true`，可以把 `json` 文件作为一个模块进行解析

**moduleResolution**

模块解析策略

- 当 `module` 为 `AMD` 或者 `System` 或者 `ES6` 时，默认为 `classic` 模式
- 其它情况默认为 `node` 模式

`resolveJsonModule` 设置为 `true` 的时候，`moduleResolution` 必须为 `node`

**data.json**

```json
{
	"name": "lin",
	"age": 18,
	"gender": "男"
}
```

**ts 文件**

```typescript
import * as userData from './data.json'
console.log(userData)
```

## 命名空间

在 `TS` 中，`export` 和 `import` 称为外部模块，`TS` 中还支持一种内部模块 `namespace`，它的主要作用只是单纯的在文件内部（模块内容）隔离作用域

```typescript
namespace k1 {
	let a = 10
	export var obj = {
		a,
	}
}

namespace k2 {
	let a = 20
	console.log(k1.obj)
}
```

## 模块解析策略

### 什么是模块解析

模块解析是指编译器在查找导入模块内容时所遵循的流程。

### 相对与非相对模块导入

（1）相对导入

相对导入是以 `/`、`./` 或 `../` 开头的引用

```typescript
// 导入根目录下的 a1 模块文件
import m1 from '/m1'
// 导入当前目录下的 mods 目录下的 a2 模块文件
import a2 from './mods/a2'
// 导入上级目录下的 a3 模块文件
import a3 from '../a3'
```

（2）非相对导入

所有其它形式的导入被当作非相对的

```typescript
import a1 from 'a1'
```

### 模块解析策略

为了兼容不同的模块系统（`CommonJS`、`ESM`），`TypeScript` 支持两种不同的模块解析策略：`Node`、`Classic`，当 `--module` 选项为：`AMD`、`System`、`ES2015` 的时候，默认为 `Calssic`，其它情况为 `Node`

- --moduleResolution 选项

除了根据 `--module` 选项自动选择默认模块系统类型，我们还可以通过 `--moduleResolution` 选项来手动指定解析策略

```typescript
// tsconfig.json
{
    ...,
    "moduleResolution": "node"
}
```

### Classic 模块解析策略

该策略是 `TypeScript` 以前的默认解析策略，它已经被新的 `Node` 策略所取代，现在使用该策略主要是为了向后兼容

（1）相对导入

```typescript
// /src/a1/a.ts
import b from './b.ts'
```

解析查找流程：

1. src/a1/b.ts

- 默认后缀补全

```typescript
// /src/a1/a.ts
import a from './b'
```

解析查找流程：

1. /src/a1/b.ts

2. /src/a1/b.d.ts

（2）非相对导入

```typescript
// /src/a1/a.ts
import b from 'b'
```

对于非相对模块的导入，则会从包含导入文件的目录开始依次向上级目录遍历查找，直到根目录为止

```
1. /src/a1/b.ts
2. /src/a1/b.d.ts
3. /src/b.ts
4. /src/b.d.ts
5. b.ts
6. /b.d.ts
```

### Node 模块解析策略

该解析策略是参照了 `Node.js` 的模块解析机制

（1）相对导入

```typescript
// node.js
// /src/a1/a.js
import b from './b'
```

在 `Classic` 中，模块只会按照单个的文件进行查找，但是在 `Nodoe.js` 中，会首先安装单个文件进行查找，如果不存在，则会按照目录进行查找

```
1. /src/a1/b.js
2. /src/a1/b/package.json 中 main 中指定的文件
3. /src/a1/b/index.js
```

（2）非相对导入

```typescript
// node.js
// /src/a1/a.js
import b from 'b'
```

对于非相对导入模块，解析是很特殊的，`Node.js` 会这一个特殊文件夹 `node_modules` 里查找，并且在查找过程中从当前目录的 `node_modules` 目录下逐级向上级文件进行查找

```
1. /src/a1/node_modules/b.js
2. /src/a1/node_modules/b/package.json 中 'main' 中指定的文件
3. /src/a1/node_modules/b/index.js
4. /src/node_modules/b.js
5. /src/node_modules/b/package.json 中 'main' 中指定的文件
6. /src/node_modules/b/index.js
7. /node_modules/b.js
8. /node_modules/b/package.json 中 'main' 中指定的文件
9. /node_modules/b/index.js
```

### TypeScript 模块解析策略

`TypeScript` 现在使用了与 `Node.js` 类似的模块解析策略，但是 `TypeScript` 增加了其它几个源文件扩展名的查找（`.ts`、`.tsx`、`.d.ts`），同时 `TypeScript` 在 `package.json` 里使用字段 `type` 来表示 `main` 的意义

## 装饰器学习

### 什么是装饰器

`装饰器-Decorators` 在 `TypeScript` 中是一种可以在不修改类代码的基础上通过添加标注的方式来对类型进行扩展的一种方式

- 减少代码量
- 提高代码扩展性、可读性和维护下

> 在 `TypeScript` 中，装饰器只能在类中使用

### 装饰器语法

装饰器的使用及其简单

- 装饰器本质就是一个函数
- 通过特定语法在特定的位置调用装饰器函数即可对数据（类、方法、甚至参数等）进行扩展

（1）启用装饰器特性

- `experimentalDecorators: true`

```typescript
// 装饰器函数
functon log(target: Function, type: stirng, descriptor: PropertyDescriptor) {
    let value = descriptor.value;

    descriptor.value = function(a: number, b: number) {
        let result = value(a, b);
        console.log(`日志`, {
            type,
            a,
            b,
            result
        })
        return result;
    }
}

// 原始类
class M {
    @log
    static add(a: number, b: number) {
        return a + b;
    }
    @log
    static sub(a: number, b: number) {
        return a -b;
    }
}

let v1 = M.add(1, 2);
console.log(v1);
let v2 = M.sub(1, 2);
console.log(v2);
```

### 装饰器

`装饰器` 是一个函数，它可以通过 `@装饰器函数` 这种特殊的语法附加在 `类`、`方法`、`访问符`、`属性`、`参数` 上，对它们进行包装，然后返回一个包装后的目标对象（`类`、`方法`、`访问符`、`属性`、`参数`），装饰器工作在类的构建阶段，而不是使用阶段

```typescript
function 装饰器1() {}
...

@装饰器1
class Myclass {

    @装饰器2
    a: number

    @装饰器3
    static property1: number

    @装饰器4
    get b() {
        return 1;
    }

    @装饰器5
    static get c() {
        return 2;
    }

    @装饰器6
    public method1(@装饰器5 x: number) {
        // ...
    }

    @装饰器7
    public method2() {
        // ...
    }
}
```

### 类装饰器

目标

- 应用于类的构造函数

参数

- 第一个参数（也只有一个参数）
  - 类的构造函数作为其唯一的参数

### 方法装饰器

目标

- 应用于类的方法上

参数

- 第一个参数

  - 静态方法：类的构造函数
  - 实例方法：类的原型对象

- 第二个参数

  - 方法名称

- 第三个参数
  - 方法描述符对象

### 属性装饰器

目标

- 应用于类的属性上面

参数

- 第一个参数

  - 静态方法：类的构造函数
  - 实例方法：类的原型对象

- 第二个参数

  - 属性名称

- 第三个参数
  - 方法描述符对象

### 访问装饰器

目标

- 应用于类的访问器（getter、setter）上

参数

- 第一个参数

  - 静态方法：类的构造函数
  - 实例方法：类的原型对象

- 第二个参数
  - 方法描述符对象

### 参数装饰器

目标

- 应用在参数上

参数

- 第一个参数

  - 静态方法：类的构造函数
  - 实例方法：类的原型对象

- 第二个参数

  - 方法名称

- 第三个参数
  - 参数在函数参数列表中的索引

### 装饰器执行顺序

- 实例装饰器

属性 -> 访问符 -> 参数 -> 方法

- 静态装饰器

属性 -> 访问符 -> 参数 -> 方法

- 类

类

## 装饰器工厂

如果我们需要给装饰器执行过程中传入一些参数的时候，就可以使用装饰器工厂来实现

```typescript
// 装饰器函数
function log(callback: Function) {
	return function (
		target: Function,
		type: string,
		descript: PropertyDescriptor,
	) {
		let value = descript.value

		doscript.value = function (a: string, b: number) {
			let result = value(a, b)
			callback({
				type,
				a,
				b,
				result,
			})
			return result
		}
	}
}

// 原始类
class M {
	@log(function (result: any) {
		console.log('日志', result)
	})
	static add(a: number, b: number) {
		return a + b
	}
	@log(function (result: any) {
		localStorage.setItem('log', JSON.stringify(result))
	})
	static sub(a: number, b: number) {
		return a - b
	}
}

let v1 = M.add(1, 2)
console.log(v1)
let v1 = M.sub(1, 2)
console.log(v2)
```

## 元数据

在 `修饰符` 函数中，我们可以拿到 `类`、`方法`、`访问符`、`属性`、`参数` 的基本信息，如它们的名称，描述符 等，但是我们想获取更多信息就需要通过另外的方式进行：`元数据`

**什么事元数据？**

`元数据` : 用来描述数据的数据，在我们的程序中，`对象`、`类` 等都是数据，它们描述了某种数据，另外还有一种数据，它可以用来描述 `对象`、`类`，这些用来描述的数据就是 `元数据`

> 比如一首歌曲本身就是一组数据，同时还有一组用来描述歌曲的歌手、格式、时长的数据，那么这组数据就是歌曲数据的元数据

### 使用 `reflect-metadata`

[https://www.npmjs.com/package/reflect-metadata](https://www.npmjs.com/package/reflect-metadata])

首先，需要安装 `reflect-metadata`

```bash
npm install reflect-metadata
```

### 定义元数据

我们可以 `类`、`方法` 等数据定义元数据

- 元数据会被附加到指定的 `类`、`方法` 等数据之上，但是又不会影响 `类`、`方法` 本身的代码

设置 `Reflect.defineMetadata(metadataKey, metadataValue, target, propertyKey)`

- metadataKey: meta 数据的 key
- metadataValue: meta 数据的 值
- target: meta 数据附加的目标
- propertyKey: 对应的 property Key

调用方式

- 通过 `Reflect.defineMetadata` 方法调用来添加 元数据
- 通过 `@Reflect.metadata` 装饰器来添加 元数据

```typescript
import 'reflect-metadata'

@Reflect.metadata('n', 1)
class A {
	@Reflect.metadata('n', 2)
	public static method1() {}

	@Reflect.metadata('n', 4)
	public method2() {}
}

// or
Reflect.defineMetadata('n', 1, A)
Reflect.defineMetadata('n', 2, 'method1')

let obj = new A()
Reflect.defineMetadata('n', 3, obj)
Reflect.defineMetadata('n', 3, obj, 'method2')

console.log(Reflect.getMetadata('n', A))
console.log(Reflect.getMetadata('n', A))
```

获取

`Reflect.getMetadata(metadataKey, target, propertyKey)`

参数的含义与 `defineMetadata` 对应

### 使用元数据的 log 装饰器

```typescript
import 'reflect-metadata'

function L(type = 'log') {
	return function (target: any) {
		Reflect.defineMetadata('type', type, target)
	}
}

// 装饰器函数
function log(callback: Function) {
	return function (target: any, name: string, descriptor: PropertyDescript) {
		let value = descriptor.value

		let type = Reflect.getMetadata('type', target)

		descriptor.value = function (a: number, b: number) {
			let result = value(a, b)
			if (type === 'log') {
				console.log('日志', {
					name,
					a,
					b,
					result,
				})
			}

			if (type === 'storage') {
				localStorage.setItem(
					'storageLog',
					JSON.stringify({
						name,
						a,
						b,
						result,
					}),
				)
			}

			return result
		}
	}
}

// 原始类
class M {
	@log
	static add(a: number, b: number) {
		return a + b
	}
	@log
	static sub(a: number, b: number) {
		return a - b
	}
}

let v1 = M.add(1, 2)
console.log(v1)
let v2 = M.sub(1, 2)
console.log(v2)
```
