import {Component, OnInit} from '@angular/core';
import {LayoutComponent} from "../layout/layout.component";
import {MonthlyExpenseService} from "../../services/monthly-expense/monthly-expense.service";
import moment from "moment";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    LayoutComponent,
    CommonModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{

  public data: any = {};
  public month: string = moment().format('YYYY-MM-DD');
  public current_month: string = moment().format('MMMM')

  constructor(private monthlyExpenseService: MonthlyExpenseService) {
  }
  ngOnInit() {
    this.getMonthlyExpenseData();
  }

  getMonthlyExpenseData() {
    this.monthlyExpenseService.getMonthlyExpenses(this.month).subscribe({
      next: (data: any) => {
        this.data = data.data;
      },
      error: (error) => {
        console.error(error)
      }
    })
  }




}
