// var greeting = 'hello';
// console.log(greeting);

// var greeting = 'hi';
// console.log(greeting);

// greeting = 'how are you?'
// console.log(greeting);  // 선언과 할당이 자유롭게 가능

// 중복 선언 불가, 재할당 가능
// let greeting = 'hello';
// console.log(greeting);

// //let greeting = 'hi';

// greeting = 'how are you?';
// console.log(greeting);

// 중복 선언, 재할당 모두 불가
// const greeting = 'hello';
// console.log(greeting);

// greeting = 'hi';
// console.log(greeting);

// var 함수 레벨 스코프
// function func() {
//     if(true) {
//         var a = 'a';
//         console.log(a);
//     }

//     console.log(a);
// }

// let, const 블록 레벨 스코프
// function func() {
//     if (true) {
//         let a = 'a';
//         console.log(a);
//     }
//     console.log(a);
// }

// func();

// console.log(greeting);
// var greeting = 'hello'; // undefined
// let greeting = 'hello'; // error

func();

function func() {
    console.log('hoisting test');
}