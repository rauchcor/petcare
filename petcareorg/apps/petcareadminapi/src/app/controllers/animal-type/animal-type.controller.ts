import { Controller, Body, Param, Put, Delete, Get, Query, Post } from '@nestjs/common';
import { AnimalType } from '@petcareorg/petcareadmin/data';
import { AnimalTypeService } from '../../services/animal-type/animal-type.service';

@Controller('animal-type')
export class AnimalTypeController {
  constructor(private animalTypeService: AnimalTypeService) {

  }
  @Post()
  create(@Body() animal: AnimalType) {
    return 'This action adds a new cat';
  }

  @Get()
  findAll(@Query() query: any) {
    return this.animalTypeService.getAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a #${id} cat`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() animal: AnimalType) {
    return `This action updates a #${id} cat`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} cat`;
  }
}
