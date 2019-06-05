import {
  Controller,
  Body,
  Param,
  Put,
  Delete,
  Get,
  Query,
  Post,
  HttpException
} from '@nestjs/common';
import { User, Animal } from '@petcareorg/petcareadmin/data';
import { UserService } from '../../services/user/user.service';

@Controller('user')
export class UserController {
  constructor(private userSevice: UserService) {}

  @Get()
  findOne(@Query() query: any): User {
    const user = this.userSevice.getUser(query.email, query.password);
    if (user) {
      return user;
    } else {
      throw new HttpException('Not Authorized', 401);
    }
  }
}
