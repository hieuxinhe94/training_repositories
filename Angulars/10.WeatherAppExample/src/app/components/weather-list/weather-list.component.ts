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
  promiseData: any;
  observableData: any;
  asyncWeatherResultObservable: Observable<any>;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.querryWeatherData();
    this.querryWeatherDataObservable();
    this.querryWeatherDataObservableAsync();
  }

  // Change input value event call
  changeCity() {
    if (this.cityName && this.cityName.length) {
      this.querryWeatherData();
      this.querryWeatherDataObservable();
      this.querryWeatherDataObservableAsync();
    }
  }

  // Promise
  querryWeatherData() {
    this.weatherService.getDailyWeathers(this.cityName, 16)
      .toPromise()
      .then(
        (res) => {
          this.promiseData = res;
          // save data to local
          this.weatherService.save(res);
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

  // Obversable
  querryWeatherDataObservable() {
    this.weatherService.getDailyWeathers(this.cityName, 16)
      .subscribe((res) => {
        this.delay(5 * 1000);
        this.observableData = res;
      });
  }

  // Async Obversable
  async querryWeatherDataObservableAsync() {
    await this.delay(2 * 1000);
    this.asyncWeatherResultObservable =
      this.weatherService.getDailyWeathersWithObservable(this.cityName, 16);
  }

  // Helper function to delay
  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

}
