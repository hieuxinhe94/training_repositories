import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomPipeComponent } from './custom-pipes/custom-pipe/custom-pipe.component';
import { BuiltInPipeComponent } from './bultin-pipes/built-in-pipe/built-in-pipe.component';
import { AsyncPipeComponent } from './async-pipes/async-pipe/async-pipe.component';
import { PricePipe } from './custom-pipes/price.pipe';


@NgModule({
  declarations: [
    AppComponent,
    CustomPipeComponent,
    BuiltInPipeComponent,
    AsyncPipeComponent,
    PricePipe,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
