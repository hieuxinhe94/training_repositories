import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExternalDefaultComponent } from './external-default/external-default.component';
import { VerificationComponent } from './verification/verification.component';

const routes: Routes = [
  { path: '', component: ExternalDefaultComponent},
  { path: 'verification-email', component: VerificationComponent},
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExternalRoutingModule { }
