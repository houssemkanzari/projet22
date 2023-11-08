import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestemComponent } from './testem.component';

describe('TestemComponent', () => {
  let component: TestemComponent;
  let fixture: ComponentFixture<TestemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestemComponent]
    });
    fixture = TestBed.createComponent(TestemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
