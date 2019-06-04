import { AnimalType } from './animalTypes';

export interface Animal {
  id: string;
  name: string;
  animalTypeId: string;
  taskIds: string[];
  userIds: string[];
  pictureUrl: string;
}
