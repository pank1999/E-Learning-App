import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  loginForm = new FormGroup({
    EmailId: new FormControl('', [Validators.required]),
    Password: new FormControl('', [Validators.required]),
  });

  loginUser(user: any) {
    console.log(user);
  }

  get userEmailIdValidator() {
    return this.loginForm.get('EmailId');
  }
  get userPasswordValidator() {
    return this.loginForm.get('Password');
  }
}
