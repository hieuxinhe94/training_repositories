import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    debugger;

    if (value || value.length === 0) {

      switch (args) {
        case '300': value = 'default-300x300.jpg'; break;
        case '600': value = 'default-600x600.jpg'; break;
        default: value = 'default.jpg';
      }
      value = 'default.jpg';

      return value;
    }
    return null;
  }

}
