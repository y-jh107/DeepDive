// let colors = ["green", "blue", "purple"];

// let [c1, c2, c3] = colors;

// let c1, c2, c3, c4; // 선언 분리 할당
// [c1, c2, c3, c4 = "yellow"] = ["green", "blue", "purple"];

// console.log(c1);
// console.log(c2);
// console.log(c3);
// console.log(c4);

// let a = 10;
// let b = 5;

// tmp = a;
// a = b;
// b = tmp;

// [a, b] = [b, a];

// console.log(a, b);

// let colors = {
//   c1: "green",
//   c2: "blue",
//   c3: "purple",
// };

// let c1 = colors.c1;
// let c2 = colors.c2;
// let c3 = colors.c3;

// let { c1, c2, c3 } = colors;

// let color1 = colors.c1;
// let color2 = colors.c2;
// let color3 = colors.c3;

// let { c1: color1, c2: color2, c3: color3 } = colors;

// let { c1, c2, c3, c4 } = colors;

// console.log(c1);
// console.log(c2);
// console.log(c3);
// console.log(c4);

// ----- 배열과 객체 구조분해할당

const toy = {
  type: "bear",
  price: 15000,
};

// const blueToy = {
//   type: "bear",
//   price: 15000,
//   color: "blue",
// };

// const yellowToy = {
//   type: "bear",
//   price: 15000,
//   color: "yellow",
// };

// const blueToy = {
//   ...toy,
//   color: "blue",
// };

// const yellowToy = {
//   ...toy,
//   color: "yellow",
// };

// console.log(blueToy);
// console.log(yellowToy);

// const color1 = ["red", "orange", "yellow"];
// const color2 = ["blue", "navy", "purple"];

// const rainbow = [...color1, "green", ...color2];

// console.log(rainbow);

// ------ spread

// const blueToy = {
//   type: "bear",
//   price: 15000,
//   color: "blue",
// };

// const { type, price, color } = blueToy;

// console.log(type);
// console.log(price);
// console.log(color);

// const { type, ...rest } = blueToy;

// console.log(type);
// console.log(rest);

// const color = ["red", "orange", "yellow", "green"];
// const [c1, c2, ...rest] = color;

// console.log(c1, c2);
// console.log(rest);

// const print = (a, b, ...rest) => {
//   console.log(a, b, rest);
// };

// print(1, 2, 3, 4, 5, 6);

const print = (...rest) => {
  console.log(rest);
};

const numbers = [1, 2, 3, 4, 5, 6];
// print(numbers[0], numbers[1], numbers[2], numbers[3], numbers[4], numbers[5]);
print(...numbers);
