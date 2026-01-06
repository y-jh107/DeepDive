// "use strict"

// function sum(a, b) {
//     "use strict"
//     return a + b;
// }

// class Cat {

// }

// 'use strict'

// let greeting = 'hello';

// geating = 'hi' // 엄격한 모드에서는 선언하지 않은 변수는 에러로 판단
// undefined = 8;
// NaN = 10; // undefined나 NaN같은 예약어에 값을 할당하면 에러로 판단

// console.log(greeting);
// console.log(greeting, window.greating);

// const obj = {
//     get readOnly() {
//         return 7;
//     }
// };

// Object.defineProperty(obj, "readOnly", {
//     writable: false, value: 7
// })

// console.log(obj.readOnly);

// obj.readOnly = 10;

// console.log(obj.readOnly);

// function add(a, a, b) {
//     return a + a + b;
// } // 동일한 이름의 파라미터는 에러로 판단

// console.log(add(1, 2, 3));

// "string".prop = 7; // string에 속성을 넣을 수 없으므로 에러
// console.log("string".prop);

function sum(a, b) {
    console.log(this); // 함수 안의 this는 strict mode에서 undefined
    return a + b;
}

console.log(this);
sum.bind(this)(1, 2); // window 객체를 bind 해주기