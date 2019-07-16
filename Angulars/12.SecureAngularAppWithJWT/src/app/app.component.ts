import { Component } from '@angular/core';
import { User } from './Core/Models/user';
import { Router } from '@angular/router';
import { AuthenticateService } from './Core/Services/authenticate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SecureAngularAppWithJWT';

  currentUser: User;

  /**
   *
   */
  constructor(
    private router: Router,
    private authenticateService: AuthenticateService) {
  }

  logout() {
    this.authenticateService.logout();
    this.router.navigate(['/login']);
}
}
