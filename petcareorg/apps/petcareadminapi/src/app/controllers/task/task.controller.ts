import { Controller, Param, Delete, Put, Get, Body, Query, Post } from '@nestjs/common';
import { Task } from '@petcareorg/petcareadmin/data';

@Controller('task')
export class TaskController {

  @Post()
  create(@Body() animal: Task) {
    return 'This action adds a new cat';
  }

  @Get()
  findAllByTaskIds(@Query() query: any) {
    return `This action returns all cats (limit: ${query.limit} items)`;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a #${id} cat`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() animal: Task) {
    return `This action updates a #${id} cat`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} cat`;
  }
}
