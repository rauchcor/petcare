import { Injectable } from '@nestjs/common';
import { Task } from '@petcareorg/petcareadmin/data';
import { TaskList } from '../../mock-data/mock-data';

@Injectable()
export class TaskService {

  getAllTasksById(taskIds: string[]): Task[] {
    return taskIds.map(x => {
      const task = TaskList.find(t => t.id === x);
      if (task) {
        return task;
      }
    });
  }
}
