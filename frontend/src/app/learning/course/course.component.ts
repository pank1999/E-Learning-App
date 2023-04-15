import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICourse } from 'src/app/interface/course';
import { LoggedInUserDetails } from 'src/app/interface/user.types';
import { CourseService } from 'src/app/services/course.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
})
export class CourseComponent implements OnInit {
  constructor(
    private router: Router,
    private http: HttpClient,
    private userService: UserService,
    private courseService: CourseService
  ) {}
  enrollStatus: boolean = false;
  courseId!: number;
  user!: LoggedInUserDetails;
  course!: ICourse;
  ngOnInit(): void {
    if (this.router.url.includes('/course-details')) {
      const courseId = this.router.url.split('/')[2];
      this.courseId = parseInt(courseId);
      console.log(this.courseId);
    }
    this.userService.getUserDetails().then((user) => {
      this.user = user;
    });
    this.courseService.getCourseById(this.courseId).subscribe((course) => {
      if (course) {
        this.course = course;
        console.log(course);
      }
    });
  }
  enroll(course: any) {
    this.enrollStatus = true;
  }
  courseDashboard() {
    const userCourseData = {
      courseId: this.courseId,
      userId: this.user.id,
      // courseImageId: this.course.image[0].id,
    };
    console.log({ userCourseData });
    this.http
      .post('http://localhost:3000/api/v1/course/usersCourse', userCourseData)
      .subscribe((res) => {
        if (res) {
          console.log(res);
          this.enrollStatus = true;
          this.router.navigate([`/learning/dashboard/${this.courseId}`]);
        }
      });
  }
}
