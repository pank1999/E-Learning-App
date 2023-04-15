import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICourse } from 'src/app/interface/course';
import { IUsersCourse } from 'src/app/interface/user-course';
import { AgoraRTCService } from 'src/app/services/agoraRTC.service';
import { CourseService } from 'src/app/services/course.service';
import { UserService } from 'src/app/services/user.service';
import {
  courses,
  programmingLanguages,
} from './../../../assets/DummyData/courses';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(
    private router: Router,
    private agoraRTC: AgoraRTCService,
    private courseService: CourseService,
    private userService: UserService
  ) {}
  coursesList!: ICourse[];
  usersCourses!: IUsersCourse[];
  ngOnInit(): void {
    this.courseService.getAllCourses().subscribe((courses) => {
      if (courses) {
        this.coursesList = courses;
        console.log(this.coursesList);
      }
    });
    this.userService.getUsersCourses().subscribe((userCourse) => {
      if (userCourse) {
        this.usersCourses = userCourse;
        console.log(this.usersCourses);
      }
    });
  }

  courseDashboard(course: ICourse) {
    this.router.navigate([`/learning/dashboard/${course.id}/${course.name}`]);
  }
  async JoinLiveClass(course: string) {
    this.router.navigate([`learning/live/${course}`]);
    // await this.agoraRTC.audienceIsChecked();
    // await this.agoraRTC.joinBtnClicked();
  }
  course(course: any) {
    this.router.navigate([`/course-details/${course.id}`]);
  }
}
