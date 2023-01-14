import { Inject, Injectable } from '@nestjs/common';
import { CourseDto } from './dto/course.dto';
import { COURSE_REPOSITORY } from './constants';
import { Course } from './models/course.entity';
@Injectable()
export class CoursesService {
  constructor(
    @Inject(COURSE_REPOSITORY) private readonly coursesRepository: typeof Course
  ) {}

  public async add(course: CourseDto): Promise<Course> {
    console.log({ course });
    return await this.coursesRepository.create<Course>(course);
  }

  public async getAll(): Promise<Course[]> {
    console.log('all courses');
    return await this.coursesRepository.findAll<Course>();
  }

  public async getById(Id: number): Promise<Course> {
    console.log('all courses', Id);
    return await this.coursesRepository.findOne<Course>({ where: { id: Id } });
  }

  public async getAllWhere(category: string): Promise<Course[]> {
    console.log('all courses by category', category);
    return await this.coursesRepository.findAll<Course>({
      where: { category }
    });
  }
}
