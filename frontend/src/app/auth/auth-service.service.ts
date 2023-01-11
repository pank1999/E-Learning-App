import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as CryptoJs from 'crypto-js';
import { Observable } from 'rxjs';
import { localStorageKeys } from '../constants';
import {
  LocalLoggedInUser,
  LoginUser,
  RegisterUser,
} from '../interface/user.types';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  constructor(private http: HttpClient, private userService: UserService) {}
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
        this.userService.set(
          localStorageKeys.LOGGED_IN_USER,
          JSON.stringify(result)
        );
        // this.userService.get(localStorageKeys.TOKEN);
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
      this.userService.set(
        localStorageKeys.REGISTERED_USER,
        JSON.stringify(result)
      );
    });
    return res;
  }
}
