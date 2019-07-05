import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  homeWeatherData: any;

  // Inject weather service để sử dụng thông qua constructor
  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    // Xử lý khi có thông báo weatherService có thay đổi về dữ liệu
    this.weatherService.data.subscribe((value) => {

      // Nếu value khác null (đã có dữ liệu)
      if (value) {
        console.log('weather data service mới cập nhật dữ liệu.');
        this.homeWeatherData = value;
      } else {
        // Có thể lần đầu đi lấy về dữ liệu, hoặc cần cập nhật mới phiên bản dữ liệu
        this.weatherService.refresh();
      }
    });
  }
}
