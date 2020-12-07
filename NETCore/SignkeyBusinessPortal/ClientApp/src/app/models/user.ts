export class User {
  username: string;
  password: string;
  token?: string;

  constructor(data?: any) {
    if (data) {
      this.username = data.username;
      this.token = data.token;
    }
  }
}
