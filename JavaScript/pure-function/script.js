// let x = 0;
// const numberUp = () => x += 1;

// 함수 외부에 있는 값을 변경했기 때문에 impure
// console.log(numberUp());
// console.log(x);

// let x = 0;
// const pureNumberUp = (num) => num += 1;

// x의 값은 변경되지 않음
// console.log(pureNumberUp(x));
// console.log(x);

// const alphabetArray = ['A', 'B'];
// const addItemToArray = (originalArray, newItem) => {
//     originalArray.push(newItem);
//     return originalArray;
// }

// alphabetArray에 'C'가 추가되어 사이드 이펙트 발생
// console.log(addItemToArray(alphabetArray, 'C'));
// console.log(alphabetArray);

const alphabetArray = ['A', 'B'];

const pureAddItemToArray = (originalArray, newItem) => {
    return [...originalArray, newItem];
}

console.log(pureAddItemToArray(alphabetArray, 'C'));
console.log(alphabetArray);