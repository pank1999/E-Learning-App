import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import {
  Delete,
  Put,
  UploadedFile,
  UseInterceptors
} from '@nestjs/common/decorators';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { CoursesService } from './courses.service';
import { CourseDto } from './dto/course.dto';
import { CourseVideoDto } from './interface/course-video.interface';
import { CourseImageService } from './services/course-image.service';
import { CourseVideoService } from './services/course-video.service';

@Controller('course')
export class CoursesController {
  constructor(
    private courseService: CoursesService,
    private courseImageService: CourseImageService,
    private courseVideoService: CourseVideoService
  ) {}

  // add course details
  @Post('/add-course')
  public async addCourseDetails(@Body() courseDto: CourseDto) {
    console.log({ courseDto });
    return await this.courseService.add(courseDto);
  }

  //uploading course image using  @UseInterceptors and FileInterceptor
  // @Post('/:courseId/add-course-img/')
  // @UseInterceptors(
  //   FileInterceptor('img', {
  //     storage: diskStorage({
  //       destination: './uploads/image',
  //       filename: (req, img, cb) => {
  //         const name = img.originalname.split('.')[0];
  //         const fileExtension = img.originalname.split('.')[1];
  //         const newFileName =
  //           name.split(' ').join('_') + '_' + Date.now() + '.' + fileExtension;
  //         cb(null, newFileName);
  //       }
  //     }),
  //     fileFilter: (req, img, cb) => {
  //       if (!img.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
  //         return cb(null, false);
  //       }
  //       return cb(null, true);
  //     }
  //   })
  // )
  // public async addCourseImage(
  //   @UploadedFile() img: Express.Multer.File,
  //   @Param('courseId') courseId: number
  // ) {
  //   console.log(img.filename, courseId);
  //   return await this.courseImageService.addCourseImage({
  //     Image: img.filename,
  //     courseId
  //   });
  // }

  // adding course video using @UseInterceptors and FileInterceptor
  // @UseInterceptors(
  //   FileInterceptor('video', {
  //     storage: diskStorage({
  //       destination: './uploads/video',
  //       filename: (req, video, cb) => {
  //         const name = video.originalname.split('.')[0];
  //         const fileExtension = video.originalname.split('.')[1];
  //         const newFileName =
  //           name.split(' ').join('_') + '_' + Date.now() + '.' + fileExtension;
  //         cb(null, newFileName);
  //       }
  //     }),
  //     fileFilter: (req, video, cb) => {
  //       if (!video.originalname.match(/\.(mp4|mov)$/)) {
  //         return cb(null, false);
  //       }
  //       return cb(null, true);
  //     }
  //   })
  // )
  // @Post('/video/:courseId/:title')
  // public async addCourseVideo(
  //   @UploadedFile() video: Express.Multer.File,
  //   @Param('title') title: string,
  //   @Param('courseId') courseId: number
  // ) {
  //   console.log(title, courseId, video);
  //   return await this.courseVideoService.addCourseVideo({
  //     title,
  //     courseId,
  //     videoUrl: video.filename
  //   });
  // }

  //add course images;
  @Post('/add-course-img/:courseId')
  public async addCourseImage(
    @Param('courseId') courseId: number,
    @Body() img
  ) {
    console.log('adding course image :', courseId);
    return await this.courseImageService.addCourseImage({
      Image: img.img,
      courseId
    });
  }

  // add course video
  @Post('/video/:courseId')
  public async addCourseVideo(
    @Param('courseId') courseId: number,
    @Body() courseVideoDto: CourseVideoDto
  ) {
    console.log('adding video to db ', courseVideoDto, courseId);
    return await this.courseVideoService.addCourseVideo({
      ...courseVideoDto,
      courseId
    });
  }

  @Get('/videos/:courseId')
  public async getAllCourseVideos(@Param('courseId') courseId: number) {
    console.log('get all course videos', { courseId });
    return await this.courseVideoService.getAllCourseVideosByCourseId(courseId);
  }

  @Get()
  public async getAllCourses() {
    return await this.courseService.getAll();
  }

  @Get('faculty/:facultyId')
  public async getAllByFacultyId(@Param('facultyId') facultyId: number) {
    console.log({ facultyId });
    return await this.courseService.getAllByFacultyId(facultyId);
  }

  @Get('/category/:category')
  public async getAllByCategory(@Param('category') category: string) {
    return await this.courseService.getAllWhere(category);
  }
  @Get('/:id')
  public async getByCourseId(@Param('id') Id: number) {
    return await this.courseService.getById(Id);
  }

  @Put('/update/:courseId')
  public async updateCourseDetails(
    @Body() courseDetails: Partial<CourseDto>,
    @Param('courseId') courseId: number
  ) {
    return await this.courseService.updateCourse(courseId, courseDetails);
  }

  @Delete('/:courseId')
  public async deleteCourseByCourseId(@Param('courseId') courseId: number) {
    console.log('deleting::::::', courseId);
    return await this.courseService.deleteCourse(courseId);
  }

  @Delete('video/:videoId')
  public async deleteVideo(@Param('videoId') videoId: number) {
    console.log('delete video ', videoId);
    return await this.courseVideoService.deleteVideo(videoId);
  }
}
