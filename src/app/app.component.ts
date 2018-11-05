import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';
import { AuthGuard } from './auth-guard.service'
import { Router } from '@angular/router'
import * as firebase from "firebase"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthenticationService]
})
export class AppComponent {
  title = 'Lyft';
  user;
  private isLoggedIn: Boolean;
  private userName: String;

  constructor(public authService: AuthenticationService, private router: Router) {
    this.authService.user.subscribe(user => {
      if (user == null) {
        this.isLoggedIn = false;
        this.router.navigate(['public']);
      } else {
        this.isLoggedIn = true;
        this.userName = user.displayName;
        this.router.navigate([]);
      }
    });
  }


ngDoCheck() {
  this.user = firebase.auth().currentUser;
}
}
