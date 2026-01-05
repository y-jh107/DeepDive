// (
//     function () {
//         var aName = 'Barry';
//     }
// )();
// IIFE 내부에서 정의된 변수는 외부 범위에서 접근 불가
// console.log(aName);

// var result = (function() {
//     var name = 'Barry';
//     return name;
// })();
// 함수를 할당하는 것이 아닌 바로 호출하여 리턴 값을 변수에 할당
// console.log(result);

// const score = () => {
//     let count = 0;
//     return {
//         current: () => {return count},
//         incerment: () => { count++ },
//         reset: () => { count = 0 }
//     }
// }

// console.log(typeof score);
// console.log(score);
// console.log(score().current());
// score().incerment();
// console.log(score().current());
// count가 1이 되길 바랬지만 score()가 호출되면서 count가 0으로 초기화됨

// const score = (() => {
//     let count = 0;
//     return {
//         current: () => {return count},
//         incerment: () => { count++ },
//         reset: () => { count = 0 }
//     }
// })();

// score는 변수가 됨
// console.log(typeof score);
// console.log(score);

// console.log(score.current()); 

// score.incerment();
// console.log(score.current());
// score.reset();
// console.log(score.current());

// const increment = () => {
//     let counter = 0;
//     console.log(counter);
//     const number = (num) => 
//         console.log(`it is ${num} number`);
//     return () => { counter++; number(counter); };
// }

// increment();
// increment();

const increment = (() => {
    let counter = 0;
    console.log(counter);
    const number = (num) => 
        console.log(`it is ${num} number`);
    return () => { counter++; number(counter); };
})();

console.log(increment);
increment();