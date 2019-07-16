import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './Core/Midware/auth-guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [{
  path: 'dashboard',
  component: DashboardComponent,
  canActivate: [AuthGuard]
},
{
  path: 'login',
  component: LoginComponent
},
// otherwise redirect to home
{ path: '**', redirectTo: 'dashboard' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
