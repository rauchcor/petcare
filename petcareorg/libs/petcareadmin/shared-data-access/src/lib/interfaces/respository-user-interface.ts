import { Observable } from 'rxjs';
import { IRepository } from './repository-interface';
import { User } from '@petcareorg/petcareadmin/data';

export interface IUserRepository extends IRepository<User> {
    getByUsernameAndPassword(username:string, password: string) : Observable<User>;
}
