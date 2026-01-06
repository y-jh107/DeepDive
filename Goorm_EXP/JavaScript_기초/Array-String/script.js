const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let lastNum = numArray.pop();

console.log(lastNum);
console.log(numArray);

numArray.push(100);
console.log(numArray);

const newArray = numArray.slice(2, 7);
console.log(newArray);

let text = "San fransico";

console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.substring(0,3));
console.log(text.charAt(8));
console.log(text.replace('s', 'X'));