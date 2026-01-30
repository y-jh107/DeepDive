/**
 * 맵드 타입
 */

interface User {
  id: number;
  name: string;
  age: number;
}

type PartialUser = {
  [key in keyof User]?: User[key];
};

type BooleanUser = {
  [key in "id" | "name" | "age"]: boolean;
};

type ReadonlyUser = {
  readonly [key in keyof User]: User[key];
};

// 한 명의 유저 정보를 불러오는 기능
function fetchUser(): ReadonlyUser {
  // ... 기능
  return {
    id: 1,
    name: "jinhyuk",
    age: 27,
  };
}

// 한명의 유저 정보를 수정하는 기능
function updateUser(user: PartialUser) {
  // ... 수정하는 기능
}

updateUser({
  //   id: 1,
  //   name: "jinhyuk",
  age: 28,
});
