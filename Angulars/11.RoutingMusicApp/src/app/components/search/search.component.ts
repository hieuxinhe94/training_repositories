import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Weather } from 'src/app/Models/weather';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public loading = false;
  weather: Weather;

  constructor(
    private weatherService: WeatherService,
    private route: ActivatedRoute,
    private router: Router) {

    this.route.params.subscribe(params => {
      if (params.cityName) {
        this.doSearch(params.cityName);
      }
    });
  }

  ngOnInit() {
  }

  doSearch(term: string) {
    this.loading = true;
    this.weatherService.querry(term).toPromise().then(
      (res) => {
        this.weather = this.convertToViewModel(res);
        this.loading = false;
       }
    );
  }

  convertToViewModel(res: any) {
     const ret = new Weather(res.name, res.main.temp, res.weather[0].description);
     return ret;
  }

  onSearch(term: string) {
    this.router.navigate(['search', { cityName: term }]);
  }
}
