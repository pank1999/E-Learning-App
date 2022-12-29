import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public getUser() {
    const data = localStorage.getItem('token');
    const parsedData = data && JSON.parse(data);
    return parsedData?.user;
  }
  public getUserToken() {
    const data = localStorage.getItem('token');
    const parsedData = data && JSON.parse(data);
    return parsedData.token;
  }
}
