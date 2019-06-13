import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products : Product[] = [];

  constructor() { }

  ngOnInit() {
  }

  addProduct() {

    const nextId = this.products.length + 1;
    const newProduct = new Product({ Id: nextId, Name: 'Product-' + nextId, Price: 20 * nextId });
    // Inserts new elements at the start of an array.
    this.products.unshift(newProduct);
  }

  deleteProfuct() {
    this.products = [];
  }
}
