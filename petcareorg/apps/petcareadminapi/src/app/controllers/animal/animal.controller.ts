import { Controller, Get, Query, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { Animal, AnimalType } from '@petcareorg/petcareadmin/data';
import { AnimalService } from '../../services/animal/animal.service';


@Controller('animal')
export class AnimalController {
  constructor(private animalService: AnimalService) {
  }
  @Post()
  create(@Body() animal: Animal) {
    return 'This action adds a new cat';
  }

  @Get()
  findAll(@Query() query: Animal) {
    return this.animalService.getAllAnimalsByAnimalType(query.animalTypeId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a #${id} cat`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() animal: Animal) {
    return `This action updates a #${id} cat`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} cat`;
  }
}
