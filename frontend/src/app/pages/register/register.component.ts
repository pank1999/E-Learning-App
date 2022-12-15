import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormControlName,
  Validator,
  Validators,
} from '@angular/forms';
// import { user } from '../../interface/user.types';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  registerForm = new FormGroup({
    Name: new FormControl('', [Validators.required]),
    EmailId: new FormControl('', [Validators.required]),
    DOB: new FormControl([Validators.required]),
    Gender: new FormControl('Male', [Validators.required]),
    Password: new FormControl('', [Validators.required]),
  });

  registerUser(user: any) {
    console.log(user);
  }
  get userNameValidator() {
    return this.registerForm.get('Name');
  }
  get userEmailIdValidator() {
    return this.registerForm.get('EmailId');
  }
  get userDOBValidator() {
    return this.registerForm.get('DOB');
  }
  get userGenderValidator() {
    return this.registerForm.get('Gender');
  }
  get userPasswordValidator() {
    return this.registerForm.get('Password');
  }
}
