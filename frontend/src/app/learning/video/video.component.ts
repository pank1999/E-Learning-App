import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Video } from 'src/app/modules/faculty-dashboard/interfaces/video.interface';
import { CourseService } from 'src/app/services/course.service';
@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css'],
})
export class VideoComponent implements OnInit {
  constructor(private router: Router, private courseService: CourseService) {}
  like = 0;
  disLike = 0;
  VideoVisibility = 'hidden';
  PlayButtonVisibility = 'block';
  SetPlayerVideoUrl: string | undefined;
  autoplay = false;
  videoId = '1';
  courseName = '';
  video!: Video;
  ngOnInit(): void {
    if (this.router.url.includes('/video')) {
      this.videoId = this.router.url.split('/')[6];
      console.log('video id:::', this.videoId);
      this.courseService
        .getVideoById(parseInt(this.videoId))
        .subscribe((video) => {
          if (video) {
            this.video = video;
            console.log(this.video);
            this.SetPlayerVideoUrl = this.video?.videoUrl;
            console.log(this.SetPlayerVideoUrl);
          }
        });

      this.courseName = this.router.url.split('/')[4];
      const name: string[] = this.courseName.split('%20');
      this.courseName = name[0] + ' ' + name[1];
    }
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
