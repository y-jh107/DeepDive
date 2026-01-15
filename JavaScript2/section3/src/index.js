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

// function print() {
//   for (var i = 0; i < 10; i++) {
//     console.log(`블록 스코프 : ${i}`);
//   }
//   console.log(i);
// } // var는 함수 스코프이기 때문에 에러가 발생하지 않음

// print();

// print();

// function print() {
//   console.log("hello world");
// }

// console.log(num); // undefined

// var num = 10;

// console.log(num1); // error

// let num1 = 10;

// console.log(num2); // error

// const num2 = 15;

// print(); // hello world

// function print() {
//     console.log("hello world");
// }

// print(); //print is not a function

// let print = function () {
//   console.log("hello world");
// };

// function start(name, callback) {
//   console.log(`안녕하세요 ${name} 입니다.`);
//   callback(); // finish();
// }

// function finish() {
//   console.log("감사합니다.");
// }

// start("jinhyuk", finish);

// const person = {
//   name: "홍길동",
//   age: 20,
//   pet: "cat",
// };

// const getValue = (key) => {
//   console.log(person[key]);
// };

// getValue("name");

// person.phone = "010-1234-5678";
// person["height"] = 180;

// console.log(person);

// person.age = 25;
// person["pet"] = "dog";

// console.log(person);

// delete person.pet;
// delete person["age"];

// console.log(person);
// console.log(person.name);
// console.log(person.age);
// console.log(person.pet);
// console.log(person["name"]);

// const person = {
//   name: "홍길동",
//   age: 20,
//   pet: "cat",
//   print: function () {
//     console.log(`제 이름은 ${this.name} 입니다.`);
//   },
// };

// person.print();
// person["print"]();

// let array1 = new Array(1, 2, 3); // 배열에 들어갈 것들을 정해주기
// let array2 = new Array(3); // 배열의 크기를 정해주기

// console.log(array1);
// console.log(array2);

// let array1 = [1, 2, 3];
// let array2 = [3];

// console.log(array1);
// console.log(array2);

// let arr = [
//   { name: "홍길동" },
//   1,
//   "array",
//   function () {
//     console.log("hello world!");
//   },
//   null,
//   undefined,
// ];

// const arr = [1, "hello", null];

// arr.push(4);
// arr.unshift(0);
// arr[0] = 5;
// arr[2] = undefined;
// arr.pop();
// arr.shift();

// arr.pop();
// console.log(arr.length);

// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);

// ----------- 배열

// for (let i = 1; i < 6; i++) {
//   console.log(i);
// }

// for (let i = 5; i > 0; i--) {
//   console.log(i);
// }

// let i = 1;
// while (i < 6) {
//   console.log(i);
//   i++;
// }

// let arr = [1, 2, 3, 4, 5];

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// let person = {
//   name: "홍길동",
//   age: 25,
//   height: 180,
// };

// let newArray = Object.keys(person);

// for (let i = 0; i < newArray.length; i++) {
//   let nowKey = newArray[i]; // key
//   console.log(`key: ${nowKey}, value: ${person[nowKey]}`);
// }

// console.log(Object.keys(person));

// let newArray = Object.values(person);

// for (let i = 0; i < newArray.length; i++) {
//   console.log(`value: ${newArray[i]}`);
// }
// console.log(Object.values(person));

// let newArray = Object.entries(person);

// for (let i = 0; i < newArray.length; i++) {
//   console.log(`key: ${newArray[i][0]}, value: ${newArray[i][1]}`);
// }

// console.log(Object.entries(person));

// let arr = [1, 2, 3, 4, 5];

// for (let i of arr) {
//     console.log(i);
// }

// let person = {
//   name: "홍길동",
//   age: 25,
//   height: 180,
// };

// for (let key in person) {
//   console.log(`key: ${key}, value: ${person[key]}`);
// }

// ------------ 반복문

let arr = [1, 2, 3, 4, 5];

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// arr.forEach((elm, idx, array) => {
//   console.log(`${idx}번째 요소는 ${elm}입니다.`);
//   console.log(array);
// });

// let newArray = [];

// for (let i = 0; i < arr.length; i++) {
//   newArray.push(arr[i] * 10);
// }

// let newArray = arr.map((elm) => {
//   return elm * 10;
// });

// console.log(newArray);

// let colors = ["green", "blue", "purple"];
// console.log(colors[2]);
// console.log(colors[colors.length - 1]);

// console.log(colors.at(-1));
// console.log(colors.includes("blue", 2));
// console.log(colors.includes("blue", 1));

// console.log(colors.indexOf("purple"));
// console.log(colors.indexOf("yellow"));
// console.log(colors.indexOf("blue", 1));

// let colors = [
//   { id: 1, color: "green" },
//   { id: 2, color: "blue" },
//   { id: 3, color: "purple" },
//   { id: 4, color: "yello" },
// ];

// colors.findIndex((elm, idx, array) =>
//   console.log(`${idx} 번째 값은 id: ${elm.id}, color: ${elm.color}`)
// );
// colors.findIndex((elm, idx, array) => console.log(array));

// let idx = colors.find((elm) => elm.color === "purple");

// console.log(idx);

// let filterArray = colors.filter((elm, idx, array) => elm.id > 1);
// console.log(filterArray);

// let sliceArray = colors.slice(1, 3);
// console.log(sliceArray);

// ------ 배열 내장함수-1

// let array1 = ["green", "blue"];
// let array2 = ["purple", "yellow"];

// console.log(array1.concat(array2));

// let array1 = ["green", "blue", "purple", "yellow"];

// console.log(array1.join());
// console.log(array1.join(" "));

// const compare = (a, b) => {
//   if (a > b) return -1;
//   else if (a < b) return 1;
//   else return 0;
// };

// let colors = ["green", "blue", "purple"];

// colors.sort(compare);
// console.log(colors);

// const compare = (a, b) => {
//   return b - a;
// };

// let numbers = [1, 100, 25, 50];

// numbers.sort(compare);
// console.log(numbers);

// let sum = numbers.reduce((acc, cur, idx) => {
//   console.log(acc, cur, idx);
//   return acc + cur;
// }, 0);

// numbers.forEach((elm) => {
//   sum += elm;
// });

// console.log(sum);

// let a = Array.isArray([1, 100, 50]);
// let b = Array.isArray({ id: 1, color: "green" });
// let c = Array.isArray("string");
// let d = Array.isArray(undefined);

// console.log(a, b, c, d);
// ------- 배열 내장함수-2
