import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {AuthService} from "../../../services/auth/auth.service";
import Environment from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  public form: FormGroup = new FormGroup<any>({});
  public api_url: string = Environment.API_URL;

  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder) {

  }

  ngOnInit() {
    this.setUpForm();
  }

  setUpForm() {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  login() {
    const url = this.api_url + 'auth/login';
    return this.authService.login(this.form.getRawValue()).subscribe({
      next: (data) => {
        this.router.navigate(['/dashboard'])
      },
      error: (error) => {
        console.error(error)
      }
    })
  }
}
