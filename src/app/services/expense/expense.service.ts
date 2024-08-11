import { Injectable } from '@angular/core';
import Environment from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  public api_url: string = Environment.API_URL;
  constructor(private http: HttpClient) { }

  addExpense(data: Object) {
    const url = this.api_url + 'expense';
    return this.http.post(url, data);
  }


  listExpense() {
    const url = this.api_url + 'expense';
    return this.http.get(url);
  }

  showExpense(id: string) {
    const url = this.api_url + 'expense' + id;
    return this.http.get(url);
  }
}
