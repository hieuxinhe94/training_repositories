import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input('ParentData') ParentData: string;
  @Output('childEvent') childEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onChange(value) {
    this.childEvent.emit(value);
  }
}
