// function makeIterator(numbers) {
//     let nextIndex = 0;

//     return {
//         next: function() {
//             return nextIndex < numbers.length?
//             {value: numbers[nextIndex++], done: false}:
//             {value: undefined, done: true}
//         }
//     }
// }

// const numbersArray = [1, 2, 3];

// const numbersIterator = makeIterator(numbersArray);

// [Symbol.iterator]()를 이용하면 반복 가능한 값을 반복기로 생성 가능
// const numbersIterator = numbersArray[Symbol.iterator]()

// console.log(numbersIterator.next());
// console.log(numbersIterator.next());
// console.log(numbersIterator.next());
// console.log(numbersIterator.next());

// const numbersIterable = [1, 2, 3];
// const numbersNotIterable = { a: 1, b: 2 };
// numbersIterable[Symbol.Iterator]()

// console.log(typeof numbersIterable);
// console.log(typeof numbersNotIterable);
// for (const n of numbersIterable) {
//     console.log(n);
// }

// const set = new Set([1, 2, 3, 4]);
// console.log('set', set);
// const map = new Map([['a', 1], ['b', 2]]);
// console.log('map', map);

// console.log(set[Symbol.iterator]());
// console.log(map[Symbol.iterator]());

// function* sayNumbers() {
//     yield 1;
//     yield 2;
//     yield 3;
// }

// Generator 함수의 반환이 Generator
// const number = sayNumbers();

// console.log(number.next());
// console.log(number.next());
// console.log(number.next());
// console.log(number.next());

// function* generatorFunction() {
//     yield 1;
// }

// const generator = generatorFunction();
// // generator = generator[Symbol.iterator]();

// function* createIds() {
//     let index = 1;
    
//     while(true) {
//         yield index++;
//     }
// }

// const gen = createIds();

// console.log(gen.next().value);
// console.log(gen.return(10).value);

function* generatorFunction() {
    yield* [1, 2, 3];
}

const generator = generatorFunction();

for (const number of generator) {
    console.log(number);
}