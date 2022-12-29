// function css(el: HTMLElement, attr: 'display' | 'opacity', value: 'block' | 'none' | number) {
//     // ...
// }



function css(el: HTMLElement, attr: 'display', value: 'block' | 'none'); 
function css(el: HTMLElement, attr: 'opacity', value: number); 
function css(el: HTMLElement, attr: any, value: any) {
    // ... 
} 


let div = document.querySelector('div');

if(div) {

    css( div, 'display', 'block' );
    css( div, 'display', 'none' );
    css( div, 'opacity', 1 );
    // error
    // css( div, 'opacity', 'block' );


}














