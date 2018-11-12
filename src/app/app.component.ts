import { RouterModule } from '@angular/router';
import { routing } from './app.routing';
import { Component } from '@angular/core';
import { AuthenticationService } from './authentication.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthenticationService]
})
export class AppComponent {
  private isLoggedIn: Boolean;
  private userName: String;
  router: any;

  constructor(public authService: AuthenticationService) {
    this.authService.user.subscribe(user => {
      if (user == null) {
        this.isLoggedIn = false;
        this.router.navigate(['public']);
      } else {
        this.isLoggedIn = true;
        this.userName = user.displayName;
      }
    });
  }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }
}
