import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.css']
})
export class WeatherListComponent implements OnInit {

  cityName = 'London,uk';
  weatherData: any;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.querryWeatherData();
  }

  changeCity() {
    if (this.cityName && this.cityName.length) {
      this.querryWeatherData();
    }
  }

  // init data
  querryWeatherData() {
    this.weatherService.getDailyWeathers(this.cityName, 16)
      .toPromise()
      .then(
        (res) => {
          this.weatherData = res;
        })
      .catch(
        (err) => {
          console.log(err.message);
        })
      .finally(
        () => {
          console.log('init Weather Data');
        });
  }
}
