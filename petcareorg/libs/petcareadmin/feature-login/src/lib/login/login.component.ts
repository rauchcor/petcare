import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from '@petcareorg/petcareadmin/data';
import { AuthService } from '@petcareorg/petcareadmin/utils-login';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'petcareorg-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  user: User;
  email: string;
  password: string;
  isAuthenticated$: any;
  sub: Subscription;
  loginclick= false;
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {}

  login() {
    this.loginclick = true;
    this.authService.login(this.email, this.password);
    this.isAuthenticated$ = this.authService.isAuthenticated$;
    this.sub = this.isAuthenticated$.subscribe(t => {
     if (t) {
      this.router.navigate(['/main']);
     }
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
