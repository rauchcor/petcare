import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { User } from '@petcareorg/petcareadmin/data';
import { Router } from '@angular/router';

@Component({
  selector: 'petcareorg-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: User;
  email:string;
  password: string;
  constructor(private httpClient: HttpClient, private router: Router) {}

  ngOnInit() {}

  login() {
    const httpParams = new HttpParams();
    httpParams.set('email', '');
    const params = new HttpParams().set('email', this.email);

    const headers = new HttpHeaders().set('Accept', 'application/json');

    const reqObj = { params, headers };
    this.httpClient.get<User>('/api/user', reqObj).subscribe(
      t => {
        console.log(t);
        this.user = t;
        this.router.navigate(['/main']);
      },
      error => console.log(error)
    );
  }
}
