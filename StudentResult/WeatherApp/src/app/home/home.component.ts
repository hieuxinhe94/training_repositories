import { Component, OnInit } from '@angular/core';
import { AuthenicationService } from '../authenication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isLogined = false;
  username = '';
  pwd = '';

  constructor(private authService: AuthenicationService, private router: Router) { }

  ngOnInit() {
    this.isLogined = this.authService.hasLogined();
  }

  login() {
    // validate
    if ((this.username && this.pwd).length === 0) {
      return;
    }

    // gui yeu cau dang nhap async
    this.authService.authenticate(this.username, this.pwd);

    // subcribe
    this.authService.user.subscribe(
      () => this.router.navigate(['search'])
    );
  }

  logout() {
    this.isLogined = false;
    this.authService.logout();
  }

}
