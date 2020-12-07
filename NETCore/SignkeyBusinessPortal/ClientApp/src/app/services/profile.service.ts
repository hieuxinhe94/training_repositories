import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Configuration } from '../helper/configuration';
import { UserProfile } from '../models/user-profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private currentUserInfo = new BehaviorSubject<UserProfile>(null);

  constructor(private http: HttpClient) { }

  getCurrentUserInfo() {
    return this.http.get<UserProfile>(`${Configuration.PREFIX_API_URL}/api/profile`)
      .pipe(map((val => {
        this.currentUserInfo.next(new UserProfile(val));

      })));
  }

  updateCurrentUserInfo(profile: UserProfile) {
    return this.http.post<UserProfile>(`${Configuration.PREFIX_API_URL}/api/Profile/Update`, profile)
      .pipe(map((val => {
        this.currentUserInfo.next(new UserProfile(val));
      })));
  }

  get getSignedIn() {
    return this.currentUserInfo.getValue() != null;
  }

  get getCurrentUser() {
    return this.currentUserInfo.asObservable();
  }


}
