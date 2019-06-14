import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-async-pipe',
  templateUrl: './async-pipe.component.html',
  styleUrls: ['./async-pipe.component.css']
})
export class AsyncPipeComponent implements OnInit {

  promiseData: any;

  constructor() {

  }

  ngOnInit() {
    this.getPromise().then(v => this.promiseData = v);
  }

  getPromise() {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve('Promise complete!'), 3000);
    });
  }
}
