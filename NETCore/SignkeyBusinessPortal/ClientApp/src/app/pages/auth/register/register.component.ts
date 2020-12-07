import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Configuration } from 'src/app/helper/configuration';
import { EntityStatus, ServiceResponeCode } from 'src/app/models/base-response-model';
import { LoginModel } from 'src/app/models/login-model';
import { LoginModelResult } from 'src/app/models/login-model-result';
import { RegisterModel } from 'src/app/models/register-model';
import { AppAuthService } from 'src/app/services/app-auth.service';

@Component({
  selector: 'sk-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerModel = new RegisterModel();
  registerForm = new FormGroup({});
  submitting = false;

  @Output() Closed: EventEmitter<boolean> = new EventEmitter();
  @Output() ClosedWithSuccess: EventEmitter<boolean> = new EventEmitter();

  constructor(
    private authService: AppAuthService,
    private notification: NzNotificationService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.registerForm = new FormBuilder().group({
      fullnameCtl: ['', [Validators.required, Validators.maxLength(50)]],
      emailCtl: ['', [Validators.email, Validators.minLength(5)]],
      phonenumberCtl: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(15)]],
      passwordCtl: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
      passwordConfirmCtl: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
    });

  }

  signUp() {
    if (this.registerForm.invalid) { return; }
    if (this.f.passwordCtl.value !== this.f.passwordConfirmCtl.value) { return; }
    this.composeModel();
    this.submitting = true;
    this.authService.register(this.registerModel).toPromise().then(
      (stt) => {
        switch (stt) {
          case ServiceResponeCode.EXISTED:
            this.notification.error('Error', 'Email already use.');
            this.submitting = false;
            break;
          case ServiceResponeCode.OK:
            this.notification.info('Register successed!', 'Created your profile');

            const loginModel = new LoginModel({
              username: this.registerModel.email,
              phonenumber: this.registerModel.phonenumber,
              password: this.registerModel.password
            });

            this.authService.authenticate(loginModel).toPromise()
              .then((authRes: LoginModelResult) => {
                if (authRes.accessToken && authRes.accessToken.length) {
                  this.router.navigate([`/${Configuration.DASHBOARD_URL}`]);
                }
              })
              .finally(() => { this.submitting = false; });
            break;
          default:
            this.notification.error('Error', 'Unknown the result');
            this.submitting = false;
            break;
        }
      })
      .catch((err) => {
        this.submitting = false;
      });
  }

  backToSignIn() {
    this.Closed.emit(true);
  }

  get f() {
    return this.registerForm.controls;
  }

  composeModel() {
    this.registerModel = new RegisterModel();
    this.registerModel.submited = true;
    this.registerModel.fullName = this.f.fullnameCtl.value;
    this.registerModel.phonenumber = this.f.phonenumberCtl.value;
    this.registerModel.email = this.f.emailCtl.value;
    this.registerModel.password = this.f.passwordCtl.value;
  }

  customValidatorForPassword(control: FormControl) {
    if (control && control.value && control.value === this.f.passwordCtl.value) {
      return null;
    }
    return { err: 'password not matched' };
  }
}
