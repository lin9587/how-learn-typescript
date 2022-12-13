# 7dayTypeScript
one week to learn typescript

## 01day  TypeScript初体验-环境搭建与编译执行

#### 环境搭建
---
`TypeScript` 编写的程序并不能直接通过浏览器运行，我们需要先通过 `TypeScript` 编译器把 `TypeScript` 代码编译成 `JavaScript`

`TypeScript` 的编译器是基于 `Node.js` 的，所以我们需要先安装 `Node.js`
### 安装 `Node.js`
[alt text](https://nodejs.org)
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
### 编写代码
---
代码编辑器 - vocode
`vscode` 和 `Typescript` 都是微软的产品，`vs code` 本身就是基于 `TypeScript` 进行开发的，`vs code` 对 `TypeScript` 有着天然的友好的支持
[alt text](https://code.visualstudio.com/)
`TypeScript` 默认情况下，`TypeScript` 的文件的后缀为 `.ts`
```javascript
// ./src/hellots.ts
let str: string = 'lin'
```
### 编译执行
使用我们安装的 `TypeScript` 编译器 `tsc` 对 `.ts` 文件进行编译
```javascript
tsc ./src/hellots.ts
```
默认情况下会在当前文件所在目录下生成同名的js文件
### 一些有用的编译选项
编译命令 `tsc` 还支持许多编译选项，这里是几个较为常用的
#### --outDir
指定编译文件输出目录
```javascript
tsc --outDir ./dist ./src/hellots.ts
```
#### --target
指定编译的代码版本目标，默认为 `ES3`
```javascript
tsc --ourDir ./dist --target ES6 ./src/hellots.ts
```
#### --watch
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
















### 02day
> 类型系统


### 03day
> 高级类型与接口

### 04day
> 函数详情

