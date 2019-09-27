import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenicationService {

  prefixUrl = 'https://sercurenetcorewebapp.azurewebsites.net/';

  private currentUser = new BehaviorSubject(null);
  public user = this.currentUser.asObservable();

  constructor(private httpClient: HttpClient) {

  }

  authenticate(name: string, pwd: string) {

    const bodyParams = {
      username: name,
      password: pwd
    };

    this.httpClient.post<any>(this.prefixUrl + 'api/LogIn/authenticate', bodyParams)
      .pipe(
        map((res) => {
          res.ReceiveTime = Date.now;
        })
        // TODO 2.Thêm thuộc tính thời gian lấy token vào response obj
      )
      .subscribe(
        (res) => {
          // Kiểm tra xem giá trị trả về có token hay không?
          this.saveCredential(res);
        },
        (err) => {
          console.log(err.message);
        }
      );
  }

  saveCredential(objCredential: any) {
    // Lưu vào phiên hiện tại
    this.currentUser.next(objCredential);
    // Lưu vào cached (Tái sử dụng cho những lần sau)
    localStorage.setItem('currentUser', objCredential);
  }

  hasLogined() {
    if (this.currentUser.getValue() !== null) {
      return true;
    } else if (localStorage.getItem('currentUser')) {
      // TODO: 1. Khôi phục currentUser từ localstorage.
      return true;
    }

    return false;
  }

  logout() {
    // Xóa giá trị người dùng hiện tại
    this.currentUser.next(null);
    // Xóa trong cached
    localStorage.removeItem('currentUser');
  }


  // TODO 3: Tìm hiểu về http interceptor: Là một midware (bộ đệm)
  // Thêm authentication vào header với value là token key.
  // name ex: JwtHttpInterceptor.

}
