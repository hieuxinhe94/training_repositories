import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginModel } from 'src/app/models/login-model';
import { LoginModelResult } from 'src/app/models/login-model-result';
import { AppAuthService } from 'src/app/services/app-auth.service';
import { Configuration } from 'src/app/helper/configuration';
import { UserType } from 'src/app/helper/UserType';

@Component({
  selector: 'sk-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Input() type: UserType = UserType.SaleUser;

  isLoginMode = true;
  submitting = false;

  loginModel = new LoginModel({
    username: '',
    password: '',
    rememberClient: false,
    message: '',
    submited: false,
  });

  constructor(
    private authService: AppAuthService,
    private router: Router) { }

  ngOnInit(): void {
  }

  signIn(): void {
    this.loginModel.submited = true;
    this.submitting = true;
    this.loginModel.message = '';
    this.authService.authenticate(this.loginModel).subscribe(
      (res: LoginModelResult) => {
        if (res.accessToken && res.accessToken.length) {
          this.router.navigate([`${Configuration.DASHBOARD_URL}`]);
        }
        this.submitting = false;
      },
      (err) => {
        if (err) {
          switch (err.status) {
            case 401: case 404: this.loginModel.message = Configuration.INCORRECT_PASSWORD; break;
            case 0: this.loginModel.message = Configuration.SERVICE_NOT_AVAILABLE; break;
            default: break;
          }
        }
        this.submitting = false;
      }
    );
  }

  signUp() {
    // this.router.navigate(['/auth/signup']);
    this.isLoginMode = false;
  }
}
