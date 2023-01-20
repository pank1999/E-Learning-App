import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCourseComponent } from './add-course/add-course.component';
import { CoursesComponent } from './courses/courses.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
  {
    path: 'faculty-dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'courses',
        component: CoursesComponent,
      },
      {
        path: 'add-course',
        component: AddCourseComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, CommonModule],
})
export class FacultyRoutingModule {}
