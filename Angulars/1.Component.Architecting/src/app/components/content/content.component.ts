import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 't3h-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit, OnChanges {

  @Input('searchTerm') searchTerm: string;

  results = [{ id: 1, title: 'title-1', content: 'content-1' }];

  constructor() { }

  ngOnInit() {
    // Todo: binding the default data
  }

  ngOnChanges() {
    // if not null
    if (this.searchTerm) {
      this.results = [
        { id: 1, title: 'title-for-' + this.searchTerm, content: 'content-1' },
        { id: 2, title: 'title-for-' + this.searchTerm, content: 'content-2' }
      ];
    }
    else {
      // Load default
      this.results = [{ id: 1, title: 'title-1', content: 'content-1' }];
    }

  }

}
