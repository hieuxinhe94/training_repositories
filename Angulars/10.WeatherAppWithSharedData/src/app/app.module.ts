import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CoordComponent } from './components/coord/coord.component';
import { WeatherMainComponent } from './components/weather-main/weather-main.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CoordComponent,
    WeatherMainComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
