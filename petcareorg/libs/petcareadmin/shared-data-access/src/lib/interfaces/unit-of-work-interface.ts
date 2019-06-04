import { IRepository } from './repository-interface';
import { User } from '@petcareorg/petcareadmin/data';

export interface IUnitOfWork {
  user: IRepository<User>;

}
