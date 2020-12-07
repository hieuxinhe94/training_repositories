import { environment } from '../../environments/environment';

export class Configuration {
  static readonly PREFIX_API_URL: string =  environment.PREFIX_API_URL;
  static readonly PREFIX_API_REFERAL_URL = environment.PREFIX_API_REFERAL_URL;
  static readonly TOKEN_KEY_NAME = 'token';
  static readonly TOKEN_KEY_EXPIRED_DATE_NAME = 'token_expired';

  static readonly CLIENT_ID = environment.CLIENT_ID;
  static readonly CLIENT_SECRET = environment.CLIENT_SECRET;
  static readonly GRANT_TYPE = environment.GRANT_TYPE;

  static readonly SERVICE_NOT_AVAILABLE = 'SERVICE_NOT_AVAILABLE';
  static readonly SERVICE_UN_AUTHORIZE = 'SERVICE_UN_AUTHORIZE';
  static readonly INCORRECT_PASSWORD = 'Invalid credential';

  static readonly DASHBOARD_URL = 'dashboard';
}
