import { Test, TestingModule } from '@nestjs/testing';
import { TaskTypeController } from './task-type.controller';

describe('TaskType Controller', () => {
  let controller: TaskTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TaskTypeController],
    }).compile();

    controller = module.get<TaskTypeController>(TaskTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
