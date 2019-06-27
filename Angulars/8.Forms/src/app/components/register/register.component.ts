import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidationErrors, FormControl } from '@angular/forms';
import { Utilities } from 'src/app/Utils/custom-validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  loginFrm: FormGroup;
  outputMsg = '';
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initLoginView();
    this.initRegisterView();
  }

  onSubmit() {
    this.submitted = true;

    // stop the process here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    this.register();
  }

  //#region private methods

  initLoginView() {
    this.loginFrm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  initRegisterView() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.email]],
      // Custom validate  this.birthDateValidate
      birthDate: ['', [this.birthDateValidate]],
      gender: [''],
    });
  }

  logIn() {
    if (!this.loginFrm.valid) {
      this.displayErrors();
      return;
    }
    this.outputMsg = 'SUCCESS: ' + JSON.stringify(this.loginFrm.value);
  }

  register() {
    // TODO: Implement the code to call API to save the data
    alert('SUCCESS!!');
  }

  displayErrors() {
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

  birthDateValidate(control: FormControl) {
    const birthDate = control.value;
    const regexpDate = new RegExp(/^\d{4}-\d{2}-\d{2}/);
    if (birthDate && regexpDate.test(birthDate)) {
      return null;
    }
    return {
      pattern: true
    };
  }

  //#endregion
}
