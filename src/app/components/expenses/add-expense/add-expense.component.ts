import {Component, OnInit} from '@angular/core';
import {LayoutComponent} from "../../layout/layout.component";
import {ExpenseService} from "../../../services/expense/expense.service";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {errorContext} from "rxjs/internal/util/errorContext";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-expense',
  standalone: true,
  imports: [
    LayoutComponent,
    ReactiveFormsModule
  ],
  templateUrl: './add-expense.component.html',
  styleUrl: './add-expense.component.css'
})
export class AddExpenseComponent implements OnInit{
  /**
   * {
   *     "date": "2024-08-01",
   *     "userId": "60d0fe4f5311236168a109ca",
   *     "foodAndHomeUtilities": 300,
   *     "personalExpense": 40,
   *     "snacksExpense": 10,
   *     "items": "Biscuit, Toffess"
   *
   * }
   */
  public form: FormGroup = new FormGroup<any>({})
  constructor(private expenseService: ExpenseService, private formBuilder: FormBuilder, private router: Router) {
  }
  ngOnInit() {
    this.setUpForm();
  }

  setUpForm() {
    this.form = this.formBuilder.group({
      date: ['', Validators.required],
      userId: ['', Validators.required],
      foodAndHomeUtilities: ['', Validators.required],
      personalExpense: ['', Validators.required],
      snacksExpense: ['', Validators.required],
      items: ['', Validators.required],
    });
  }

  addExpense() {
    this.expenseService.addExpense(this.form.getRawValue()).subscribe({
      next: (data) => {
        console.log(data)
        this.router.navigate(['list-expense']);
      },
      error: (error) => {
        console.log(error)
      }
    })
  }

}
