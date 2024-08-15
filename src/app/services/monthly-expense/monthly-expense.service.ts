import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import Environment from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class MonthlyExpenseService {

  public api_url = Environment.API_URL;
  constructor(private http: HttpClient) { }

  getMonthlyExpenses(month: any) {
    const url = this.api_url + 'monthly-expense';
    return this.http.get(url, month);
  }
}
