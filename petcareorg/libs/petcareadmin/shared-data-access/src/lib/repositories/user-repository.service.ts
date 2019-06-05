import { Injectable } from '@angular/core';
import { IRepository } from '../interfaces/repository-interface';
import { User } from '@petcareorg/petcareadmin/data';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import {tap} from 'rxjs/operators';
import { IUserRepository } from '../interfaces/respository-user-interface';

@Injectable({
  providedIn: 'root'
})
export class UserRepositoryService  implements IUserRepository {

  constructor(private http: HttpClient) { }

  getByUsernameAndPassword(username: string, password: string): Observable<User> {
    const params = new HttpParams().set('email', username).set('password', password);
    const headers = new HttpHeaders().set('Accept', 'application/json');

    const reqObj = { params, headers };
    return this.http.get<User>('/api/user', reqObj);
  }

  get(query: any): Observable<User> {
    throw new Error("Method not implemented.");
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
