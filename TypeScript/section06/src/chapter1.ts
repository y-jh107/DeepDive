/**
 * 타입스크립트의 클래스
 */

const employee = {
  name: "양진혁",
  age: 27,
  position: "developer",
  work() {
    console.log("working");
  },
};

// 타입스크립트의 클래스는 타입으로도 활용될 수 있음
class Employee {
  // 필드
  name: string;
  age: number;
  position: string;

  // 생성자
  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  // 메서드
  work() {
    console.log("working");
  }
}

class ExecutiveOfficer extends Employee {
  // 필드
  officeNumber: number;

  // 생성자
  constructor(
    name: string,
    age: number,
    position: string,
    officeNumber: number,
  ) {
    super(name, age, position);
    this.officeNumber = officeNumber;
  }
}

const employeeB = new Employee("jinhyuk", 28, "개발자");
console.log(employeeB);

const employeeC: Employee = {
  name: "",
  age: 0,
  position: "",
  work() {},
};
