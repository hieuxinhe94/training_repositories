import { FormControl } from '@angular/forms';

export abstract class Utilities {
  public static birthDateValidate(control: FormControl) {

    const birthDate = control.value;
    const regexpDate = new RegExp('\d+(-|/)\d+(-|/)\d+');
    if (birthDate && regexpDate.test(birthDate)) {
      return null;
    }
    return {
      pattern: true
    };
  }
}
