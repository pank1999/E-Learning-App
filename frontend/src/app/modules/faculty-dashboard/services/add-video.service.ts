import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Video } from '../interfaces/video.interface';

@Injectable()
export class AddVideoService {
  constructor(private http: HttpClient) {}

  public addVideo(title: string, videoFile: File, courseId: number) {
    const header = new HttpHeaders({ enctype: 'multipart/form-data' });
    const formData = new FormData();
    formData.append('video', videoFile, videoFile?.name);
    // formData.append('title',title);
    return this.http.post(
      `http://localhost:3000/api/v1/course/video/${courseId}/${title}`,
      formData,
      { headers: header, params: { title } }
    );
  }

  public getAllVideos(courseId: number) {
    return this.http.get<Video[]>(
      `http://localhost:3000/api/v1/course/videos/${courseId}`
    );
  }
}
