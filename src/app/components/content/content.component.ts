import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 't3h-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  @Input('searchTerm') SearchTerm: string;

  constructor() { }

  ngOnInit() {
    // Todo: binding the default data

  }

}
