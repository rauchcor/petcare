import { Injectable } from '@nestjs/common';
import { Animal } from '@petcareorg/petcareadmin/data';
import { Animals } from '../../mock-data/mock-data';

@Injectable()
export class AnimalService {

  getAll() : Animal[] {
    return Animals;
  }

  getAllAnimalsByAnimalType(animalTypeId: string) : Animal[]{
   return Animals.filter(x => x.animalTypeId === animalTypeId);
  }

}
