import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { ForgetPasswordComponent } from './auth/forget-password/forget-password.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CourseComponent } from './learning/course/course.component';
import { HomeComponent } from './learning/home/home.component';
import { LearningRoutingModule } from './learning/learning-routing.module';
import { FacultyRoutingModule } from './modules/faculty-dashboard/dashboard.routing.module';
import { DashboardComponent } from './modules/faculty-dashboard/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  { path: 'forgetPassword', component: ForgetPasswordComponent },
  {
    path: 'learning',
    component: HomeComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
  },
  {
    path: 'course-details/:id',
    component: CourseComponent,
  },
  {
    path: 'faculty-dashboard',
    component: DashboardComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    LearningRoutingModule,
    FacultyRoutingModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
