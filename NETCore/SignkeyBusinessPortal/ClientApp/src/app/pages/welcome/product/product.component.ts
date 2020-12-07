import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sk-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  categories = [
    {
      id: 1, categoryName: 'Construction/Mining', productCount: 1, imageSource: ' ', description: 'Covid-19, OHS, Location Tracking, Communications, Timesheet, Compliance, timesheet', href: '',
      iconName: 'icon-construction', iconSource: '../../../../assets/img/icons/construction-icon.svg'
    },
    {
      id: 2, categoryName: 'Schools', productCount: 1, imageSource: ' ', description: 'Covid-19, PPE, Location Tracking, Communications, Compliance', href: '',
      iconName: 'icon-school', iconSource: '../../../../assets/img/icons/school-icon.svg'
    },
    {
      id: 3, categoryName: 'Supermarket', productCount: 1, imageSource: ' ', description: 'Covid-19, Productivity, Timesheet Management, Payroll, Compliance', href: '',
      iconName: 'icon-supermarket', iconSource: '../../../../assets/img/icons/super-market-icon.svg'
    },
    {
      id: 4, categoryName: 'Mobile 4G/5G', productCount: 1, imageSource: ' ', description: 'Most competitive Pre-Paid 4G/5G Telecom plans', href: '',
      iconName: 'icon-pre-paid', iconSource: '../../../../assets/img/icons/pre-paid-icon.svg'
    },
    {
      id: 5, categoryName: 'Places of Worship', productCount: 1, imageSource: ' ', description: 'Covid-19, Attendance, Communications, Compliance', href: '',
      iconName: 'icon-worship', iconSource: '../../../../assets/img/icons/worship-icon.svg'
    },
    {
      id: 6, categoryName: 'Insurance', productCount: 1, imageSource: ' ', description: 'Most competitive rates on Car, Health, House Insurance', href: '',
      iconName: 'icon-insurance', iconSource: '../../../../assets/img/icons/insurance-icon.svg'
    },
    {
      id: 7, categoryName: 'Gaming', productCount: 1, imageSource: ' ', description: 'Covid-19, Queuing, Communications, Timesheet, Compliance', href: '',
      iconName: 'icon-gaming', iconSource: '../../../../assets/img/icons/gaming-venue-icon.svg'
    },
    {
      id: 8, categoryName: 'Night Life', productCount: 1, imageSource: '', description: 'Covid-19, Queuing, Communications, Block, Compliance', href: '',
      iconName: 'icon-night-life', iconSource: '../../../../assets/img/icons/night-life-icon.svg'
    },
    {
      id: 9, categoryName: 'Hospitals', productCount: 1, imageSource: '', description: 'Most competitive rates on Car, Health, House Insurance', href: '',
      iconName: 'icon-hospital', iconSource: '../../../../assets/img/icons/hospital-icon.svg'
    },
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
