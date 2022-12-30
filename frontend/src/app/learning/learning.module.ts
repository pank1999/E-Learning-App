import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { HomeComponent } from './home/home.component';
// import { CourseDashboardComponent } from './course-dashboard/course-dashboard.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { LearningRoutingModule } from './learning-routing.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, MatProgressBarModule, LearningRoutingModule],
  exports: [],
})
export class LearningModule {}
