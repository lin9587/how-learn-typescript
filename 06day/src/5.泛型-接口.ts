interface IResponseData {
    code: number;
    message?: string;
    data: any;
}

// function getData(url: string) {
//     return fetch(url).then((response) => {
//         return response.json();
//     }).then( res => {
//         return res
//     })
// }

