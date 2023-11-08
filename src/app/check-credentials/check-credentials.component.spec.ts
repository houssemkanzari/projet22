import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckCredentialsComponent } from './check-credentials.component';

describe('CheckCredentialsComponent', () => {
  let component: CheckCredentialsComponent;
  let fixture: ComponentFixture<CheckCredentialsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckCredentialsComponent]
    });
    fixture = TestBed.createComponent(CheckCredentialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
