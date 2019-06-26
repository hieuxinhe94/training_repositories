import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ProductDataService } from './services/product-data.service';
import { ProductComponent } from './components/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,

    InMemoryWebApiModule.forRoot(ProductDataService)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
