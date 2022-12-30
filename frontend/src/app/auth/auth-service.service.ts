import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as CryptoJs from 'crypto-js';
import { Observable } from 'rxjs';
import { LoginUser, RegisterUser } from '../interface/user.types';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  constructor(private http: HttpClient) {}
  SecretKey = 'pankajSecureKey';
  loggedInUser$: Observable<any> = new Observable();

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
    // var header = {
    //   headers: new HttpHeaders().set(
    //     'Authorization',
    //     `Bearer ${this.getToken()}`
    //   ),
    // };
    this.loggedInUser$ = await this.http.post(
      'http://localhost:3000/api/v1/auth/login',
      userLoginDetails
    );
    this.loggedInUser$.subscribe(
      (result) => {
        console.log(result);
        this.setToken(JSON.stringify(result));
      },
      (error) => {
        console.log(error);
      }
    );
    return this.loggedInUser$;
  }
  //user registration
  async register(userRegistrationDetails: RegisterUser) {
    console.log(userRegistrationDetails);
    const res = await this.http.post(
      'http://localhost:3000/api/v1/auth/signup',
      userRegistrationDetails
    );
    res.subscribe((result) => {
      console.log('result', result);
      this.setToken(JSON.stringify(result));
      this.getToken();
    });
    return res;
  }
  public setToken(token: string) {
    localStorage.setItem('token', token);
  }
  public getToken() {
    const data = localStorage.getItem('token');
    const parsedData = data && JSON.parse(data);
    const token = parsedData.token;
    console.log('token', token);
    return token;
  }
}
