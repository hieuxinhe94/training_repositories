import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  key: '';

  // Sử dụng provider Router
  constructor(private router: Router) { }

  ngOnInit() {
  }

  doSearch() {
    // Chuyển tiếp sang địa chỉ ~/detail
    // Truyền đi các parameters (thông qua URL)
    const params = { cityName: this.key, previousUrl: 'search', lang: 'en' }
    this.router.navigate(['detail', params]);
  }

}
