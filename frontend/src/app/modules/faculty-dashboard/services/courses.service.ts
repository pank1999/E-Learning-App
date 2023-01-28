import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CourseDetails } from '../interfaces/course.interface';

@Injectable()
export class CoursesService {
  constructor(private http: HttpClient) {}
  courses?: CourseDetails[];
  public getCourses(facultyId: number) {
    return this.http.get<CourseDetails[]>(
      `http://localhost:3000/api/v1/course/faculty/${facultyId}`
    );
  }
}
