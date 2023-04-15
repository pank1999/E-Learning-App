import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from '@firebase/util';
import { ICourse } from '../interface/course';
import { Video } from '../modules/faculty-dashboard/interfaces/video.interface';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  constructor(private http: HttpClient) {}
  public getAllCourses() {
    return this.http.get<ICourse[]>('http://localhost:3000/api/v1/course');
  }
  public getCourseById(courseId: number) {
    console.log({ courseId });
    return this.http.get<ICourse>(
      `http://localhost:3000/api/v1/course/${courseId}`
    );
  }

  public getVideoById(id: number) {
    return this.http.get<Video>(
      `http://localhost:3000/api/v1/course/video/${id}`
    );
  }
}
