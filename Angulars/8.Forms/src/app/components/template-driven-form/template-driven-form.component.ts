import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {

  email = '';
  password = '';
  outputMsg = '';
  constructor() { }

  ngOnInit() {
  }

  Login() {
    let isValid = true;
    if (!this.email || this.email.length <= 5) {
      this.outputMsg += 'Email is required.';
      isValid = false;
    }

    if (!this.password || this.password.length <= 5) {
      this.outputMsg += 'Password is required.';
      isValid = false;
    }

    if (isValid) {

      this.outputMsg += 'Validate is success.';
    }
    else {

    }


  }
}
