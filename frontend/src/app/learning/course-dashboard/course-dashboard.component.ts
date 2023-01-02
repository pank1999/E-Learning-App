import { NONE_TYPE } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { coursePLaylist } from 'src/assets/DummyData/course-playlsit';
@Component({
  selector: 'app-course-dashboard',
  templateUrl: './course-dashboard.component.html',
  styleUrls: ['./course-dashboard.component.css'],
})
export class CourseDashboardComponent implements OnInit {
  constructor(private router: Router) {}
  coursePlayList = coursePLaylist;
  Username = 'Pankaj1999';
  url: string = '';
  courseName = '';
  ngOnInit(): void {
    this.courseName = this.router.url.split('/')[3];
    console.log(this.courseName);
  }

  ToggleSubTopics(id: number) {
    console.log('Toggle Sub Topics', id);
    this.coursePlayList[id - 1].Toggle = !coursePLaylist[id - 1].Toggle;
  }
  playNext(sectionId: number, subTopicId: number) {
    this.url = `learning/dashboard/${this.courseName}/video/${subTopicId}`;

    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([`/${this.url}`]).then(() => {
        console.log(`After navigation I am on:${this.router.url}`);
      });
    });
    console.log(this.url);
  }
}
