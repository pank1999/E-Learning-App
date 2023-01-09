import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AgoraRTCService } from 'src/app/services/agoraRTC.service';
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
  constructor(private router: Router, private agoraRTC: AgoraRTCService) {}

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
  courseDashboard(course: string) {
    this.router.navigate([`/learning/dashboard/${course}`]);
  }
  async JoinLiveClass(course: string) {
    this.router.navigate([`learning/live/${course}`]);
    // await this.agoraRTC.audienceIsChecked();
    // await this.agoraRTC.joinBtnClicked();
  }
  course(course: any) {
    this.router.navigate(['/course-details']);
  }
}
