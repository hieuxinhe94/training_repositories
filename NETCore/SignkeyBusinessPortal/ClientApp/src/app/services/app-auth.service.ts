import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel } from '../models/login-model';
import { Configuration } from '../helper/configuration';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user';
import { LoginModelResult } from '../models/login-model-result';
import { Utils } from '../helper/mapper-utils';
import { RegisterResultModel, SaleAgentInfoModel } from '../models/register-result-model';
import { RegisterModel } from '../models/register-model';
import { UserProfile } from '../models/user-profile';

@Injectable({
  providedIn: 'root'
})
export class AppAuthService {

  constructor(private http: HttpClient) { }

  authenticate(loginModel: LoginModel) {

    const contentParams = Utils.composeLoginParams(loginModel);

    return this.http.post<LoginModelResult>(`${Configuration.PREFIX_API_URL}/api/authenticate/token`, contentParams)
      .pipe(map(res => {
        res = new LoginModelResult(res);
        if (res && res.accessToken) {
          localStorage.setItem(Configuration.TOKEN_KEY_NAME, res.accessToken);

          const expiredDate = new Date();
          expiredDate.setSeconds(expiredDate.getSeconds() + res.expireInSeconds);

          localStorage.setItem(Configuration.TOKEN_KEY_EXPIRED_DATE_NAME, expiredDate.toDateString());
          // TODO: CHECK EXPIRED DATE AND SET A TIMMER
          // this.currentUser.next(new User({ username: res.userId, token: res.accessToken }));
        }

        return res;
      }));
  }

  register(query: RegisterModel) {
    return this.http
      .post<any>(`${Configuration.PREFIX_API_URL}/api/authenticate/register`, query);
  }

  logout() {
    return new Promise((resolve, reject) => {
      localStorage.removeItem(Configuration.TOKEN_KEY_NAME);
     // this.currentUser.next(null);
      resolve('done');
    });
  }

  get getAccessToken() {
    return localStorage.getItem(Configuration.TOKEN_KEY_NAME);
  }

  get isValidToken() {
    const token = localStorage.getItem(Configuration.TOKEN_KEY_NAME);

    return (token && token.length);
  }

  get getTokenExpiredDate() {
    return localStorage.getItem(Configuration.TOKEN_KEY_EXPIRED_DATE_NAME);
  }


}
