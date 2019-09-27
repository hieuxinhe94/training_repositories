import { Component, OnInit } from '@angular/core';
import { OpenWeatherApiService } from '../open-weather-api.service';
import { ActivatedRoute } from '@angular/router';
import { Weather } from '../Core/ViewModels/weather';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  data: Weather;

  constructor(
    private route: ActivatedRoute,
    private openWeatherApiService: OpenWeatherApiService) {
    this.handleParams();
  }

  handleParams() {
    // theo dõi giá trị các params
    this.route.params.subscribe(
      (params) => {
        // Khi có sự thay đổi, cập nhật lại giá trị
        this.displayDetailWeather(params.cityName);
      }
    );
  }

  ngOnInit() {

  }

  displayDetailWeather(city: string) {
    this.openWeatherApiService.weathers.subscribe(
      (weathers) => {
        // Tìm kiếm xem đã có giá trị dữ liệu cached chưa
        const cachedData = weathers.filter(t => t.city.toLowerCase() === city.toLowerCase());
        // Nếu có rồi thì sử dụng lại
        if (cachedData && cachedData.length !== 0) {
          // lấy bản ghi mới nhất
          this.data = cachedData[cachedData.length - 1];
        } else {
          // nếu chưa, thì gọi api trả về data
          this.openWeatherApiService.searchCity(city);
        }
      }
    );
  }

}
