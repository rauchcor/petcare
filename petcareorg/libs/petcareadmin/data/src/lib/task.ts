import { TaskType } from './taskType';

export interface Task {
  id: string;
  name: string;
  taskTypeId: string;
  description: string;
  amount:number;
  unit: string;
}
