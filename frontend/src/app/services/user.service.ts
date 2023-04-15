import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthServiceService } from '../auth/auth-service.service';
import { localStorageKeys } from '../constants';
import { IUsersCourse } from '../interface/user-course';
import {
  LocalLoggedInUser,
  LoggedInUserDetails,
} from '../interface/user.types';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  public async getUserDetails() {
    if (this.get(localStorageKeys.USER_DETAILS)) {
      return this.get(localStorageKeys.USER_DETAILS);
    }
    const localLoggedInUser = this.get(localStorageKeys.LOGGED_IN_USER);
    const UserDetails$ = await this.http.get(
      `http://localhost:3000/api/v1/auth/user/${localLoggedInUser.user.email}`
    );
    UserDetails$.subscribe((result) => {
      this.set(localStorageKeys.USER_DETAILS, JSON.stringify(result));
    });
  }
  public set(key: string, value: string) {
    localStorage.setItem(key, value);
  }
  public get(key: string) {
    const data = localStorage.getItem(key);
    return data && JSON.parse(data);
  }

  public getUsersCourses() {
    const loggedInUser: LoggedInUserDetails = this.get(
      localStorageKeys.USER_DETAILS
    );
    return this.http.get<IUsersCourse[]>(
      `http://localhost:3000/api/v1/course/usersCourse/${loggedInUser.id}}`
    );
  }
}
