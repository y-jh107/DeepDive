/**
 * 제네릭 (일반적인, 포괄적인)
 */

// 제네릭 함수 -> 모든 타입에 사용 가능한 함수
// T -> 타입 변수
function func<T>(value: T): T {
  return value;
}

let num = func(10);

let boole = func(true);

let str = func("string");

let arr = func<[number, number, number]>([1, 2, 3]);
