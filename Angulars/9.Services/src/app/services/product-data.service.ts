import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class ProductService implements InMemoryDbService {

  products = [
  { id: 1, name: 'Product-A', price: 111.1, description: 'Product-A describes' },
  { id: 2, name: 'Product-A', price: 222.2, description: 'Product-A describes' },
  { id: 3, name: 'Product-A', price: 333.3, description: 'Product-A describes' }
  ];

  createDb()  {
    return  this.products ;
  }

  constructor() { }
}
