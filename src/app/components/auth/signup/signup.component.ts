import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../services/auth/auth.service";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit {

  public form: FormGroup = new FormGroup<any>({

  }) ;
  ngOnInit() {
    this.setupForm();
  }

  constructor(private authService: AuthService, private formBuilder: FormBuilder, private router: Router) {
  }

  /**
   * setup form
   */
  setupForm() {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  /**
   * signup method
   */
  signup() {
    this.authService.signup(this.form?.getRawValue()).subscribe({
      next: (data) => {
        console.log(data);
        this.router.navigate(['/auth/login'])
      },
      error: (e) => console.error(e),
    });
  }

}
