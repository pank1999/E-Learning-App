import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { AuthServiceService } from './auth-service.service';
import { EmailVerificationComponent } from './email-verification/email-verification.component';
import { AuthInterceptor } from './auth.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [ForgetPasswordComponent, EmailVerificationComponent],
  imports: [CommonModule],
  exports: [ForgetPasswordComponent, EmailVerificationComponent],
  providers: [
    AuthServiceService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
})
export class AuthModule {}
