import { Inject, Injectable } from '@nestjs/common';
import { COURSE_IMAGE_REPOSITORY } from '../constants';
import { ICourseImage } from '../interface/course-image.interface';
import { CourseImage } from '../models/course-image.entity';

@Injectable()
export class CourseImageService {
  constructor(
    @Inject(COURSE_IMAGE_REPOSITORY)
    private readonly coursesImageRepository: typeof CourseImage
  ) {}

  public async addCourseImage(courseImage: ICourseImage): Promise<CourseImage> {
    console.log(courseImage);
    return await this.coursesImageRepository.create<CourseImage>(courseImage);
  }

  public async getCourseImageByCourseId(
    courseId: number
  ): Promise<CourseImage> {
    return await this.coursesImageRepository.findOne({
      where: { courseId }
    });
  }
}
