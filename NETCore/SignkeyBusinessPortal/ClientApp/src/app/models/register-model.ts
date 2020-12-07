export class RegisterModel {

  phonenumber: string;
  email: string;
  fullName: string;
  password: string;
  password2: string;
  message: string;
  submited: boolean;

  constructor(data?: any) {
    if (data) {
      this.fullName = data.fullName;
      this.email = data.email;
      this.password = data.password;
      this.password2 = data.password2;
      this.phonenumber = data.phonenumber;
      this.message = data.message;
      this.submited = data.submited;
    }
  }
}
