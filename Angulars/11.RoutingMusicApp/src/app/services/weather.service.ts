import { Injectable } from '@angular/core';
import {
  HttpClientJsonpModule,
  HttpClientModule,
  HttpClient
} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  SERVER_URL = 'http://api.openweathermap.org/data/2.5/weather';
  API_KEY = '180f734ca78125afb021e7f1d162f4a2';

  constructor(private httpClient: HttpClient) { }

  querry(cityName: string) {
    return this.httpClient.get(this.SERVER_URL
      + '?q=' + cityName
      + '&mode=json&units=metric&cnt=10'
      + '&APPID=' + this.API_KEY);
  }
}
