import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginUser } from '../DTO/login-user';
import { AuthenticateService } from '../Service/authenticate.service';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input'

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ReactiveFormsModule, MatButtonModule, MatInputModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  loginUserForm: FormGroup;
  loginAccount: LoginUser;

  constructor(private authService: AuthenticateService) {
    this.loginUserForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
    this.loginAccount = new LoginUser();
  }

  onSubmit() {
    this.loginAccount.username = this.loginUserForm.value.username!;
    this.loginAccount.password = this.loginUserForm.value.password!;
    sessionStorage.setItem('token', "");
    this.authService.login(this.loginAccount).subscribe( (response: any) => {
      console.log(response!);
      sessionStorage.setItem('token', response.token!);
      sessionStorage.setItem('refreshToken', response.refreshToken!);
    })
  }

}
