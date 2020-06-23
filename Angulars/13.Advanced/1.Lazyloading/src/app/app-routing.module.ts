import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './components/users/users.module#UsersModule'
  },
  {
    path: 'details/:id',
    loadChildren: './components/details/details.module#DetailsModule'
  },
  {
    path: 'posts',
    loadChildren: './components/posts/posts.module#PostsModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
