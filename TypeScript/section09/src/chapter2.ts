/**
 * infer
 */

type FuncA = () => string;

type FuncB = () => number;

// 조건식을 참으로 만드는 R 타입을 추론
// 추론이 불가하면 조건식이 거짓이 됨
type ReturnType<T> = T extends () => infer R ? R : never;

type A = ReturnType<FuncA>;

type B = ReturnType<FuncB>;

type C = ReturnType<number>;

/**
 * 예제
 */

type PromiseUnpack<T> = T extends Promise<infer R> ? R : never;
// 1. T는 프로미스 타입이어야한다.
// 2. 프로미스 타입의 결과값 타입을 반환해야 한다.

type PromiseA = PromiseUnpack<Promise<number>>;
// number;

type PromiseB = PromiseUnpack<Promise<string>>;
// string
