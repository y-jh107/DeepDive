/**
 * 기본 데이터 구조
 */

type ApiResponse<T> =
  | { success: true; data: T }
  | { success: false; error: string };

type User = {
  id: number;
  name: string;
  email?: string;
};

type Post = {
  id: number;
  title: string;
  content: string;
};

/**
 * 1. 제네릭 조건부 타입
 * - 성공 응답에서 data 타입만 추출하는 타입 만들기
 */

type ExtractSuccessData<T> = T extends { success: true; data: infer D }
  ? D
  : never;

/**
 * 2. 제네릭 함수 작성
 * - success가 true면 data를 resolve
 * - success가 false면 error를 reject
 */

function fetchApi<T>(response: ApiResponse<T>): Promise<T> {
  return new Promise((resolve, reject) => {
    if (response.success) {
      resolve(response.data);
    } else {
      reject(response.error);
    }
  });
}

/**
 * 3. Indexed Access + keyof
 * - User의 특정 필드만 안전하게 읽는 함수
 * - 존재하지 않는 key 접근 불가
 * - 반환 타입이 key에 따라 자동 변경
 */

function getUserField<K extends keyof User>(user: User, key: K): User[K] {
  return user[key];
}

/**
 * 4. 맵드 타입 + 유틸리티 타입 응용
 * - id는 readonly
 * - 나머지는 optional
 */

type EditableUser = Readonly<Pick<User, "id">> & Partial<Omit<User, "id">>;

/**
 * 5. 템플릿 리터럴 타입
 * - "/api/~~"와 같은 형식
 */

type Endpoint = "/user" | "/post" | "/user/:id" | "/post/:id";

type Api = "/api";

type ApiEndpoint = `${Api}${Endpoint}`;
