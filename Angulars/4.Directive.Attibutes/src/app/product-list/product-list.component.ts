import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products = [
    { id: 1, title: 'Product 1', type: 'A', isDisplay: true, status: true, delete: true },
    { id: 2, title: 'Product 2', type: 'A', isDisplay: false, status: true, delete: false },
    { id: 3, title: 'Product 3', type: 'B', isDisplay: true, status: false, delete: true },
    { id: 4, title: 'Product 4', type: 'D', isDisplay: true, status: false, delete: false },
    { id: 5, title: 'Product 5', type: 'C', isDisplay: false, status: true, delete: false },
    { id: 6, title: 'Product 6', type: 'E', isDisplay: true, status: true, delete: false },
  ]

  constructor() { }

  ngOnInit() {
  }

  onChangeStatus(index)
  {
    this.products[index].status != this.products[index].status;
  }

  onDistroy(index)
  {
    this.products[index] = null;
  }
}
