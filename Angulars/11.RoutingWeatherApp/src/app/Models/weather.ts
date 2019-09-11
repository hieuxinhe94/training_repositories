export class Weather {
  constructor(
    public city: string,
    public temp: string,
    public weather: string,
  ) { }
}


export class Weather2 {
  public city: string;
  public temp: string;
  public weather: string;

  Weather2(data) {
    data = data || {};
    this.city = data.city;
    this.temp = data.temp;
    this.temp = data.weather;
  }
}
