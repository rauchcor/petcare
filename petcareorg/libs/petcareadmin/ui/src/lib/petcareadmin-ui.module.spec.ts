import { async, TestBed } from '@angular/core/testing';
import { PetcareadminUiModule } from './petcareadmin-ui.module';

describe('PetcareadminUiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PetcareadminUiModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(PetcareadminUiModule).toBeDefined();
  });
});
