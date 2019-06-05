import { async, TestBed } from '@angular/core/testing';
import { PetcareadminUtilsLoginModule } from './petcareadmin-utils-login.module';

describe('PetcareadminUtilsLoginModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PetcareadminUtilsLoginModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(PetcareadminUtilsLoginModule).toBeDefined();
  });
});
