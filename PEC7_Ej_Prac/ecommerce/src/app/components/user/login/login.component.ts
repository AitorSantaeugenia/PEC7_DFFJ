import { Component, OnDestroy } from '@angular/core';
import { UserService } from '../../../services/user.service';

import {FormBuilder, Validators} from "@angular/forms";
import {User} from "../../../models/user/user";
import {Subscription} from "rxjs";
import {UserStoreService} from "../../../services/user-store.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnDestroy{

  subscriptions: Subscription[] = [];
  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(
    public userStoreService: UserStoreService,
    private userService: UserService,
    private fb: FormBuilder,
    private router: Router) {
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(u => u.unsubscribe());
  }

  doLogin(user: User) {
    this.userService.login(user).subscribe((token) => {
      if (token) {
        this.userStoreService.saveToken(token);
      }
    })
    this.router.navigate(['/article/list']);
  }

  logout(): void {
    this.userStoreService.deleteToken();
  }
}