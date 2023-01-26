import { CourseSection } from '../interface/course-section.interface';

export class CourseDto {
  name: string;
  category: string;
  section: CourseSection[];
  description: string;
  author: string;
  fees: string;
  userId: number;
}
