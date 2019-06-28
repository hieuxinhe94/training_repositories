import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  // http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=180f734ca78125afb021e7f1d162f4a2
  SERVER_URL = 'http://api.openweathermap.org/data/2.5/weather';
  API_KEY = '180f734ca78125afb021e7f1d162f4a2';

  constructor(private httpClient: HttpClient) { }

  public getDailyWeathers(cityname: string, cnt: number) {
    return this.httpClient.get(this.SERVER_URL
      + '?q=' + cityname
      + '&mode=json&units=metric&cnt=' + cnt
      + '&APPID=' + this.API_KEY);
  }

  public getDailyWeathersWithObservable(cityname: string, cnt: number): Observable<any> {
    return this.httpClient.get(this.SERVER_URL
      + '?q=' + cityname
      + '&mode=json&units=metric&cnt=' + cnt
      + '&APPID=' + this.API_KEY);
  }
}
