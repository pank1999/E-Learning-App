import { CourseSection } from './course-section.interface';

export interface Course {
  name: string;
  img: string;
  category:
    | 'programming-language'
    | 'web-development'
    | 'android'
    | 'AI/ML'
    | 'Data-science'
    | 'UI/UX'
    | 'IOT'
    | 'others';
  section: CourseSection[];
  description: string;
  author: string;
  fees: 'free' | 'paid';
}
