import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { AuthServiceService } from './auth-service.service';
import { EmailVerificationComponent } from './email-verification/email-verification.component';

@NgModule({
  declarations: [ForgetPasswordComponent, EmailVerificationComponent],
  imports: [CommonModule],
  exports: [ForgetPasswordComponent, EmailVerificationComponent],
  providers: [AuthServiceService],
})
export class AuthModule {}
