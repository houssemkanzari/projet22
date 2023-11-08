import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cl4Component } from './cl4.component';

describe('Cl4Component', () => {
  let component: Cl4Component;
  let fixture: ComponentFixture<Cl4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Cl4Component]
    });
    fixture = TestBed.createComponent(Cl4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
