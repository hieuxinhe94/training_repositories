import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../Models/user';
import { HttpClient } from '@angular/common/http';
import { Config } from '../config';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  private currentUser = new BehaviorSubject<User>(null);

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {

    return this.http.post<any>(`${Config.PREFIX_URL}/LogIn/authenticate`, { username, password })
      .pipe(map(user => {
        // login successful if there's a jwt token in the response
        if (user && user.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUser.next(user);
        }

        return user;
      }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUser.next(null);
  }

  get getCurrentUser() {
    return this.currentUser.asObservable();
  }

  get isLogined() {
    if (this.currentUser.value) {
      return true;
    }
    return false;
  }

}
