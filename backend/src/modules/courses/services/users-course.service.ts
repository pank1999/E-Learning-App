import { Inject, Injectable } from '@nestjs/common';
import { USER_COURSE_REPOSITORY } from '../constants';
import { UsersCourses } from '../interface/users-courses.interface';
import { CourseImage } from '../models/course-image.entity';
import { Course } from '../models/course.entity';
import { UsersCourse } from '../models/users-courses.entity';

@Injectable()
export class UsersCourseService {
  @Inject(USER_COURSE_REPOSITORY)
  private readonly usersCourseRepository: typeof UsersCourse;
  constructor() {}
  public async AddUsersCourse(userCourse: UsersCourses) {
    return await this.usersCourseRepository.create<UsersCourse>(userCourse);
  }
  public async getUsersCourses(userId: number) {
    return await this.usersCourseRepository.findAll({
      where: { userId },
      include: [Course]
    });
  }
}
