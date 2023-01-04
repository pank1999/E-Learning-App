import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { programmingLanguages } from './../../../assets/DummyData/courses';

@Component({
  selector: 'app-courses-container',
  templateUrl: './courses-container.component.html',
  styleUrls: ['./courses-container.component.css'],
})
export class CoursesContainerComponent implements OnInit {
  constructor(private router: Router) {}
  List = programmingLanguages;
  ngOnInit(): void {}
  course(course: any) {
    this.router.navigate(['/course-details']);
  }
}
