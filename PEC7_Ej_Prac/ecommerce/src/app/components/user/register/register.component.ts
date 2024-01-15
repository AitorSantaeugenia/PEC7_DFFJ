import { Component, OnDestroy } from '@angular/core';
import { UserService } from '../../../services/user.service';
import {Subscription} from "rxjs";
import {FormBuilder, Validators} from "@angular/forms";
import {User} from "../../../models/user/user";
import {UserStoreService} from "../../../services/user-store.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnDestroy {

  subscriptions: Subscription[] = [];
  registerForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(
    private userStoreService: UserStoreService,
    private userService: UserService,
    private fb: FormBuilder,
    private router: Router) {
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(u => u.unsubscribe());
  }

  doRegister(user: User) {
    this.userService.register(user).subscribe((token) => {
      this.userStoreService.saveToken(token);
    })
    this.router.navigate(['/article/list']);
  }
}