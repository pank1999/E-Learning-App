import { CourseSection } from './course-section.interface';

export interface Course {
  name: string;
  category:
    | 'programming-language'
    | 'web-development'
    | 'android'
    | 'AI/ML'
    | 'Data-science'
    | 'UI/UX'
    | 'IOT'
    | 'others';
  description: string;
  author: string;
  fees: 'free' | 'paid';
  isPublished: boolean;
  progress: number;
  facultyId: number;
}
