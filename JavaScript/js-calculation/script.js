const num1 = 20;
const num2 = 10;

let val;

// 간단한 연산
val = num1 + num2;
val = num1 * num2;
val = num1 - num2;
val = num1 / num2;
val = num1 % num2;

// Math Object
val = Math.E;
val = Math.PI;
val = Math.round(2.4); // 2 반올림
val = Math.ceil(2.4); // 3 올림
val = Math.floor(2.8); // 2 내림
val = Math.abs(-2) // 2 절댓값
val = Math.min(2,3,4,5,6,7,-1); // -1
val = Math.max(2,3,4,5,6,7,-1); // 7
val = Math.random(); // 0~1 사이의 랜덤 값

// 1~20
val = Math.floor(Math.random() * 20 + 1);

console.log(val);