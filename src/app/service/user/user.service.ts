import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import Environment from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public api_url: string = Environment.API_URL;
  constructor(private http: HttpClient) { }


  listUsers() {
    const url = this.api_url + 'users';
    return this.http.get(url);
  }
}
