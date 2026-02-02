/**
 * 기본 데이터 구조
 */

type TodoStatus = "idle" | "loading" | "success" | "error";

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

/**
 * 1. 제네릭 + 상태 기반 타입 분기 (조건부 타입)
 * - idle | loading -> data: 없음
 * - success -> data: T
 * - error -> error: string;
 */

type TodoState<S extends TodoStatus, T> = S extends "success"
  ? { status: S; data: T }
  : S extends "error"
    ? { status: S; error: string }
    : { status: S };

/**
 * 2. 제네릭 함수 + 이전 상태 기반 업데이트
 * - 이전 상태 기반으로만 업데이트 가능
 * - 타입 손실 없이 동작
 */

function updateTodo<T>(prev: T, updater: (prev: T) => T): T {
  const curr = updater(prev);
  return curr;
}

/**
 * 3. keyof + Indexed Access로 안전한 수정 함수
 * - 잘못된 필드 수정 불가
 * - 타입에 맞지 않는 값 할당 불가
 */

function updateTodoField<K extends keyof Todo>(
  todo: Todo,
  key: K,
  value: Todo[K],
): Todo {
  return {
    ...todo,
    [key]: value,
  };
}

/**
 * 4. 맵드 타입 + 유틸리티 타입
 * - id는 readonly
 * - completed 필수
 * - 나머지는 optional
 */

type EditableTodo = Pick<Todo, "completed"> &
  Readonly<Pick<Todo, "id">> &
  Partial<Omit<Todo, "id" | "completed">>;

/**
 * 5. 템플릿 리터럴 타입 + 문자열 상태 제한
 */

type Action = "add" | "remove" | "toggle";

type TodoAction = `todo/${Action}`;
