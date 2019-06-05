import { Observable } from 'rxjs';

export interface IRepository<T> {
  getAll(): Observable<T[]>;
  getById(id: string): Observable<T>;
  post(createObject: T): Observable<T>;
  delete(object: T): void;
}
