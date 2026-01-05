// function outerFunction(outerVariable) {
//     return function innerFuction(innerVariable) {
//         console.log('Outer fuction: ' + outerVariable);
//         console.log('Inner fuction: ' + innerVariable);
//     }
// }

// const newFunction = outerFunction('outside');
// newFunction('inside');
// console.log('New function: ' + newFunction);

let a = 'a';

// function functionB() {
//     let c = 'c';
//     console.log(a, b, c);
// } => b 변수는 접근이 불가한 방법

function functionA() {
    let b = 'b';
    function functionB() {
        let c = 'c';
        console.log(a, b, c);
    } // closure를 이용하여 b 변수에도 접근이 가능해짐
    functionB();
}

functionA();