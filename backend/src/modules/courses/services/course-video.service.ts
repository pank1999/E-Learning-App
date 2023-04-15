import { Inject, Injectable } from '@nestjs/common';
import { COURSE_VIDEO_REPOSITORY } from '../constants';
import { ICourseVideo } from '../interface/course-video.interface';
import { Video } from '../models/video.entity';
@Injectable()
export class CourseVideoService {
  constructor(
    @Inject(COURSE_VIDEO_REPOSITORY)
    private readonly courseVideoRepository: typeof Video
  ) {}

  public async addCourseVideo(courseVideo: ICourseVideo): Promise<Video> {
    console.log(courseVideo);
    return await this.courseVideoRepository.create<Video>(courseVideo);
  }

  public async getAllCourseVideosByCourseId(
    courseId: number
  ): Promise<Video[]> {
    return await this.courseVideoRepository.findAll({
      where: { courseId }
    });
  }

  public async getVideoById(id: number): Promise<Video> {
    console.log('getting video by id', id);
    return await this.courseVideoRepository.findOne({
      where: { id }
    });
  }
  public async deleteVideo(Id: number): Promise<number> {
    return await this.courseVideoRepository.destroy({ where: { id: Id } });
  }
}
