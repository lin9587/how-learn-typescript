function d1(target: Function) {
	console.log(`----target--->: ${target}`, typeof target)
}
function d11(target: Function) {
	console.log(`----target--->: ${target}`, typeof target, '11')
}
function d2(target: any, name: string) {
	console.log(typeof target, name)
}
function d3(target: any, name: string, descript: PropertyDescriptor) {
	console.log(typeof target, name, descript)
}
function d4(target: any, name: string, descript: PropertyDescriptor) {
	console.log(typeof target, name, descript)
}
function d5(target: any, name: string, index: number) {
	// name: 当前参数所在的方法
	console.log(typeof target, name, index)
}

@d1
@d11
class MyClass {
	@d2
	a: number

	@d2
	static property1: number

	@d3
	get b() {
		return 1
	}

	@d3
	static get c() {
		return 2
	}

	@d4
	public method(@d5 x: number, @d5 y: number) {}

	@d4
	public static method2() {}
}
