import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './default/default.component';
import { RightComponent } from './right/right.component';
import { LeftComponent } from './left/left.component';

const homeRoutes: Routes = [
  {
    path: 'home', component: DefaultComponent,
    children: [
      { path: 'right', component: RightComponent },
      { path: 'left', component: LeftComponent },
      { path: '**', component: DefaultComponent },
    ]
  },
];

@NgModule({
  declarations: [DefaultComponent, LeftComponent, RightComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(homeRoutes)
  ]
})
export class HomeModule { }
