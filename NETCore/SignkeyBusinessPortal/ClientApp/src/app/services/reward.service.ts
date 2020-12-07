import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Configuration } from '../helper/configuration';
import { SaleAgentInfoModel } from '../models/register-result-model';
import { UserProfile } from '../models/user-profile';

@Injectable({
  providedIn: 'root'
})
export class RewardService {

  constructor(private http: HttpClient) { }

  getRewards() {
    return this.http.get<any>(`${Configuration.PREFIX_API_URL}/api/services/app/SaleAgent/GetCurrentUserKPI`);
  }
}
