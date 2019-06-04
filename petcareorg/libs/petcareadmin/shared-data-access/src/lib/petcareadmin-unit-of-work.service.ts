import { Injectable } from '@angular/core';
import { IUnitOfWork } from './interfaces/unit-of-work-interface';
import { IRepository } from './interfaces/repository-interface';
import { User } from '@petcareorg/petcareadmin/data';
import { UserRepositoryService } from './user-repository.service';

@Injectable({
  providedIn: 'root'
})
export class PetcareadminUnitOfWorkService implements IUnitOfWork{
  constructor(private userRepository: UserRepositoryService) {
  }
  user: IRepository<User> = this.userRepository;


}
