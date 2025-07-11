import { Subjects } from "./Teacher";
import { Subjects as SubjectsCpp } from "./Cpp";
import { Subjects as SubjectsJava } from "./Java";
import { Subjects as SubjectsReact } from "./React";

export const cpp = new SubjectsCpp.Cpp();
export const java = new SubjectsJava.Java();
export const react = new SubjectsReact.React();

export const cTeacher: Subjects.Teacher = {
  firstName: "John",
  lastName: "Doe",
  experienceTeachingC: 10,
};

console.log("C++");
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

console.log("Java");
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

console.log("React");
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
