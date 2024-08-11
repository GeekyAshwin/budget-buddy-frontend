import {Component, OnInit} from '@angular/core';
import {LayoutComponent} from "../../layout/layout.component";
import {BudgetService} from "../../../services/budget/budget.service";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {errorContext} from "rxjs/internal/util/errorContext";

@Component({
  selector: 'app-add-monthly-budget',
  standalone: true,
  imports: [
    LayoutComponent,
    ReactiveFormsModule
  ],
  templateUrl: './add-monthly-budget.component.html',
  styleUrl: './add-monthly-budget.component.css'
})
export class AddMonthlyBudgetComponent implements OnInit{

  public form: FormGroup = new FormGroup<any>({})
  constructor(private budgetService: BudgetService, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.setUpForm();
  }

  setUpForm() {
    this.form  = this.formBuilder.group({
      fromDate: ['', Validators.required],
      toDate: ['', Validators.required],
      budget: ['', Validators.required],
    });
  }

  addBudget() {
    this.budgetService.addBudget(this.form.getRawValue()).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (error) => {
        console.error(error)
      }
    })
  }


}
