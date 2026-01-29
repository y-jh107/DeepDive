/**
 * 선언 합침
 */

interface Person {
  name: string;
}

interface Person {
  // name: number;
  // name: 'hello'; // 선언 확장을 할 때는 기존 타입과 다르거나 서브타입이어도 오류가 발생함
  name: string;
  age: number;
}

interface Developer extends Person {
  name: "hello";
}

const person: Person = {
  name: "",
  age: 27,
};

/**
 * 모듈 보강
 */

interface Lib {
  a: number;
  b: number;
}

interface Lib {
  c: string;
}

const lib: Lib = {
  a: 1,
  b: 2,
  c: "hello",
};
