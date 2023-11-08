import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Serche2Component } from './serche2.component';

describe('Serche2Component', () => {
  let component: Serche2Component;
  let fixture: ComponentFixture<Serche2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Serche2Component]
    });
    fixture = TestBed.createComponent(Serche2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
