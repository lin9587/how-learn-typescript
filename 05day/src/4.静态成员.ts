
// type IAllowFileTypeList = 'png' | 'gif' | 'jpg' | 'jpeg' | 'webp';

// class User {

//     static readonly ALLOW_FILE_TYPE_LIST: Array<IAllowFileTypeList> = ['png', 'gif', 'jpg', 'jpeg', 'webp'];

//     constructor(
//         public id: number,
//         public username: string,
//         private _allowFileTypes: Array<IAllowFileTypeList>
//     ) {
//         // super(id, username);
//     }

//     static info(): void {
//         // 类的静态成员都是使用 类名.静态成员 来访问
//         // User 这种类型的用户允许上传的所有类型哪一些
//         console.log(User.ALLOW_FILE_TYPE_LIST);
//         // 当前这个 User 用户允许上传的类型有哪一些
//         // console.log(this._allowFileTypes);
//     }
// }

// let user1 = new User(1, 'lin', ['png', 'gif']);
// User.ALLOW_FILE_TYPE_LIST;
// User.info();