import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-properties-binding',
  template: `
    <h4> {{message}} {{itemCount}} </h4>
     <br>
Đây là one-way databinding: <br>
String Interpolation: <input type='number' value='{{itemCount}}'>
Property Binding: <input type='number' [value]="itemCount">
<br>
Two way data - binding:
<br>
<input type='number' [(ngModel)]="itemCount">
<br>
Sử dụng ngFor để display data
      <select>
        <option *ngFor="let i of arr;" value={{i.key}} >
          {{i.name}}
        </option>
      </select>
<br>
  Reference variable (biến tham chiếu, không cần khởi tạo property)
  <br>
  <input type='text' #username placeholder="enter your name" >
  <button (click)="action(username.value)"> OK </button>
    `
})
export class PropertiesBindingComponent implements OnInit {

  // định nghĩa một cách rõ ràng
  itemCount: number = 4;

  // dynamic type
  message = 'Your number is';

  // array
  arr = [
    { key: 'key1', name: 'value 1' },
    { key: 'key2', name: 'value 2' },
    { key: 'key3', name: 'value 3' }
  ];

  constructor() { }

  ngOnInit() {
  }

  action(name: string) {
    alert('you typed: ' + name);
  }

}
