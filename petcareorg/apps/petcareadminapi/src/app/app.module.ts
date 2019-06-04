import { Module } from '@nestjs/common';
import { UserService } from './services/user/user.service';
import { UserController } from './controllers/user/user.controller';
import { AnimalController } from './controllers/animal/animal.controller';
import { AnimalTypeController } from './controllers/animal-type/animal-type.controller';
import { AnimalService } from './services/animal/animal.service';
import { AnimalTypeService } from './services/animal-type/animal-type.service';

@Module({
  imports: [],
  controllers: [UserController, AnimalController, AnimalTypeController],
  providers: [UserService, AnimalService, AnimalTypeService],
})
export class AppModule {}
