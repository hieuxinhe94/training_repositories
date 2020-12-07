import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { LoginModel } from './models/login-model';
import { AppAuthService } from './services/app-auth.service';

@Component({
  selector: 'sk-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  isCollapsed = false;

  constructor(private http: HttpClient,
              private authService: AppAuthService) {

  }

  ngOnInit(): void {

  }
}
