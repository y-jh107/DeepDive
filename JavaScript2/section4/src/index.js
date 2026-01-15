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

// const toy = {
//   type: "bear",
//   price: 15000,
// };

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

// const print = (...rest) => {
//   console.log(rest);
// };

// const numbers = [1, 2, 3, 4, 5, 6];
// print(numbers[0], numbers[1], numbers[2], numbers[3], numbers[4], numbers[5]);
// print(...numbers);

// ------ rest

// const work = (callback) => {
//   setTimeout(() => {
//     console.log("3초만 기다리세요");
//     callback();
//   }, 3000);
// };

// work(() => {
//   console.log("종료");
// });

// const workA = () => {
//   setTimeout(() => {
//     console.log("workA");
//   }, 5000);
// };

// const workB = () => {
//   setTimeout(() => {
//     console.log("workB");
//   }, 3000);
// };

// const workC = () => {
//   setTimeout(() => {
//     console.log("workC");
//   }, 10000);
// };

// const workD = () => {
//   console.log("workD");
// };

// workA();
// workB();
// workC();
// workD();

// ----- 비동기처리

// const workA = (value, callback) => {
//   setTimeout(() => {
//     callback(value + 5);
//   }, 5000);
// };

// const workB = (value, callback) => {
//   setTimeout(() => {
//     callback(value - 3);
//   }, 3000);
// };

// const workC = (value, callback) => {
//   setTimeout(() => {
//     callback(value + 10);
//   }, 10000);
// };

// const workD = (value, callback) => {
//   callback(value);
// };

// workA(10, (resA) => {
//   console.log(`1. ${resA}`);
//   workB(resA, (resB) => {
//     console.log(`2. ${resB}`);
//     workC(resB, (resC) => {
//       console.log(`3. ${resC}`);
//     });
//   });
// });

// workD("workD", (res) => {
//   console.log(res);
// });

// const executor = (resolve, reject) => {
//   setTimeout(() => {
//     reject("실패");
//   }, 3000);
// };

// const promise = new Promise(executor);
// promise
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// const workA = (value) => {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(value + 5);
//     }, 5000);
//   });
//   return promise;
// };

// const workB = (value) => {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(value - 3);
//     }, 3000);
//   });
//   return promise;
// };

// const workC = (value) => {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(value + 10);
//     }, 10000);
//   });
//   return promise;
// };

// workA(10).then((resA) => {
//   console.log(`1. ${resA}`);
//   workB(resA).then((resB) => {
//     console.log(`2. ${resB}`);
//     workC(resB).then((resC) => {
//       console.log(`3. ${resC}`);
//     });
//   });
// });

// workA(10)
//   .then((resA) => {
//     console.log(`1. ${resA}`);
//     return workB(resA);
//   })
//   .then((resB) => {
//     console.log(`2. ${resB}`);
//     return workC(resB);
//   })
//   .then((resC) => {
//     console.log(`3. ${resC}`);
//   });

// ----- Promise 객체

// const delay = (ms) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve();
//     }, ms);
//   });
// };

// const start = async () => {
//     delay(2000).then(() => {
//       console.log("대기");
//     });
//   return "대기";
// };

// start().then((res) => {
//   console.log(res);
// });

// const delay = (ms) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve();
//     }, ms);
//   });
// };

// const start = async () => {
//   //   delay(2000).then(() => {
//   //     console.log("대기");
//   //   });
//   return "대기";
// };

// start().then((res) => {
//   console.log(res);
// });

// const delay = (ms) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve();
//     }, ms);
//   });
// };

// const start = async () => {
//   try {
//     await delay(2000);
//     console.log("대기");
//   } catch (error) {
//     console.log(error);
//   }
// };

// start();

// ----- async와 await

// const response = fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((res) => console.log(res))
//   .catch((error) => console.log(error));

// console.log(response);

const getData = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

getData();
