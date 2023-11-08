import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandeChartComponent } from './commande-chart.component';

describe('CommandeChartComponent', () => {
  let component: CommandeChartComponent;
  let fixture: ComponentFixture<CommandeChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommandeChartComponent]
    });
    fixture = TestBed.createComponent(CommandeChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
