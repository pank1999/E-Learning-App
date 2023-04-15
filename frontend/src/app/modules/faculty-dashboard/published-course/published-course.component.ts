import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { CoursesService } from '../services/courses.service';
import { ICourse } from 'src/app/interface/course';
import { UserService } from 'src/app/services/user.service';
import { localStorageKeys } from 'src/app/constants';
import { CourseDetails } from '../interfaces/course.interface';
import { Router } from '@angular/router';
@Component({
  selector: 'app-published-course',
  templateUrl: './published-course.component.html',
  styleUrls: ['./published-course.component.css'],
})
export class PublishedCourseComponent implements OnInit {
  constructor(
    private coursesService: CoursesService,
    private userService: UserService,
    private router: Router
  ) {}

  publishedCoursesList: CourseDetails[] = [];

  ngOnInit(): void {
    const user = this.userService.get(localStorageKeys.USER_DETAILS);
    this.coursesService.getPublishedCourses(user.id).subscribe((res) => {
      if (res) {
        this.publishedCoursesList = res;
        console.log(this.publishedCoursesList);
      }
    });
  }

  goToCourse(id: number) {
    this.router.navigateByUrl(`faculty-dashboard/course/${id}`);
  }
}
