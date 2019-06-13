export class Product {

  public Id: number;
  public Name: string;
  public Price: number;

  constructor(data: any) {
    data = data || {};
    this.Id = data.Id;
    this.Name = data.Name;
    this.Price = data.Price;
  }
}
