import { HttpParams } from '@angular/common/http';
import { LoginModel } from '../models/login-model';
import { Configuration } from './configuration';

export class Utils {

  static composeLoginParams(loginModel: LoginModel) {

    return loginModel;

    return new HttpParams()
      // .set('client_id', Configuration.CLIENT_ID)
      // .set('client_secret', Configuration.CLIENT_SECRET)
      // .set('grant_type', Configuration.GRANT_TYPE)
      .set('Email', loginModel.username)
      .set('Password', loginModel.password)
      .set('rememberClient', loginModel.rememberClient ? 'true' : 'false');
  }


}
