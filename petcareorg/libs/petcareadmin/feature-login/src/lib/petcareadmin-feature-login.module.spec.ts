import { async, TestBed } from '@angular/core/testing';
import { PetcareadminFeatureLoginModule } from './petcareadmin-feature-login.module';

describe('PetcareadminFeatureLoginModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PetcareadminFeatureLoginModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(PetcareadminFeatureLoginModule).toBeDefined();
  });
});
