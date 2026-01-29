/**
 * 타입 추론
 */

let a = 10; // 타입 넓히기(범용적 사용이 가능하게 함)
let b = "hello";
let c = {
  id: 1,
  name: "양진혁",
  profile: {
    nickname: "memm",
  },
};

let { id, name, profile } = c;

let [one, two, three] = [1, "hello", true];

// 함수의 타입은 반환값을 기준으로 추론함, 매개변수는 기본값을 기준으로 추론함
function func(message = "hello") {
  return "hello";
}

// 우리가 눈으로 보고 추론할 수 있다면 타입스크립트도 할 수 있음

let d; // 초기값 없이 변수를 선언하면 암묵적으로 any 타입 지정, 추천하지 않음

d = 10; // any 진화(number)
d.toFixed();

d = "hello"; // any 진화(string)
d.toUpperCase();

const num = 10; // const로 선언한 변수는 값 변경이 불가해서 리터럴 타입으로 추론함
const str = "hello";

// 배열처럼 다양한 요소를 넣는 경우는 타입스크립트가 최적의 공통 타입으로 추론함
let arr = [1, "string"];
