import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from 'src/app/auth/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthServiceService) {}

  ngOnInit(): void {}
  loginForm = new FormGroup({
    EmailId: new FormControl('', [Validators.required]),
    Password: new FormControl('', [Validators.required]),
  });

  async loginUser(user: any) {
    console.log(user);
    await this.authService.login(user);
  }

  get userEmailIdValidator() {
    return this.loginForm.get('EmailId');
  }
  get userPasswordValidator() {
    return this.loginForm.get('Password');
  }
}
