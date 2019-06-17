import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  loginFrm: FormGroup;
  outputMsg = '';

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createFormGroup();
  }

  createFormGroup() {
    this.loginFrm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }


  get f() { return this.loginFrm.controls; }

  Login() {
    debugger;
    if (!this.loginFrm.valid) {
      this.getFormValidationErrors();
      return;
    }
    this.outputMsg = 'SUCCESS: ' + JSON.stringify(this.loginFrm.value);
  }

  getFormValidationErrors() {
    this.outputMsg = 'InValid';
    Object.keys(this.loginFrm.controls).forEach(key => {
      const controlErrors: ValidationErrors = this.loginFrm.get(key).errors;
      if (controlErrors != null) {
        Object.keys(controlErrors).forEach(keyError => {
          this.outputMsg += '\n\nKey control: ' + key + ', keyError: ' + keyError + ', err value: ', controlErrors[keyError] + '\n\n';
        });
      }
    });
  }
}
