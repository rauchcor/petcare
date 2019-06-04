import { Component, OnInit } from '@angular/core';
import { User } from '@petcareorg/petcareadmin/data';
import { PetcareadminUnitOfWorkService } from '@petcareorg/petcareadmin/shared-data-access';
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
  constructor(private router: Router, private unitOfWork: PetcareadminUnitOfWorkService) {}

  ngOnInit() {}

  login() {
    this.unitOfWork
        .user
        .get()
        .subscribe(
          t => {
            console.log(t);
            this.user = t;
            this.router.navigate(['/main']);
          },
          error => console.log(error)
        );;
  }
}
