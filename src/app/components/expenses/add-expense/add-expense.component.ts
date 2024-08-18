import {Component, OnInit} from '@angular/core';
import {LayoutComponent} from "../../layout/layout.component";
import {ExpenseService} from "../../../services/expense/expense.service";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {errorContext} from "rxjs/internal/util/errorContext";
import {Router} from "@angular/router";
import {UserService} from "../../../service/user/user.service";
import {JsonPipe, NgForOf} from "@angular/common";
import IExpense from "../../../interfaces/IExpense";
import IUser from "../../../interfaces/iuser";

@Component({
  selector: 'app-add-expense',
  standalone: true,
  imports: [
    LayoutComponent,
    ReactiveFormsModule,
    NgForOf,
    JsonPipe
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
  public users: IUser[] = [];
  constructor(private expenseService: ExpenseService, private formBuilder: FormBuilder, private router: Router, private userService: UserService) {
  }
  ngOnInit() {
    this.setUpForm();
    this.getUsers();
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

  getUsers() {
    this.userService.listUsers().subscribe({
      next: (data: any) => {
        this.users = data;
        console.log(this.users)
      },
    })

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
