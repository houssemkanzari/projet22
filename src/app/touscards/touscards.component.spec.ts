import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TouscardsComponent } from './touscards.component';

describe('TouscardsComponent', () => {
  let component: TouscardsComponent;
  let fixture: ComponentFixture<TouscardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TouscardsComponent]
    });
    fixture = TestBed.createComponent(TouscardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
