import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChargeurComponent } from './chargeur.component';

describe('ChargeurComponent', () => {
  let component: ChargeurComponent;
  let fixture: ComponentFixture<ChargeurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChargeurComponent]
    });
    fixture = TestBed.createComponent(ChargeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
