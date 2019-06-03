import { async, TestBed } from '@angular/core/testing';
import { PetcareadminFeatureAnimalsModule } from './petcareadmin-feature-animals.module';

describe('PetcareadminFeatureAnimalsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PetcareadminFeatureAnimalsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(PetcareadminFeatureAnimalsModule).toBeDefined();
  });
});
