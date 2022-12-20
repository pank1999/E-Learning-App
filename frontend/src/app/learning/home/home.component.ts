import { Component, OnInit } from '@angular/core';
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
  constructor() {}

  ngOnInit(): void {}
  leftArrowClicked = false;
  rightArrowClicked = false;
  coursesList = courses;
  programmingLanguageList = programmingLanguages;
  MoveLeft() {
    console.log('Move Left');
    this.leftArrowClicked = true;
    this.rightArrowClicked = false;
  }
  MoveRight() {
    console.log('Move Right');
    this.rightArrowClicked = true;
    this.leftArrowClicked = false;
  }
}
