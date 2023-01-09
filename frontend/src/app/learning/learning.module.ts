import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { LearningRoutingModule } from './learning-routing.module';
import { CourseComponent } from './course/course.component';
import { LiveClassDashboardComponent } from './live-class-dashboard/live-class-dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LobbyComponent } from './lobby/lobby.component';
import { AgoraRTCService } from '../services/agoraRTC.service';
@NgModule({
  declarations: [CourseComponent, LiveClassDashboardComponent, LobbyComponent],
  imports: [
    CommonModule,
    MatProgressBarModule,
    LearningRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [AgoraRTCService],
  exports: [],
})
export class LearningModule {}
