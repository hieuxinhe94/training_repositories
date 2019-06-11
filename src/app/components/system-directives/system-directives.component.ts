import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-system-directives',
  template: `
  <div >
    <div *ngFor="let i of arr" [ngSwitch]="i.type">
      <p *ngSwitchCase="'A'" style="color: red"> {{i.name}} </p>
      <p *ngSwitchCase="'B'"> {{i.name}} </p>
      <p *ngSwitchDefault> default </p>
    </div>
  `
})
export class SystemDirectivesComponent implements OnInit {

  arr = [
  { id: 1, name: 'item-1', type: 'A' },
  { id: 2, name: 'item-2', type: 'A' },
  { id: 3, name: 'item-3', type: 'B' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
