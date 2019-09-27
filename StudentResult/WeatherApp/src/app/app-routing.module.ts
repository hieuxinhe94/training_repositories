import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { DetailComponent } from './detail/detail.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './Core/Midware/auth.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchComponent, canActivate: [AuthGuard] },
  { path: 'detail', component: DetailComponent, canActivate: [AuthGuard] },
  // Chuyển hướng ủy quyền thành URL khác
  { path: 'chitiet', redirectTo: 'detail' },
  // Mặc định nếu không match với các pattern trên
  // Các URL không hợp lệ sẽ về mặc định
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
