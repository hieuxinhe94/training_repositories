import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.css']
})
export class WeatherListComponent implements OnInit {

  cityName = 'London,uk';
  weatherData: any;
  weatherData2: any;
  asyncWeatherResultObservable: Observable<any>;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.querryWeatherData();
    this.querryWeatherDataObservable();
    this.querryWeatherDataObservableAsync();
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

   querryWeatherDataObservable() {
    this.weatherService.getDailyWeathers(this.cityName, 16)
      .subscribe(async (res) => {
        await this.delay(5 * 1000);
        this.weatherData2 = res;
      });
  }

  async querryWeatherDataObservableAsync() {
    await this.delay(2 * 1000);
    this.asyncWeatherResultObservable =
    this.weatherService.getDailyWeathersWithObservable(this.cityName, 16);
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

}
