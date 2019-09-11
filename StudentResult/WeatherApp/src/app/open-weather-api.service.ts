import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Weather } from './Core/ViewModels/weather';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OpenWeatherApiService {

  // http://api.openweathermap.org/data/2.5/weather?q=HaNoi&APPID=180f734ca78125afb021e7f1d162f4a2
  PREFIX_API_URL = 'http://api.openweathermap.org/data/2.5/weather';
  APP_ID = '180f734ca78125afb021e7f1d162f4a2';

  // Chỉ dùng trong service
  private weatherDataStorage = new BehaviorSubject(new Array<Weather>());

  // Cho phép subcribe từ ngoài service.
  public weathers = this.weatherDataStorage.asObservable();

  constructor(private httpClient: HttpClient) { }

  searchCity(query: string) {
    const url = `${this.PREFIX_API_URL}?q=${query}&APPID=${this.APP_ID}`;
    this.httpClient.get<Weather>(url)
      // pipe: transform data (chuyển đổi dữ liệu)
      .pipe(
        // Mapping respone to model data
        map(res => {
          // Sử dụng class thay vì interface đối với những trường hợp cần thiết
          // Ví dụ cần sửa đỗi response data model
          return new Weather(res);
        }))
      .subscribe(
        (res) => {
          // lấy giá trị cũ ra
          const tmp = this.weatherDataStorage.getValue();
          // Thêm bản ghi mới
          tmp.push(res);
          // cập nhật lại subject
          this.weatherDataStorage.next(tmp);
        },
        (err) => {
          debugger;
        }
      );
  }
}
