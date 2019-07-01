import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { WeatherListComponent } from './components/weather-list/weather-list.component';
import { FormsModule } from '@angular/forms';
import { WeatherDetailComponent } from './components/weather-detail/weather-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherListComponent,
    WeatherDetailComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
