import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalsOverviewComponent } from './animals-overview.component';

describe('AnimalsOverviewComponent', () => {
  let component: AnimalsOverviewComponent;
  let fixture: ComponentFixture<AnimalsOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalsOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
