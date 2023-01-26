import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UploadedFile, UseInterceptors } from '@nestjs/common/decorators';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { CoursesService } from './courses.service';
import { CourseDto } from './dto/course.dto';
import { CourseImageService } from './services/course-image.service';

@Controller('course')
export class CoursesController {
  constructor(
    private courseService: CoursesService,
    private courseImageService: CourseImageService
  ) {}

  @Post('/add-course')
  public async addCourseDetails(@Body() courseDto: CourseDto) {
    console.log({ courseDto });
    return await this.courseService.add(courseDto);
  }

  @Post('/:courseId/add-course-img/')
  @UseInterceptors(
    FileInterceptor('img', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, img, cb) => {
          const name = img.originalname.split('.')[0];
          const fileExtension = img.originalname.split('.')[1];
          const newFileName =
            name.split(' ').join('_') + '_' + Date.now() + '.' + fileExtension;
          cb(null, newFileName);
        }
      }),
      fileFilter: (req, img, cb) => {
        if (!img.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
          return cb(null, false);
        }
        return cb(null, true);
      }
    })
  )
  public async addCourseImage(
    @UploadedFile() img: Express.Multer.File,
    @Param('courseId') courseId: number
  ) {
    console.log(img.filename, courseId);
    return await this.courseImageService.addCourseImage({
      Image: img.filename,
      courseId
    });
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
