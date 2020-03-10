import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User} from './models/user';

import { AuthenticationService } from './services/_services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentUser: User;

  constructor(
      private router: Router,
      private authenticationService: AuthenticationService
  ) {
      this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }
  title = 'Proyecto-angular';

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
}
}
