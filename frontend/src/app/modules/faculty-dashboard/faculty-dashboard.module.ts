import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { FacultyRoutingModule } from './dashboard.routing.module';
import { CoursesComponent } from './courses/courses.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddCourseService } from './services/add-course.service';
import { HttpClientModule } from '@angular/common/http';
import { AddCourseImageComponent } from './add-course-image/add-course-image.component';
import { AddCourseImageService } from './services/add-course-image.service';
import { CoursesService } from './services/courses.service';
import { AddVideoDialog } from './course/course.component';
import { AddVideoService } from './services/add-video.service';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { DeleteService } from './services/delete.service';
import { PublishedCourseComponent } from './published-course/published-course.component';

@NgModule({
  declarations: [
    DashboardComponent,
    AddCourseComponent,
    CoursesComponent,
    AddCourseImageComponent,
    AddVideoDialog,
    PublishedCourseComponent,
  ],
  imports: [
    CommonModule,
    FacultyRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatProgressBarModule,
  ],
  providers: [
    AddCourseService,
    AddCourseImageService,
    CoursesService,
    AddVideoService,
    DeleteService,
  ],
})
export class FacultyDashboardModule {}
