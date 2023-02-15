import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CourseDetails } from '../interfaces/course.interface';

@Injectable()
export class CoursesService {
  constructor(private http: HttpClient, private router: Router) {}
  courses?: CourseDetails[];
  public getCourses(facultyId: number) {
    return this.http.get<CourseDetails[]>(
      `http://localhost:3000/api/v1/course/faculty/${facultyId}`
    );
  }
  public getCourseById(id: number) {
    return this.http.get<CourseDetails>(
      `http://localhost:3000/api/v1/course/${id}`
    );
  }

  public deleteCourse(courseId: number) {
    console.log('deleting course', courseId);
    this.http
      .delete(`http://localhost:3000/api/v1/course/${courseId}`)
      .subscribe();
  }

  public updateCourseDetails(
    courseId: string,
    courseDetails: Partial<CourseDetails>
  ) {
    console.log({ courseDetails });
    this.http
      .put(
        `http://localhost:3000/api/v1/course/update/${courseId}`,
        courseDetails
      )
      .subscribe((res) => {
        if (res) {
          console.log(res);
        }
      });
  }
}
