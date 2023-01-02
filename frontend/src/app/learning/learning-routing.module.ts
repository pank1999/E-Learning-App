import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CourseDashboardComponent } from './course-dashboard/course-dashboard.component';
import { VideoComponent } from './video/video.component';

const routes: Routes = [
  {
    path: 'learning/dashboard/:course',
    component: CourseDashboardComponent,
    children: [
      {
        path: 'video/:subTopicsId',
        component: VideoComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, CommonModule],
})
export class LearningRoutingModule {}
