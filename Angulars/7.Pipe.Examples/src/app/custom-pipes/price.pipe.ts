import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price'
})
export class PricePipe implements PipeTransform {

  transform(value: any, args?: any): any {

    let ret = '';
    switch (args) {
      case 'style1': ret = '0'; break;
      default: ret = 'Gia thuong luong'; break;
    }

    if (value) {
      return value;
    } else {
      return ret;
    }
  }

}
