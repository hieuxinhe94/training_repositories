import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../Core/Services/authenticate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private authenticateService: AuthenticateService,
    private router: Router) { }

  ngOnInit() {
  }

  logout() {
    this.authenticateService.logout();
    this.router.navigate(['login']);
  }
}
