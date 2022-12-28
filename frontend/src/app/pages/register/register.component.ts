import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormControlName,
  Validator,
  Validators,
} from '@angular/forms';
import { AuthServiceService } from 'src/app/auth/auth-service.service';
// import { user } from '../../interface/user.types';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(private authService: AuthServiceService) {}

  ngOnInit(): void {}
  registerForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    dob: new FormControl([Validators.required]),
    gender: new FormControl('Male', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  async registerUser(user: any) {
    console.log(user);
    // const password = await this.authService.passwordEncyption(user.password);
    // console.log(password);
    await this.authService.register(user);
  }
  get userNameValidator() {
    return this.registerForm.get('name');
  }
  get userEmailIdValidator() {
    return this.registerForm.get('email');
  }
  get userDOBValidator() {
    return this.registerForm.get('dob');
  }
  get userGenderValidator() {
    return this.registerForm.get('gender');
  }
  get userPasswordValidator() {
    return this.registerForm.get('password');
  }
}
