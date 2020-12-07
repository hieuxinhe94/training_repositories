import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AuthRoutingModule } from './auth-routing.module';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { RegisterComponent } from './register/register.component';
import { NzSpinModule } from 'ng-zorro-antd/spin';

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NzModalModule,
    FormsModule,
    NzButtonModule,
    NzSpinModule
  ],
  exports:[
    LoginComponent
  ]
})
export class AuthModule { }
