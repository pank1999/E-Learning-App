import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { FacultyRoutingModule } from './dashboard.routing.module';
import { CoursesComponent } from './courses/courses.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [DashboardComponent, AddCourseComponent, CoursesComponent],
  imports: [CommonModule, FacultyRoutingModule, ReactiveFormsModule],
})
export class FacultyDashboardModule {}
