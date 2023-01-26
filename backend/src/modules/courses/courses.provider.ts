import { Course } from './models/course.entity';
import { COURSE_IMAGE_REPOSITORY, COURSE_REPOSITORY } from './constants';
import { CourseImage } from './models/course-image.entity';

export const coursesProviders = [
  {
    provide: COURSE_REPOSITORY,
    useValue: Course
  },
  {
    provide: COURSE_IMAGE_REPOSITORY,
    useValue: CourseImage
  }
];
