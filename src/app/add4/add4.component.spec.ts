import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Add4Component } from './add4.component';

describe('Add4Component', () => {
  let component: Add4Component;
  let fixture: ComponentFixture<Add4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Add4Component]
    });
    fixture = TestBed.createComponent(Add4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
