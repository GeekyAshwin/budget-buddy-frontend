import {Component, OnInit} from '@angular/core';
import {LayoutComponent} from "../../layout/layout.component";
import {ExpenseService} from "../../../services/expense/expense.service";
import {NgForOf} from "@angular/common";
import IExpense from "../../../interfaces/IExpense";
import {DayjsService} from "../../../services/dayjs/dayjs.service";
import dayjs from "dayjs";

@Component({
  selector: 'app-list-expense',
  standalone: true,
  imports: [
    LayoutComponent,
    NgForOf
  ],
  templateUrl: './list-expense.component.html',
  styleUrl: './list-expense.component.css'
})
export class ListExpenseComponent implements OnInit{

  public expenses: Array<IExpense> = [];
  constructor(private expenseService: ExpenseService, protected dayJsService: DayjsService) {
  }
  ngOnInit() {
    this.listExpenses();
  }

  listExpenses() {
    return this.expenseService.listExpense().subscribe({
      next: (data: any) => {
        this.expenses = data.data;
      },
      error: (error) => {
        console.error(error)
      }
    });
  }

  protected readonly dayjs = dayjs;
}
