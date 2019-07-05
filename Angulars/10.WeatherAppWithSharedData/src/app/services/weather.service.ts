import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  // Biến lưu trữ dữ liệu
  private data$ = new BehaviorSubject<any>(null);

  // Dependency Injection (Đưa vào phụ thuộc hàm)
  constructor(private httpClient: HttpClient) { }

  // Khai báo các tiền tố API URL và API KEYs
  prefixURL = 'http://api.openweathermap.org/data/2.5/weather';
  API_KEY = '180f734ca78125afb021e7f1d162f4a2';

  // Gọi tới server API bằng URL kèm các tham số
  search(cityName): any {
    // Kết hợp tiền tố URL với tham số truy vấn và API KEY.
    const url = this.prefixURL
      + '?q=' + cityName
      + '&mode=json&units=metric&cnt=10'
      + '&APPID=' + this.API_KEY;

    return this.httpClient.get(url);
  }

  // Get;Set dữ liệu lưu trong service hiện tại
  set(newData) {

    // Gán giá trị mới vào biến lưu trữ dữ liệu.
    this.data$.next(newData);
  }

  get data() {
    // Trả về đối tượng chứa dữ liệu
    // cho phép subcribe (nhận thông báo khi có thay đổi xảy ra)
    return this.data$.asObservable();
  }

  refresh() {
    this.search('Ha Noi')
      // Chuyển request sang promise
      .toPromise()
      // Xữ lý khi dữ liệu trả về thành công
      .then((response) => {
        // Kiểm tra sự hợp lệ của dữ liệu trả về từ API
        if (response.name) {
          // Lưu lại giá trị từ API vào service
          this.set(response);
        }
      })
      // Xữ lý khi yêu cầu thất bại
      .catch(
        err => console.log(err)
      )
      // Công việc làm cuối cùng
      .finally(
        _ => console.log('Closed request.')
      );
  }


}
