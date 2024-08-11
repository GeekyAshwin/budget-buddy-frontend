import { Routes } from '@angular/router';
import {SignupComponent} from "./components/auth/signup/signup.component";
import {LoginComponent} from "./components/auth/login/login.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {AddExpenseComponent} from "./components/expenses/add-expense/add-expense.component";
import {ListExpenseComponent} from "./components/expenses/list-expense/list-expense.component";
import {ShowExpenseComponent} from "./components/expenses/show-expense/show-expense.component";
import {AddMonthlyBudgetComponent} from "./components/monthly-budget/add-monthly-budget/add-monthly-budget.component";
import {
  ViewMonthlyBudgetComponent
} from "./components/monthly-budget/view-monthly-budget/view-monthly-budget.component";
import {
  ListMonthlyBudgetComponent
} from "./components/monthly-budget/list-monthly-budget/list-monthly-budget.component";

export const routes: Routes = [
  // Auth routes
  {
    path: 'auth/signup',
    component: SignupComponent
  },
  {
    path: 'auth/login',
    component: LoginComponent
  },
  // Dashboard route
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  // Expense routes
  {
    path: 'add-expense',
    component: AddExpenseComponent
  },
  {
    path: 'list-expense',
    component: ListExpenseComponent
  },
  {
    path: 'show-expense',
    component: ShowExpenseComponent
  },
  // Monthly budget routes
  {
    path: 'add-budget',
    component: AddMonthlyBudgetComponent
  },
  {
    path: 'view-budget',
    component: ViewMonthlyBudgetComponent
  },
  {
    path: 'list-budget',
    component: ListMonthlyBudgetComponent
  },

];
