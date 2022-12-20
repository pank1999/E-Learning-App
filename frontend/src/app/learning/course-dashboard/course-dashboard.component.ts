import { NONE_TYPE } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-course-dashboard',
  templateUrl: './course-dashboard.component.html',
  styleUrls: ['./course-dashboard.component.css'],
})
export class CourseDashboardComponent implements OnInit {
  constructor() {}
  VideoVisibility = 'hidden';
  PlayButtonVisibility = 'block';
  autoplay = false;
  DisplaySubTopics = 'none';
  ngOnInit(): void {}
  PlayButtonClicked() {
    this.VideoVisibility = 'visible';
    this.PlayButtonVisibility = 'none';
    this.autoplay = true;
  }
  ToggleSubTopics() {
    console.log('Toggle Sub Topics');
    this.DisplaySubTopics === 'flex'
      ? (this.DisplaySubTopics = 'none')
      : (this.DisplaySubTopics = 'flex');
  }
}
