import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DciComponent } from './dci.component';

describe('DciComponent', () => {
  let component: DciComponent;
  let fixture: ComponentFixture<DciComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DciComponent]
    });
    fixture = TestBed.createComponent(DciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
