import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  AddedCourseDetails,
  CourseDetails,
} from '../interfaces/course.interface';

@Injectable()
export class AddCourseService {
  constructor(private http: HttpClient) {}
  AddedCourseDetails$: Observable<AddedCourseDetails> = new Observable();
  addedCourseDetails: AddedCourseDetails = {
    id: 0,
    name: '',
    description: '',
    category: '',
    author: '',
    fees: '',
  };
  public async addCourse(courseDetails: CourseDetails) {
    console.log({
      ...courseDetails,
      isPublished: false,
      progress: 10,
      facultyId: 1,
    });
    return this.http.post<CourseDetails>(
      'http://localhost:3000/api/v1/course/add-course',
      { ...courseDetails, isPublished: false, progress: 10, facultyId: 1 }
    );

    // this.AddedCourseDetails$.subscribe((result) => {
    //   this.addedCourseDetails = result;
    // });
    // return this.addedCourseDetails;
  }
}
