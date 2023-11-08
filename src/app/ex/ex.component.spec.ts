import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExComponent } from './ex.component';

describe('ExComponent', () => {
  let component: ExComponent;
  let fixture: ComponentFixture<ExComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExComponent]
    });
    fixture = TestBed.createComponent(ExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
