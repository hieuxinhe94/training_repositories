import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { RouterModule } from '@angular/router';
import { UsersRoutes } from './users.routes';

@NgModule({
  declarations: [UsersComponent],
  exports: [UsersComponent],
  imports: [
    RouterModule.forChild(UsersRoutes),
    CommonModule
  ]
})
export class UsersModule { }
