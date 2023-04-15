import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { localStorageKeys } from 'src/app/constants';
import { ICourse, IVideo } from 'src/app/interface/course';
import { LocalLoggedInUser } from 'src/app/interface/user.types';
import { CourseService } from 'src/app/services/course.service';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-course-dashboard',
  templateUrl: './course-dashboard.component.html',
  styleUrls: ['./course-dashboard.component.css'],
})
export class CourseDashboardComponent implements OnInit {
  constructor(
    private router: Router,
    private courseService: CourseService,
    private userService: UserService
  ) {}
  coursePlayList: IVideo[] = [];
  Username = '';
  url: string = '';
  courseName = '';
  course!: ICourse;
  ngOnInit(): void {
    const courseId = this.router.url.split('/')[3];
    this.courseService.getCourseById(parseInt(courseId)).subscribe((course) => {
      if (course) {
        this.course = course;
        this.courseName = course.name;
        this.coursePlayList = course.videos;
      }
    });
    this.userService.getUserDetails().then((user) => {
      this.Username = user.name;
    });
  }
  playNext(videoId: number) {
    this.url = `learning/dashboard/${this.course.id}/${this.courseName}/video/${videoId}`;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([`/${this.url}`]).then(() => {});
    });
  }
}
