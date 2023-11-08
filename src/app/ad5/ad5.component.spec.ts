import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ad5Component } from './ad5.component';

describe('Ad5Component', () => {
  let component: Ad5Component;
  let fixture: ComponentFixture<Ad5Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Ad5Component]
    });
    fixture = TestBed.createComponent(Ad5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
