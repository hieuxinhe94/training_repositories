import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public productId = this.route.snapshot.paramMap.get('id'); // 👈

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
