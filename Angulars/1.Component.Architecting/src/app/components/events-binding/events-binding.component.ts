import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events-binding',
  template: `
  <h4> number : {{itemCount}} </h4>
  <option *ngFor="let i of arr;" value={{i.key}} >
      {{i.name}}
  </option>
  <br>
  <input type='submit' value='count ++' (click)="inCrement()"  />
  <br>
  <input type='submit'  value='option ++' (click)="addOption()"  />
  `
})
export class EventsBindingComponent implements OnInit {

  itemCount: number = 4;
  // array
  arr = [
    { key: 'key1', name: 'value 1' },
    { key: 'key2', name: 'value 2' },
    { key: 'key3', name: 'value 3' }
  ];

  constructor() { }

  ngOnInit() {
  }

  inCrement() {
    this.itemCount++;
  }

  addOption() {
    const next = this.arr.length + 1;
    this.arr.push({ key: 'key' + next, name: 'value ' + next });
  }
}
