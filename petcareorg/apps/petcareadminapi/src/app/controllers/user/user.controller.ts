import { Controller, Body, Param, Put, Delete, Get, Query, Post, HttpException } from '@nestjs/common';
import { User, Animal } from '@petcareorg/petcareadmin/data';
import { UserService } from '../../services/user/user.service';

@Controller('user')
export class UserController {
  constructor(private userSevice: UserService) {
  }

  @Get()
  findOne(@Query() email: any) : User| HttpException{
    const user = this.userSevice.getUser(email.email);
    if(user){
      return user;
    }else {
      return new HttpException("Not found", 501);
    }
  }
}
