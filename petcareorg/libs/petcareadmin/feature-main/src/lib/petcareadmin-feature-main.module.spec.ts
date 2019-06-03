import { async, TestBed } from '@angular/core/testing';
import { PetcareadminFeatureMainModule } from './petcareadmin-feature-main.module';

describe('PetcareadminFeatureMainModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PetcareadminFeatureMainModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(PetcareadminFeatureMainModule).toBeDefined();
  });
});
