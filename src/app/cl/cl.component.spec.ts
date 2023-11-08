import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClComponent } from './cl.component';

describe('ClComponent', () => {
  let component: ClComponent;
  let fixture: ComponentFixture<ClComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClComponent]
    });
    fixture = TestBed.createComponent(ClComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
