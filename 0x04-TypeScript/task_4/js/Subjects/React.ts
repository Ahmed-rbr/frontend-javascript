// React.ts
import { Subjects } from "./Teacher";

export namespace Subjects {
  export interface Teacher {
    experienceTeachingReact?: number;
  }

  export class React {
    private teacher!: Teacher;

    setTeacher(teacher: Teacher): void {
      this.teacher = teacher;
    }

    getRequirements(): string {
      return "Here is the list of requirements for React";
    }

    getAvailableTeacher(): string {
      if (
        !this.teacher ||
        !this.teacher.experienceTeachingReact ||
        this.teacher.experienceTeachingReact <= 0
      ) {
        return "No available teacher";
      }
      return `Available Teacher: ${this.teacher.firstName}`;
    }
  }
}
