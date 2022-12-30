class User {

    constructor(
        // 可以访问，但是一旦确定不能修改
        readonly id: number,
        // 可以访问，但是不能外部修改
        protected username: string,
        // 外部包括子类不能访问，也不可修改
        private password: string

    ) {
        // ...
    }

    method1() {
        this.username;
        this.password;
    }
}

class VIP extends User {

    method2() {
        this.username;
        // this.password;
    }
}


let user1 = new User(1, 'lin', '123');





