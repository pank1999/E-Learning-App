import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from 'src/app/auth/auth-service.service';
import { LoginUser } from 'src/app/interface/user.types';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private authService: AuthServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  async loginUser(user: any) {
    console.log(user);
    await this.authService.login(user);
    await this.router.navigate(['/learning']);
  }

  get userEmailIdValidator() {
    return this.loginForm.get('email');
  }
  get userPasswordValidator() {
    return this.loginForm.get('password');
  }
}
