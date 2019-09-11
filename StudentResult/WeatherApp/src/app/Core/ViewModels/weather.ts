export class Weather {

  public city: string;
  public temp: string;
  public weather = {};
  public description: '';

  constructor(obj?) {
    // Object.assign(this, obj); // khi mapping object đơn giản.
    debugger;
    this.city = obj.name;
    this.temp = obj.main.temp;
    if (obj.weather && Array.from(obj.weather).length !== 0) {
      this.weather = obj.weather[0];
      this.description = obj.weather[0].description;
    }
  }
}

