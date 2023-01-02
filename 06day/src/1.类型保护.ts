// function fn(a: string | number) {

    
//     // 这里的 a 变量不一定是字符串类型，所以ts会报错，不能直接作为字符串去使用，有风险
//     // a.substring(1, 2);    
    
//    // 类型断言
// //    (<string> a).substring(1);


//     if (typeof a === 'string')  {
//         a.substring(1);
//     } else {
//         a.toFixed(2);
//     }
    
// }



// 自定义类型保护
function canEach(data: any): data is Element[] | NodeList {
    return data.forEach !== undefined;
}

function fn2(elements: Element[] | NodeList | Element) {

    if ( canEach(elements) ) {
        elements.forEach( (element: Element) => {
            element.className = 'box';
        })
    } else {
        elements.className = 'box'
    }
}


















