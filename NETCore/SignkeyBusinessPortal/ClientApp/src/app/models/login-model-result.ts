export class LoginModelResult {

  accessToken: string | undefined;
  encryptedAccessToken: string | undefined;
  expireInSeconds: number | undefined;
  userId: number | undefined;
  refreshToken: string | undefined;
  scope: string;
  tokenType: string;

  constructor(data?: any) {
    if (data) {
      this.accessToken = data.accessToken || data.access_token;
      this.encryptedAccessToken = data.encrypted_access_token;
      this.refreshToken = data.refresh_token;
      this.expireInSeconds = data.expireInSeconds || data.expires_in;
      this.userId = data.userId;
      this.scope = data.scope;
      this.tokenType = data.token_type;
    }
  }

  toJSON(data?: any): string {
    data = typeof data === 'object' ? data : {};
    data.access_token = this.accessToken;
    data.encrypted_access_token = this.encryptedAccessToken;
    data.expires_in = this.expireInSeconds;
    data.scope = this.scope;
    data.token_type = this.tokenType;
    data.refresh_token = this.refreshToken;
    return data;
  }
}


export class LoginModelErrResult {

  message: string | undefined;
  action: string | undefined;

  constructor(data?: any) {
    if (data) {
      this.message = data.message;
      this.action = data.action;
    }
  }
}
