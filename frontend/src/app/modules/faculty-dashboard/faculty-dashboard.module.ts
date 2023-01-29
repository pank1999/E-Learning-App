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
import { MatDialogClose } from '@angular/material/dialog';
import { AddVideoDialog } from './course/course.component';
import { AddVideoService } from './services/add-video.service';

@NgModule({
  declarations: [
    DashboardComponent,
    AddCourseComponent,
    CoursesComponent,
    AddCourseImageComponent,
    AddVideoDialog,
  ],
  imports: [
    CommonModule,
    FacultyRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [AddCourseService, AddCourseImageService, CoursesService,AddVideoService],
})
export class FacultyDashboardModule {}
