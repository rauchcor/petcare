import { TestBed } from '@angular/core/testing';

import { PetcareadminUnitOfWorkService } from './petcareadmin-unit-of-work.service';

describe('PetcareadminUnitOfWorkService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PetcareadminUnitOfWorkService = TestBed.get(PetcareadminUnitOfWorkService);
    expect(service).toBeTruthy();
  });
});
