import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CustomHttpInterceptor } from './Core/Midware/http-interceptor';
import { HttpErrorInterceptor } from './Core/Midware/http-error-interceptor';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './Core/Midware/auth-guard';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [

    { provide: HTTP_INTERCEPTORS, useClass: CustomHttpInterceptor, multi: true },

    AuthGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
