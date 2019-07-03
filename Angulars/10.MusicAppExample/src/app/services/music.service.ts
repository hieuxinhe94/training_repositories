import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  // Tiền tố API URL để lấy dữ liệu
  PREFIX_API_URL = 'http://api.openweathermap.org/data/2.5/weather';
  API_KEY = '180f734ca78125afb021e7f1d162f4a2';

  // INJECT (Truyền vào) các service cần dùng vào constructor.
  constructor(private httpClient: HttpClient) { }

  // #region GET methods

  // Lấy các ca khúc mới nhất
  getRecentSongs(cityname): any {
    return this.httpClient.get(this.PREFIX_API_URL
      + '?q=' + cityname
      + '&mode=json&units=metric&cnt=100'
      + '&APPID=' + this.API_KEY
    );
  }

  // #endregion
}
