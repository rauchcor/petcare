import { Injectable } from '@angular/core';
import { IRepository } from './interfaces/repository-interface';
import { User } from '@petcareorg/petcareadmin/data';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import {tap} from 'rxjs/operators';

export const anonoumousUser: User = {
  email:"",
  firstname: "",
  id: "0",
  lastname: "",
  password: "",
  role: ""
}
@Injectable({
  providedIn: 'root'
})
export class UserRepositoryService  implements IRepository<User>{
  constructor(private http: HttpClient) { }
  private _currentUser:BehaviorSubject<User> = new BehaviorSubject<User>(anonoumousUser);
  currentUser$: Observable<User> = this._currentUser.asObservable();

  get(): Observable<User> {
    const httpParams = new HttpParams();
    httpParams.set('email', '');
    const params = new HttpParams().set('email', "this.email");

    const headers = new HttpHeaders().set('Accept', 'application/json');

    const reqObj = { params, headers };
    return this.http.get<User>('/api/user', reqObj).pipe(tap(
      t => this._currentUser.next(t)));
  }
  getAll():  Observable<User[]> {
    throw new Error("Method not implemented.");
  }
  getById():  Observable<User> {
    throw new Error("Method not implemented.");
  }
  post():  Observable<User> {
    throw new Error("Method not implemented.");
  }
  delete(): void {
    throw new Error("Method not implemented.");
  }
}
