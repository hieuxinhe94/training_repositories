import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Page404Component } from './page404/page404.component';
import { SharedRoutingModule } from './shared-routing.module';

@NgModule({
  declarations: [Page404Component],
  imports: [
    CommonModule,
    SharedRoutingModule
  ]
})
export class SharedModule { }
