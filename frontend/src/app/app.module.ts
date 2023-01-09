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
// import { AgoraRTCService } from './services/agoraRTC.service';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [AuthServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
