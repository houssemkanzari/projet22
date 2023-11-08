import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sidbar2Component } from './sidbar2.component';

describe('Sidbar2Component', () => {
  let component: Sidbar2Component;
  let fixture: ComponentFixture<Sidbar2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Sidbar2Component]
    });
    fixture = TestBed.createComponent(Sidbar2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
