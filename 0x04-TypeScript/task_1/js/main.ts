interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  contract: boolean;
  [key: string]: unknown;
}

const teacher3: Teacher = {
  firstName: "John",
  fullTimeEmployee: false,
  lastName: "Doe",
  location: "London",
  contract: false,
};

// console.log(teacher3);

interface Directors {}
const director1: Directors = {
  firstName: "Johnd",
  lastName: "Doe",
  location: "London",
  fullTimeEmployee: true,
  numberOfReports: 17,
};
// console.log(director1);
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName[0].toUpperCase()}. ${lastName}`;
};

// console.log(printTeacher("ahmed", "rabdar"));

interface Student {
  firstName: string;
  lastName: string;
}

interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClass;
}
class StudentClass implements Student {
  constructor(public firstName: string, public lastName: string) {}

  workOnHomework(): string {
    return "Currently working";
  }
  displayName(): string {
    return this.firstName;
  }
}

const student1 = new StudentClass("ahmed", "rbr");

console.log(student1.workOnHomework());
console.log(student1.displayName());
