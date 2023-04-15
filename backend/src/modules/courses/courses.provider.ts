import { Course } from './models/course.entity';
import {
  COURSE_IMAGE_REPOSITORY,
  COURSE_REPOSITORY,
  COURSE_VIDEO_REPOSITORY,
  USER_COURSE_REPOSITORY
} from './constants';
import { CourseImage } from './models/course-image.entity';
import { Video } from './models/video.entity';
import { UsersCourse } from './models/users-courses.entity';

export const coursesProviders = [
  {
    provide: COURSE_REPOSITORY,
    useValue: Course
  },
  {
    provide: COURSE_IMAGE_REPOSITORY,
    useValue: CourseImage
  },
  {
    provide: COURSE_VIDEO_REPOSITORY,
    useValue: Video
  },
  {
    provide: USER_COURSE_REPOSITORY,
    useValue: UsersCourse
  }
];
