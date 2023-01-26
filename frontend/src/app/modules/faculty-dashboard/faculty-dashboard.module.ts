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

@NgModule({
  declarations: [
    DashboardComponent,
    AddCourseComponent,
    CoursesComponent,
    AddCourseImageComponent,
  ],
  imports: [
    CommonModule,
    FacultyRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [AddCourseService, AddCourseImageService],
})
export class FacultyDashboardModule {}
