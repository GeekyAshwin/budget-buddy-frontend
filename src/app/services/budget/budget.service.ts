import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import Environment from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  public api_url: string = Environment.API_URL;
  constructor(private http: HttpClient) { }

  addBudget(data: Object) {
    const url = this.api_url  + 'monthly-budget';
    return this.http.post(url, data);
  }

  listBudget() {
    const url = this.api_url  + 'monthly-budget/';
    return this.http.get(url);
  }

  showBudget(id: string) {
    const url = this.api_url  + 'monthly-budget/' + id;
    return this.http.get(url);
  }

}
