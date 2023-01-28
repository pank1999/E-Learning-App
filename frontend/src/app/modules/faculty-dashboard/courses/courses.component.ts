import { Component, OnInit } from '@angular/core';
import { CourseDetails } from '../interfaces/course.interface';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {
  constructor(private coursesService: CoursesService) {}

  courses?: CourseDetails[];
  ngOnInit(): void {
    this.coursesService.getCourses(1).subscribe((res) => {
      this.courses = res;
      console.log(this.courses);
    });
  }
}
