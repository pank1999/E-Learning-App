import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { localStorageKeys } from 'src/app/constants';
import { LoggedInUserDetails } from 'src/app/interface/user.types';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private userService: UserService, private route: Router) {}
  User!: LoggedInUserDetails | null;
  ngOnInit(): void {
    this.route.events.subscribe(async (val: any) => {
      if (val.url) {
        if (localStorage.getItem(localStorageKeys.LOGGED_IN_USER)) {
          this.User = await this.userService.getUserDetails();
          console.log(this.User);
        }
      }
    });
  }
  async logout() {
    console.log('i am clicked');
    this.User = null;
    await localStorage.removeItem(localStorageKeys.LOGGED_IN_USER);
    this.route.navigate(['/']);
  }
}
