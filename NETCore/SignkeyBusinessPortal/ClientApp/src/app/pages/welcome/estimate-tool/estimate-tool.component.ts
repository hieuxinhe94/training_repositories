import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sk-estimate-tool',
  templateUrl: './estimate-tool.component.html',
  styleUrls: ['./estimate-tool.component.scss']
})
export class EstimateToolComponent implements OnInit {

  toggle = true;
  firstLoad = true;
  expandingEstimation = false;
  venueEstimateTypes = [{ index: 1, product: '0', type: '0', amount: 0, message: '' }];

  productOptions = [
    { value: 1, text: 'SoEasy' }];

  venueTypeOptions = [
    { value: 1, text: 'Construction' },
    { value: 2, text: 'Food & Beverage' },
    { value: 3, text: 'Gaming Venue' },
    { value: 4, text: 'Hotel' },
    { value: 4, text: 'Mining' },
    { value: 4, text: 'NightLife' },
    { value: 4, text: 'Places of Worship' },
    { value: 4, text: 'Schools' },
    { value: 4, text: 'Sports Venue' },
    { value: 4, text: 'Supermarkets' },
    { value: 4, text: 'Other' },
  ];

  amountOptions = [
    { value: 1, text: '1' },
    { value: 2, text: '2' },
    { value: 3, text: '3' },
    { value: 4, text: '4' }];

  estimateValue = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onAddEstimateVenueItem() {
    const i = this.venueEstimateTypes.length + 1 ?? 0;
    this.venueEstimateTypes.push({ index: i, product: 'soeasy', type: '1', amount: 0, message: '' });
  }

  updateEstimatedValue() {
    this.estimateValue = 0;

    for (const item of this.venueEstimateTypes) {
      this.estimateValue += this.getFactor(item.type) * item.amount;
    }
  }

  selectProduct(value: string, index: number) {
    this.venueEstimateTypes[index - 1].product = value;
    this.updateEstimatedValue();
  }

  selectVenueType(value: string, index: number) {
    this.venueEstimateTypes[index - 1].type = value;
    this.updateEstimatedValue();
  }

  selectVenueAmount(value: number, index: number) {
    if (value < 0) { this.venueEstimateTypes[index - 1].message = 'Invalid'; return; }

    this.venueEstimateTypes[index - 1].message = '';
    this.venueEstimateTypes[index - 1].amount = value;
    this.updateEstimatedValue();
  }

  private getFactor(type: string) {
    switch (type) {

      case '1': return 99.00 * 0.2;
      case '2': return 99.00 * 0.2;
      case '3': return 99.00 * 0.2;
      case '4': return 99.00 * 0.2;
      case '5': return 99.00 * 0.2;

      case '0':
      default: return 0;
    }
  }

}
