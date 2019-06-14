import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-built-in-pipe',
  templateUrl: './built-in-pipe.component.html',
  styleUrls: ['./built-in-pipe.component.css']
})
export class BuiltInPipeComponent implements OnInit {

  public dateVal: Date = new Date();
  public jsonVal = {moo: 'foo', goo: {too: 'new'}};

  constructor() { }

  ngOnInit() {
  }

}
