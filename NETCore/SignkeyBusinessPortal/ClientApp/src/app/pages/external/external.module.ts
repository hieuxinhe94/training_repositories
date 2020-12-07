import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerificationComponent } from './verification/verification.component';
import { ExternalDefaultComponent } from './external-default/external-default.component';
import { ExternalRoutingModule } from './external-routing.module';



@NgModule({
  declarations: [VerificationComponent, ExternalDefaultComponent],
  imports: [
    CommonModule, ExternalRoutingModule
  ]
})
export class ExternalModule { }
