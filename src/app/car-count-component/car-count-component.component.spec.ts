import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarCountComponentComponent } from './car-count-component.component';

describe('CarCountComponentComponent', () => {
  let component: CarCountComponentComponent;
  let fixture: ComponentFixture<CarCountComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarCountComponentComponent]
    });
    fixture = TestBed.createComponent(CarCountComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
