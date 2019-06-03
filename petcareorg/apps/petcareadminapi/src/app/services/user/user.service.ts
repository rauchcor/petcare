import { Injectable } from '@nestjs/common';
import { UserList } from '../../mock-data/mock-data';
import { User } from '@petcareorg/petcareadmin/data';

@Injectable()
export class UserService {

  getUser(email: string) : User{
   return UserList.find(x => x.email === email)
  }
}
