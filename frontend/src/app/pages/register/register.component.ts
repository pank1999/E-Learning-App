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
    Name: new FormControl('', [Validators.required]),
    EmailId: new FormControl('', [Validators.required]),
    DOB: new FormControl([Validators.required]),
    Gender: new FormControl('Male', [Validators.required]),
    Password: new FormControl('', [Validators.required]),
  });

  async registerUser(user: any) {
    console.log(user);
    const password = await this.authService.passwordEncyption(user.password);
    console.log(password);
    await this.authService.register(user);
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
