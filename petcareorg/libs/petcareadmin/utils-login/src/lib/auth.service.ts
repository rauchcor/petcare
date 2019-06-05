import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '@petcareorg/petcareadmin/data';
import { PetcareadminUnitOfWorkService } from '@petcareorg/petcareadmin/shared-data-access';
import { catchError } from 'rxjs/operators';

export const anonymous: User = {
  email: '',
  firstname: '',
  id: '0',
  lastname: '',
  password: '',
  role: ''
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _currentUser: BehaviorSubject<User> = new BehaviorSubject<User>(
    anonymous
  );
  currentUser$: Observable<User> = this._currentUser.asObservable();

  private _isAuthenticated: BehaviorSubject<boolean> = new BehaviorSubject<
    boolean
  >(false);
  isAuthenticated$: Observable<boolean> = this._isAuthenticated.asObservable();

  constructor(private unitOfWork: PetcareadminUnitOfWorkService) {}

  login(email: string, password: string) {
    this.unitOfWork.user.getByUsernameAndPassword(email, password).subscribe(
      t => {
        this._currentUser.next(t);
        this._isAuthenticated.next(true);
      },
      error => {
        this._currentUser.next(anonymous);
        this._isAuthenticated.next(false);
      }
    );
  }

  logout() {
    this._currentUser.next(anonymous);
    this._isAuthenticated.next(false);
  }
}
