import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthServiceService } from './auth/auth-service.service';
import { HttpClientModule } from '@angular/common/http';
import { CoursesContainerComponent } from './components/courses-container/courses-container.component';
import { HomeComponent } from './learning/home/home.component';
import { CourseDashboardComponent } from './learning/course-dashboard/course-dashboard.component';
// import { LearningModule } from './learning/learning.module';
import { VideoComponent } from './learning/video/video.component';
import { ProgressbarComponent } from './components/progressbar/progressbar.component';
import { LiveClassDashboardComponent } from './learning/live-class-dashboard/live-class-dashboard.component';
import { CoursesService } from './modules/faculty-dashboard/services/courses.service';
import { AddCourseService } from './modules/faculty-dashboard/services/add-course.service';
import { MatDialogModule } from '@angular/material/dialog';
import { AddVideoService } from './modules/faculty-dashboard/services/add-video.service';
import { CourseComponent } from './modules/faculty-dashboard/course/course.component';
import { AddCourseImageService } from './modules/faculty-dashboard/services/add-course-image.service';
// import { AgoraRTCService } from './services/agoraRTC.service';

import { provideStorage, getStorage } from '@angular/fire/storage';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { FacultyDashboardModule } from './modules/faculty-dashboard/faculty-dashboard.module';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    CoursesContainerComponent,
    HomeComponent,
    CourseDashboardComponent,
    VideoComponent,
    ProgressbarComponent,
    LiveClassDashboardComponent,
    CourseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule,
    MatProgressBarModule,
    provideStorage(() => getStorage()),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    FacultyDashboardModule,
  ],
  providers: [
    AuthServiceService,
    CoursesService,
    AddCourseService,
    AddVideoService,
    AddCourseImageService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
