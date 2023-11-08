import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarmodelComponent } from './carmodel.component';

describe('CarmodelComponent', () => {
  let component: CarmodelComponent;
  let fixture: ComponentFixture<CarmodelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarmodelComponent]
    });
    fixture = TestBed.createComponent(CarmodelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
