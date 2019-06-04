import { Injectable } from '@nestjs/common';
import { AnimalTypes } from '../../mock-data/mock-data';
import { AnimalType } from '@petcareorg/petcareadmin/data';

@Injectable()
export class AnimalTypeService {

  getAll() : AnimalType[]{
    return AnimalTypes;
  }

  getOne(id: string) : AnimalType{
    return AnimalTypes.find(a => a.id === id);
  }
}
