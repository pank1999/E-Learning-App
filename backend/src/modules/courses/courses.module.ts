import { Module } from '@nestjs/common';
import { CoursesController } from './courses.controller';
import { coursesProviders } from './courses.provider';
import { CoursesService } from './courses.service';
import { CourseImageService } from './services/course-image.service';
import { CourseVideoService } from './services/course-video.service';
import { UsersCourseService } from './services/users-course.service';

@Module({
  providers: [
    CoursesService,
    ...coursesProviders,
    CourseImageService,
    CourseVideoService,
    UsersCourseService
  ],
  controllers: [CoursesController]
})
export class CoursesModule {}
