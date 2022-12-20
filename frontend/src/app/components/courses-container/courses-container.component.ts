import { Component, OnInit } from '@angular/core';
import { courses } from './../../../assets/DummyData/courses';

@Component({
  selector: 'app-courses-container',
  templateUrl: './courses-container.component.html',
  styleUrls: ['./courses-container.component.css'],
})
export class CoursesContainerComponent implements OnInit {
  constructor() {}
  List = courses;
  ngOnInit(): void {}
}
