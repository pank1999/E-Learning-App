import { Inject, Injectable } from '@nestjs/common';
import { CourseDto } from './dto/course.dto';
import { COURSE_REPOSITORY } from './constants';
import { Course } from './models/course.entity';
import { CourseImage } from './models/course-image.entity';
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
    console.log('all courses ');
    return await this.coursesRepository.findAll<Course>();
  }

  public async getById(Id: number): Promise<Course> {
    console.log('all courses', Id);
    return await this.coursesRepository.findOne<Course>({
      where: { id: Id },
      include: [
        {
          model: CourseImage
        }
      ]
    });
  }

  // get all course by published status true
  public async getAllWhereIsPublished(isPublished: boolean): Promise<Course[]> {
    console.log('all courses by isPublished status', isPublished);
    return await this.coursesRepository.findAll<Course>({
      where: { isPublished }
    });
  }

  // get all course by category and published status true
  public async getAllWhere(category: string): Promise<Course[]> {
    console.log('all courses by category', category);
    return await this.coursesRepository.findAll<Course>({
      where: { category, isPublished: true }
    });
  }
  // get all course by faculty id
  public async getAllByFacultyId(facultyId: number): Promise<Course[]> {
    console.log('all courses by faculty id', facultyId);
    return await this.coursesRepository.findAll<Course>({
      where: { facultyId: facultyId },
      include: [
        {
          model: CourseImage
        }
      ]
    });
  }

  public async deleteCourse(courseId: number) {
    console.log('course deleted', courseId);
    return await this.coursesRepository.destroy({
      where: { id: courseId }
    });
  }

  public async updateCourse(
    courseId: number,
    courseDetails: Partial<CourseDto>
  ) {
    console.log({ courseDetails });
    return await this.coursesRepository.update(courseDetails, {
      where: { id: courseId }
    });
  }
}
