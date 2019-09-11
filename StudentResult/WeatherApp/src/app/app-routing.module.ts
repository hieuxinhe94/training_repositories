import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
  { path: 'search', component: SearchComponent },
  { path: 'detail', component: DetailComponent },
  // Chuyển hướng ủy quyền thành URL khác
  { path: 'chitiet', redirectTo: 'detail' },
  // Mặc định nếu không match với các pattern trên
  // Các URL không hợp lệ sẽ về mặc định
  { path: '**', component: SearchComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
