import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  SERVER_URL = 'http://localhost:8080/api/';

  constructor(private httpClient: HttpClient) { }

  public getProducts() {
    return this.httpClient.get(this.SERVER_URL + 'products');
  }

  public getProduct(id) {
    return this.httpClient.get(`${this.SERVER_URL + 'product'}/${id}`);
  }
  public createProduct(p: Product) {
    return this.httpClient.post(`${this.SERVER_URL + 'product'}`, p);
  }

  public deletePolicy(id) {
    return this.httpClient.delete(`${this.SERVER_URL + 'product'}/${id}`);
  }
  public updatePolicy(p: Product) {
    return this.httpClient.put(`${this.SERVER_URL + 'product'}/${p.id}`, p);
  }
}
