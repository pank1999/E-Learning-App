import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { coursePLaylist } from 'src/assets/DummyData/course-playlsit';
@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css'],
})
export class VideoComponent implements OnInit {
  constructor(private router: Router) {}
  like = 0;
  disLike = 0;
  VideoVisibility = 'hidden';
  PlayButtonVisibility = 'block';
  SetPlayerVideoUrl: string | undefined =
    './../../../assets/videos/Video-1.mp4';
  autoplay = false;
  subTopicId = '1';
  courseName = '';
  currentSection: any;
  thumbnail: string = './../../../assets/image/thumbnail-1.png';
  ngOnInit(): void {
    if (this.router.url.includes('/video')) {
      this.subTopicId = this.router.url.split('/')[5];
      const sectionId = this.subTopicId[0];
      this.currentSection = coursePLaylist[parseInt(sectionId) - 1];
      const subTopicObj = this.currentSection.Videos.filter(
        (s: any) => s.id == this.subTopicId
      );
      this.SetPlayerVideoUrl = `./../../../assets/${subTopicObj[0]?.VideoUrl}`;
      this.thumbnail = `./../../../assets/${subTopicObj[0]?.thumbnail}`;
    }
    this.courseName = this.router.url.split('/')[3];
  }
  PlayButtonClicked() {
    this.VideoVisibility = 'visible';
    this.PlayButtonVisibility = 'none';
    this.autoplay = true;
  }
  updateLike() {
    this.like++;
  }
  updateDisLike() {
    this.disLike++;
  }
}
