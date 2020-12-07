import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'sk-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  @Output() EstimateToolClicked = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  OnEstimateToolClicked() {
    this.EstimateToolClicked.emit();
  }
}
