import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sk-payout-log',
  templateUrl: './payout-log.component.html',
  styleUrls: ['./payout-log.component.scss']
})
export class PayoutLogComponent implements OnInit {

  paymentLogs = [];

  constructor() { }

  ngOnInit(): void {
  }

}
