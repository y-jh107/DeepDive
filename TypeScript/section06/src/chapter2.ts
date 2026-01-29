/**
 * 접근 제어자
 * access modifier
 * -> pulic private protected
 */

class Employee {
  // 필드

  // 생성자
  constructor(
    private name: string,
    protected age: number,
    public position: string,
  ) {}

  // 메서드
  work() {
    console.log(`${this.name} working`);
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

  // 메서드
  func() {
    this.age;
    // this.name;
  }
}

const employee = new Employee("jinhyuk", 28, "developer");
// employee.name = "gildong";
// employee.age = 30;
employee.position = "designer";

console.log(employee);
