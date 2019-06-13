import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 't3h-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Output('searchTermChanged') searchEEmiter =  new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onChangeSearch(element) {

    if (element.value.length >= 3) {
       this.searchEEmiter.emit(element.value);
    }
  }

}
