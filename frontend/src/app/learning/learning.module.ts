import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CourseDashboardComponent } from './course-dashboard/course-dashboard.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  declarations: [HomeComponent, CourseDashboardComponent],
  imports: [CommonModule, MatProgressBarModule],
  exports: [HomeComponent, CourseDashboardComponent],
})
export class LearningModule {}
