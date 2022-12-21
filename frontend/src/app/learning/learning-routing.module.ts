import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CourseDashboardComponent } from './course-dashboard/course-dashboard.component';

const routes: Routes = [
  {
    path: 'learning/dashboard/:courseName',
    component: CourseDashboardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, CommonModule],
})
export class LearningRoutingModule {}
