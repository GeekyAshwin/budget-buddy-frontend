import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMonthlyBudgetComponent } from './list-monthly-budget.component';

describe('ListMonthlyBudgetComponent', () => {
  let component: ListMonthlyBudgetComponent;
  let fixture: ComponentFixture<ListMonthlyBudgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListMonthlyBudgetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListMonthlyBudgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
