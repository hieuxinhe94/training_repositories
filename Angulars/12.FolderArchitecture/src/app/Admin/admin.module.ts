import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RightComponent } from './right/right.component';
import { DefaultComponent } from './default/default.component';
import { LeftComponent } from './left/left.component';

const adminRoutes: Routes = [
  {
    path: 'admin', component: DefaultComponent,
    children: [
      { path: 'right', component: RightComponent,
       },
      { path: 'left', component: LeftComponent,
       },
      { path: '**', component: DefaultComponent },
    ]
  },
];

@NgModule({
  declarations: [DefaultComponent, RightComponent, LeftComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(adminRoutes)
  ],
  exports : []
})
export class AdminModule { }
