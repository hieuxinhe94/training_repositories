import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

  registerFrm: FormGroup;


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initialReativeForm();
  }

  initialReativeForm() {
    this.registerFrm = this.formBuilder.group(
      {
        firstName: ['Nguyen van',
          [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
        lastName: ['AAAAA', Validators.required],
        contactEmail: ['xyz@gmail.com', [Validators.email, Validators.required]],
        cardId: ['1234-5678-1234-5678',
          [Validators.required, this.customValidatorForCardId]]
      }
    );
  }

  onSubmit() {
    // 1. Nếu các giá trị trên form chưa được thay đổi.
    //  Thì thông báo là bạn các nhập đầy đủ các giác trị

    if (this.registerFrm.pristine) { alert('Vui long nhap thong tin cua ban.'); }

    // 2. Nếu có bất kỳ controls nào invalid thì
    // hiện thông báo vui lòng kiểm tra lại các trường màu đỏ

    if (this.registerFrm.invalid) { alert('Kiem tra lai cac truong mau do.'); }

  }

  get f() {
    return this.registerFrm.controls;
  }

  customValidatorForCardId(control: FormControl) {
    if (control && control.value) {
      return null;
    }
    return { myError: 'Test' };
  }
}
