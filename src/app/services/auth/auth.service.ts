import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import Environment from "../../../environments/environment";
@Injectable({
  providedIn: 'root',
})
export class AuthService {

  public api_url: string = Environment.API_URL;
  constructor(private http: HttpClient) { }

  /**
   * Signup method
   */
  signup(data: any) {
    const url = this.api_url + 'auth/register';
    return this.http.post(url, data );
  }

  /**
   * login method
   */
  login(data: any) {
    const url = this.api_url + 'auth/login';
    return this.http.post(url, {data} );
  }
}
