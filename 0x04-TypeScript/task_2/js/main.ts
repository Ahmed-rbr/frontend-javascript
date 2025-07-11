interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}
class Director implements DirectorInterface {
  workFromHome() {
    return "Working from home";
  }
  getCoffeeBreak() {
    return "Getting a coffee break";
  }
  workDirectorTasks() {
    return "Getting to director tasks";
  }
}

class Teacher implements TeacherInterface {
  workFromHome() {
    return "Cannot work from home";
  }
  getCoffeeBreak() {
    return " Cannot have a break";
  }
  workTeacherTasks() {
    return "Getting to work";
  }
}
const createEmployee = (salary: string | number): Teacher | Director => {
  if (typeof salary === "number" && salary < 500) {
    return new Teacher();
  }
  return new Director();
};

console.log(createEmployee(200));
console.log(createEmployee(1000));

console.log(createEmployee(100));

const isDirector = (employee: Director | Teacher): employee is Director => {
  return employee instanceof Director;
};

const emp = new Teacher();
console.log(isDirector(emp));

const executeWork = (employee: Director | Teacher): string => {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  } else {
    return employee.workTeacherTasks();
  }
};

console.log(executeWork(createEmployee(200)));
console.log(executeWork(createEmployee(1000)));

type Subjects = "Math" | "History";

const teachClass = (todayClass: Subjects): string => {
  if (todayClass === "History") {
    return "Teaching History";
  } else if (todayClass === "Math") {
    return "Teaching Math";
  }
};
console.log(teachClass("History"));
console.log(teachClass("Math"));
