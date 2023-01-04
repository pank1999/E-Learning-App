import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
})
export class CourseComponent implements OnInit {
  constructor(private router: Router) {}
  enrollStatus: boolean = false;
  ngOnInit(): void {}
  enroll(course: any) {
    this.enrollStatus = true;
  }
  courseDashboard(course: string) {
    this.router.navigate([`/learning/dashboard/${course}`]);
  }
}
