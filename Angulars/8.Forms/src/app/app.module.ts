import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { TemplateDrivenFormComponent } from './components/template-driven-form/template-driven-form.component';
import { RegisterComponent } from './components/register/register.component';
import { AlertModule } from 'ngx-bootstrap';
import { TemplateRegisterFormComponent } from './forms-demo/template-register-form/template-register-form.component';
import { ReactiveFormsComponent } from './forms-demo/reactive-forms/reactive-forms.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormComponent,
    TemplateDrivenFormComponent,
    RegisterComponent,
    TemplateRegisterFormComponent,
    ReactiveFormsComponent
  ],
  imports: [

    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
