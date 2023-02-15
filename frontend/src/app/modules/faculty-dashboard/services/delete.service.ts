import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DeleteService {
  constructor(private http: HttpClient) {}

  public deleteVideo(videoId: number) {
    console.log('videoId:::::::::', videoId);
    return this.http.delete(
      `http://localhost:3000/api/v1/course/video/${videoId}`
    );
  }
}
