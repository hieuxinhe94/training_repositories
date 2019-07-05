import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-coord',
  templateUrl: './coord.component.html',
  styleUrls: ['./coord.component.css']
})
export class CoordComponent implements OnInit {

  coordData: any;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.weatherService.data.subscribe((value) => {
      debugger;
      if (value) { this.coordData = value.coord; }
    });
  }



}
