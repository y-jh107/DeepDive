/**
 * 타입 단언(assertion)
 */

type Person = {
  name: string;
  age: number;
};

let person = {} as Person;
person.name = "양진혁";
person.age = 28;

type Dog = {
  name: string;
  color: string;
};

let dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
} as Dog;

/**
 * 타입 단언의 규칙
 * 값 as 단언 <- 단언식
 * A as B
 * A가 B의 슈퍼타입이거나
 * A가 B의 서브타입이어야 함
 */

let num1 = 10 as never; // never는 모든 타입의 서브타입
let num2 = 10 as unknown; // unknown은 모든 타입의 슈퍼타입

let num3 = 10 as unknown as string; // 다중단언(어쩔 수 없는 경우에만 사용)

/**
 * const 단언
 */

let num4 = 10 as const;

let cat = {
  name: "야옹이",
  color: "yellow",
} as const; // 모든 프로퍼티가 readonly로 설정

/**
 * Non null 단언
 */

type Post = {
  title: string;
  author?: string;
};

let post: Post = {
  title: "게시글1",
  author: "양진혁",
};

const len: number = post.author!.length; // !를 사용하면 null이나 undefined가 아닐 것이라 믿게 만듬
