export class LoginModel {

  username: string;
  phonenumber: string;
  password: string;
  rememberClient: boolean;
  message: string;
  submited: boolean;

  constructor(data?: any) {
    if (data) {
      this.username = data.username;
      this.password = data.password;
      this.phonenumber = data.phonenumber;
      this.rememberClient = data.rememberClient;
      this.message = data.message;
      this.submited = data.submited;
    }
  }
}
