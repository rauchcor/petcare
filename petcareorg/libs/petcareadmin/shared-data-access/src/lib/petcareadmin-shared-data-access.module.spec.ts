import { async, TestBed } from '@angular/core/testing';
import { PetcareadminSharedDataAccessModule } from './petcareadmin-shared-data-access.module';

describe('PetcareadminSharedDataAccessModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PetcareadminSharedDataAccessModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(PetcareadminSharedDataAccessModule).toBeDefined();
  });
});
