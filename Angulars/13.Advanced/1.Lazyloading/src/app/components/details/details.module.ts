import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details.component';
import { RouterModule } from '@angular/router';
import { DetailsRoutes } from './details.routes';
@NgModule({
  declarations: [DetailsComponent],
  exports: [DetailsComponent],
  imports: [
    RouterModule.forChild(DetailsRoutes),
    CommonModule
  ]
})
export class DetailsModule { }
