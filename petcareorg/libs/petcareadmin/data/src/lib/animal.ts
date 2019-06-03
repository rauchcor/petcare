import { AnimalType } from './animalTypes';

export interface Animal {
  id: string;
  name: string;
  animalTypeId: string;
  taskIds: number[];
  userIds: number[];
  pictureUrl: string;
}
