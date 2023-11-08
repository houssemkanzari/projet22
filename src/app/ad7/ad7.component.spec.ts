import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ad7Component } from './ad7.component';

describe('Ad7Component', () => {
  let component: Ad7Component;
  let fixture: ComponentFixture<Ad7Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Ad7Component]
    });
    fixture = TestBed.createComponent(Ad7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
