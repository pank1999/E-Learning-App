import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CourseDto } from './dto/course.dto';

@Controller('course')
export class CoursesController {
  constructor(private courseService: CoursesService) {}

  @Post()
  public async addCourse(@Body() courseDto: CourseDto) {
    console.log({ courseDto });
    await this.courseService.add(courseDto);
  }

  @Get()
  public async getAllCourses() {
    return await this.courseService.getAll();
  }
  @Get('/category/:category')
  public async getAllByCategory(@Param('category') category: string) {
    return await this.courseService.getAllWhere(category);
  }
  @Get('/:id')
  public async getByCourseId(@Param('id') Id: number) {
    return await this.courseService.getById(Id);
  }
}
