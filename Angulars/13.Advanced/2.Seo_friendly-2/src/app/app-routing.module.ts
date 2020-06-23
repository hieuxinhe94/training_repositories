import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{ path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) }, { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
