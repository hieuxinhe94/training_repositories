import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather-detail',
  templateUrl: './weather-detail.component.html',
  styleUrls: ['./weather-detail.component.css']
})
export class WeatherDetailComponent implements OnInit {

  item: any;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.weatherService.getData.subscribe(
      (newValue) => {
        if (newValue) {
          this.item = newValue.coord;
        }
      });
  }

}
