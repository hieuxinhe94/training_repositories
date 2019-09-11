import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-register-form',
  templateUrl: './template-register-form.component.html',
  styleUrls: ['./template-register-form.component.css']
})
export class TemplateRegisterFormComponent implements OnInit {

  firstName = '';
  lastName = '';
  contactEmail = '';
  cardId = '';
  domain = '';


  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    debugger;
    if (this.firstName.length > 4 && this.lastName.length > 4 && this.contactEmail.length > 6) {
      // TODO: Deep check value of controls
      // check card-id
      if (this.cardId.match(/^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/)) {
        alert('Check success.');
        return true;
      }
    } else {
      alert('Check failed.');
      return false;
    }
  }

}
