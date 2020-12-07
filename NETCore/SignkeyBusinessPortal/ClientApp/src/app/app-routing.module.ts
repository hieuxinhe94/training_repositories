import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignedInGuard } from './utils/signed-in-guard';

const routes: Routes = [
  {
    path: '', redirectTo: 'index', pathMatch: 'full'
  },
  {
    path: 'index', loadChildren:
      () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule)
  },
  {
    path: 'auth', loadChildren:
      () => import('./pages/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'dashboard', canActivate: [SignedInGuard], loadChildren:
      () => import('./pages/users/users.module').then(m => m.UsersModule)
  },
  {
    path: 'notfound', loadChildren:
      () => import('./pages/shared/shared.module').then(m => m.SharedModule)
  },
  {
    path: '**', redirectTo: '/notfound'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
