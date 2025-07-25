import { Subjects } from "./Teacher";

export namespace Subjects {
  export class Subject {
    private teacher!: Teacher;

    setTeacher(teacher: Teacher): void {
      this.teacher = teacher;
    }

    getTeacher(): Teacher {
      return this.teacher;
    }
  }
}
