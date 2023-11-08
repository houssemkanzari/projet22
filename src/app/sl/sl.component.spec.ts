import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlComponent } from './sl.component';

describe('SlComponent', () => {
  let component: SlComponent;
  let fixture: ComponentFixture<SlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SlComponent]
    });
    fixture = TestBed.createComponent(SlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
