import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { LearningRoutingModule } from './learning-routing.module';
import { CourseComponent } from './course/course.component';

@NgModule({
  declarations: [
    CourseComponent
  ],
  imports: [CommonModule, MatProgressBarModule, LearningRoutingModule],
  exports: [],
})
export class LearningModule {}
