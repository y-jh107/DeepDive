// let color = "skyblue";
// color = "yellow";
// console.log(color);

// let isCatOrDog; // 카멜 표기법(첫 단어를 제외한 나머지 단어의 시작을 대문자로)

// let nowType = "안녕하세요";

// console.log(typeof nowType);

// nowType = 100;

// console.log(typeof nowType);

// const color = "skyblue";
// color = "yellow";

// let number = 123;
// number = "123"; // 원시 타입

// let array = [1, "2", 3]; // 비원시 타입

// let number = 25;
// number = 10.00123;
// number = Infinity;
// number = NaN;

// let number1 = 10;
// console.log(number1 / 0);

// let number2 = 10;
// console.log("자바스크립트" / number2); // NaN

// let name1 = "jinhyuk";
// let name2 = "jinhyuk";
// let name3 = `jinhyuk`;

// let name = "jinhyuk";
// let intro = `제 이름은 ${name}입니다.`; // template literal

// console.log(intro);

// let isClicked = false;
// let isOpen = true;

// if (isClicked) {
//   console.log("클릭O");
// } else {
//   console.log("클릭X");
// }

// let name4 = null;
// let name5;

// console.log(name5);

// let num1 = 10;
// let num2 = 5;

// console.log(num1 / num2); // 묵시적 형변환
// console.log(num1 + num2);
// console.log(parseInt(num1) + num2); // 명시적 형변환

// console.log(num1 + num2);
// console.log(num1 - num2);
// console.log(num1 * num2);
// console.log(num1 / num2);

// console.log(num1 % 2);
// console.log(num2 % 2);

// let num = 10;

// console.log(num++); // 후위연산 -> 10
// console.log(num); // 현재 num 값 -> 11
// console.log(++num); // 전위연산 -> 12

// let num2 = 10;

// console.log(num2--); // 후위연산 -> 10
// console.log(num2); // 현재 num 값 -> 9
// console.log(--num2); // 전위연산 -> 8

// let num1 = 10;
// let num2 = "10";

// console.log(num1 === num2); // type 검사
// console.log(num1 == num2); // 값만 검사

// let num;
// num = num ?? 20; // null병합 연산자, undefined나 null이면 20 대입

// console.log(num);

// let num3 = 100;

// console.log(num3 % 2 === 0 ? "짝수" : "홀수");

// let num = 5;

// if (num === 10) {
//   console.log(`num의 값은 10입니다. `);
// } else {
//   console.log(`num의 값은 ${num}입니다.`);
// }

// if (num === 10) {
//   console.log(`num의 값은 10입니다. `);
// } else if (num < 10) {
//   console.log(`num의 값은 10보다 작습니다.`);
// } else {
//   console.lof("num의 값은 10보다 큽니다.");
// }

// let fruit = "apple";

// switch (fruit) {
//   case "banana":
//     console.log("바나나");
//     break;
//   case "orange":
//     console.log("오렌지");
//     break;
//   case "apple":
//     console.log("사과");
//     break;
//   case "grape":
//     console.log("포도");
//     break;
//   default:
//     console.log("다른 과일");
// }

// let num1 = 10;
// let num2 = 15;
// let sum = num1 + num2;

// console.log(sum);

// function add(num1, num2) {
//   console.log(num1 + num2);
// }

// add(10, 15);

// function add(num1, num2) {
//   return num1 + num2;
//   console.log("함수 호출"); // return문 아래에 작성된 코드는 실행되지 않음
// }

// console.log(`두 숫자를 더한 결과는 ${add(10, 15)}입니다.`);

// function func(num) {
//   if (num > 0) {
//     if (num >= 10) {
//       console.log("num의 값이 10보다 크거나 같습니다.");
//     } else {
//       console.log("num의 값이 0보다 크고 10보다 작습니다.");
//     }
//   } else if (num === 0) {
//     console.log("num의 값이 0입니다.");
//   } else {
//     console.log("num의 값이 0보다 작습니다.");
//   }
// }

// func(15);

// function func(num) {
//   if (num === 0) return "num의 값이 0입니다.";
//   if (num < 0) return "num의 값이 0보다 작습니다.";
//   if (num >= 10) return "num의 값이 10보다 크거나 같습니다.";
//   return "num의 값이 0보다 크고 10보다 작습니다";
// }

// console.log(func(15));

// (function () {
//   console.log("자바스크립트");
// })();

// function add(num1, num2) {
//   let sum = num1 + num2;
//   return sum;
// }

// add(10, 15);
// console.log(sum); // error

// let sum = 0;

// function add(num1, num2) {
//   sum = num1 + num2;
// }

// add(10, 15);
// console.log(sum); //25

// const num = 10; //전역 스코프

// function print() {
//   const num = 100; //지역 스코프
//   console.log(`지역 스코프 ${num}`);
// }

// print();
// console.log(`전역 스코프 ${num}`);

// function print() {
//   for (let i = 0; i < 10; i++) {
//     console.log(`블록 스코프 : ${i}`);
//   }
//   console.log(i); //ERROR
// }

// print();

function print() {
  for (var i = 0; i < 10; i++) {
    console.log(`블록 스코프 : ${i}`);
  }
  console.log(i);
} // var는 함수 스코프이기 때문에 에러가 발생하지 않음

print();
