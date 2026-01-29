/**
 * 타입 좁히기
 * 조건문 등을 이용해 넓은 타입에서 좁은 타입으로
 * 타입을 상황에 따라 좁히는 방법
 */

type Person = {
  name: string;
  age: number;
};

// value => number: toFixed
// value => string: toUpperCase
// value => Date: getTime
// value => Person: name은 age살 입니다.
function func(value: number | string | Date | null | Person) {
  value; // number | string의 유니온 타입으로 추론함

  // 조건문과 함께 타입을 좁힐 수 있는 표현을 타입가드라고 함
  if (typeof value === "number") {
    console.log(value.toFixed()); // value의 타입이 number로 추론함
  } else if (typeof value === "string") {
    console.log(value.toUpperCase()); // value의 타입이 string으로 추론함
  } else if (value instanceof Date) {
    console.log(value.getTime());
  } else if (value && "age" in value) {
    console.log(`${value.name}은 ${value.age}살입니다.`);
  }
}
