import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as CryptoJs from 'crypto-js';
import { LoginUser, RegisterUser } from '../interface/user.types';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  constructor(private http: HttpClient) {}
  SecretKey = 'pankajSecureKey';
  //password encryption
  public passwordEncyption(password: string) {
    var hashedPassword = CryptoJs.AES.encrypt(
      password,
      this.SecretKey
    ).toString();
    return hashedPassword;
  }
  //login user
  async login(userLoginDetails: LoginUser) {
    console.log(userLoginDetails);
    const res = await this.http.post(
      'http://localhost:3000/login',
      userLoginDetails
    );
    console.log(res);
  }
  //user registration
  async register(userRegistrationDetails: RegisterUser) {
    console.log(userRegistrationDetails);
    const res = await this.http.post(
      'http://localhost:3000/register',
      userRegistrationDetails
    );
    console.log(res);
  }
}
