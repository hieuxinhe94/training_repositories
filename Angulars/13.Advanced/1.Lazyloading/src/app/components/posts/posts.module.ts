import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts.component';
import { RouterModule } from '@angular/router';
import { PostsRoutes } from './posts.routes';

@NgModule({
  declarations: [PostsComponent],
  exports: [PostsComponent],
  imports: [
    RouterModule.forChild(PostsRoutes),
    CommonModule
  ]
})
export class PostsModule { }
