/**
 * 사용자 타입 설계
 * 공통 속성: id(number), name(string)
 * 관리자: 역할 식별자("ADMIN"),managedUserCount(number)
 * 일반사용자: 역할 식별자("MEMBER"), point(number)
 * 방문자: 역할 식별자("GUEST"), visitCount(number)
 * 서로소 유니온 형태, 하나의 유니온 타입으로 묶음
 */

type Admin = {
  id: number;
  name: string;
  role: "ADMIN";
  managedUserCount: number;
};

type Member = {
  id: number;
  name: string;
  role: "MEMBER";
  point: number;
};

type Guest = {
  id: number;
  name: string;
  role: "GUEST";
  visitCount: number;
};

type User = Admin | Member | Guest;

/* ================================= */

/**
 * 서버의 요청 결과를 표현하는 타입
 * - 로딩 중
 * - 성공 (문자열 데이터 포함)
 * - 실패 (에러 메세지 포함)
 * 유니온 타입
 */

type Loading = {
  state: "LOADING";
};

type Success = {
  state: "SUCCESS";
  data: string;
};

type Failed = {
  state: "FAILED";
  message: string;
};

type AsyncTask = Loading | Success | Failed;

/* ================================= */

/**
 * 핵심 함수 구현
 * 비동기 상태 처리
 * - 로딩 중 -> "작업 처리 중입니다."
 * - 작업 실패 -> "작업 실패: 에러 메세지"
 * - 성공 -> 다음 단계 진행
 *
 * 성공 상태일 때 사용자 권한 처리
 * - 관리자 -> 관리 중인 사용자 수 출력
 * - 일반 사용자 -> 포인트 출력
 * - 방문자 -> 방문 횟수 출력
 *
 * 타입 좁히기, 서로소 유니온 분기 사용
 */

function handleUserAction(user: User, task: AsyncTask): void {
  switch (task.state) {
    case "LOADING": {
      console.log("작업 처리 중입니다.");
      break;
    }
    case "FAILED": {
      console.log(`작업 실패: ${task.message}`);
      break;
    }
    case "SUCCESS": {
      printUserAction(user);
      break;
    }
  }
}

function printUserAction(user: User): void {
  switch (user.role) {
    case "ADMIN": {
      console.log(
        `${user.name}님 현재까지 ${user.managedUserCount}명 관리했습니다.`,
      );
      break;
    }
    case "MEMBER": {
      console.log(`${user.name}님 현재 ${user.point}만큼 모았습니다.`);
      break;
    }
    case "GUEST": {
      console.log(`${user.name}님 현재까지 ${user.visitCount}번 방문했습니다.`);
      break;
    }
  }
}

/* ================================= */

/**
 * 예시 사용자 + 예시 비동기 2가지
 */

/* 예시 1번 */
const userA: User = {
  id: 1,
  name: "gildong",
  role: "ADMIN",
  managedUserCount: 30,
};

let taskStateA: AsyncTask = {
  state: "SUCCESS",
  data: `${userA.managedUserCount}명`,
};

handleUserAction(userA, taskStateA);

/* 예시 2번 */
const userB: User = {
  id: 100,
  name: "jenny",
  role: "MEMBER",
  point: 2500,
};

let taskStateB: AsyncTask = {
  state: "LOADING",
};

handleUserAction(userB, taskStateB);
