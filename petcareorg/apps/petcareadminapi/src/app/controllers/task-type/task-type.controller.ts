import { Controller, Param, Get, Query } from '@nestjs/common';

@Controller('task-type')
export class TaskTypeController {
  @Get()
  findAll(@Query() query: any) {
    return `This action returns all cats (limit: ${query.limit} items)`;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a #${id} cat`;
  }

}
