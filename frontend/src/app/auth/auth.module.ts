import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { AuthServiceService } from './auth-service.service';
import { HttpClientModule } from '@angular/common/http';
import { EmailVerificationComponent } from './email-verification/email-verification.component';

@NgModule({
  declarations: [ForgetPasswordComponent, EmailVerificationComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [
    ForgetPasswordComponent,
    AuthServiceService,
    EmailVerificationComponent,
  ],
})
export class AuthModule {}
