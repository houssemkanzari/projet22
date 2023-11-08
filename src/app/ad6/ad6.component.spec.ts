import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ad6Component } from './ad6.component';

describe('Ad6Component', () => {
  let component: Ad6Component;
  let fixture: ComponentFixture<Ad6Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Ad6Component]
    });
    fixture = TestBed.createComponent(Ad6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
