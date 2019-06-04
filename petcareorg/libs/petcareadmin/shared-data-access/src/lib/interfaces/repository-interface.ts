import { Observable } from 'rxjs';

export interface IRepository<T> {
  get(): Observable<T>;
  getAll(): Observable<T[]>;
  getById(): Observable<T>;
  post(): Observable<T>;
  delete(): void;
}
