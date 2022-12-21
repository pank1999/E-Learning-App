import { NONE_TYPE } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { coursePLaylist } from 'src/assets/DummyData/course-playlsit';
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
  coursePlayList = coursePLaylist;
  SetPlayerVideoUrl: string | undefined =
    'https://www.youtube.com/watch?v=zgSj6w3fBi4';
  ngOnInit(): void {}
  PlayButtonClicked() {
    this.VideoVisibility = 'visible';
    this.PlayButtonVisibility = 'none';
    this.autoplay = true;
  }
  ToggleSubTopics(id: number) {
    console.log('Toggle Sub Topics', id);
    this.coursePlayList[id - 1].Toggle = !coursePLaylist[id - 1].Toggle;
  }

  PlaySelectedVideo(sectionId: number, subTopicId: number) {
    const section = this.coursePlayList[sectionId - 1];
    const subTopic = section.Videos.find((v) => v.id === subTopicId);
    console.log(subTopic?.VideoUrl);
    this.SetPlayerVideoUrl = subTopic?.VideoUrl;
  }
}
