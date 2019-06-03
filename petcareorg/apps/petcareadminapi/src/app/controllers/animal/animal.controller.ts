import { Controller, Get, Query, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { Animal } from '@petcareorg/petcareadmin/data';


@Controller('animal')
export class AnimalController {
  @Post()
  create(@Body() animal: Animal) {
    return 'This action adds a new cat';
  }

  @Get()
  findAll(@Query() query: any) {
    return `This action returns all cats (limit: ${query.limit} items)`;
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
