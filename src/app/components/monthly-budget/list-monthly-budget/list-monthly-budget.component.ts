import {Component, OnInit} from '@angular/core';
import {LayoutComponent} from "../../layout/layout.component";
import {BudgetService} from "../../../services/budget/budget.service";
import {CommonModule} from "@angular/common";
import IBudget from "../../../interfaces/IBudget";
import dayjs from "dayjs";
import {DayjsService} from "../../../services/dayjs/dayjs.service";

@Component({
  selector: 'app-list-monthly-budget',
  standalone: true,
  imports: [
    LayoutComponent,
    CommonModule,
  ],
  templateUrl: './list-monthly-budget.component.html',
  styleUrl: './list-monthly-budget.component.css'
})
export class ListMonthlyBudgetComponent implements OnInit{

  public budgets: Array<IBudget>  = [];
  constructor(private budgetService: BudgetService, protected dayJsService: DayjsService) {
  }

  ngOnInit() {
    this.listBudgets();
  }

  listBudgets() {
    this.budgetService.listBudget().subscribe({
      next: (data:any) => {
        this.budgets = data.data;
      },
      error: (error) => {
        console.error(error)
      }
    })
  }

  protected readonly dayjs = dayjs;
}
