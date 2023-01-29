import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { pipe, take } from 'rxjs';
import { CourseDetails } from '../interfaces/course.interface';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
})
export class CourseComponent implements OnInit {
  constructor(private coursesService: CoursesService, private router: Router) {}
  courseDetails?: CourseDetails;
  ngOnInit(): void {
    const courseId = this.router.url.split('/')[3];
    console.log({ courseId });
    this.coursesService
      .getCourseById(parseInt(courseId))
      .pipe(take(1))
      .subscribe((res) => {
        this.courseDetails = res;
        console.log({ res });
      });
  }
}
