import { Component } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import * as firebase from "firebase"

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.css'],
  providers: [AuthenticationService]
})
export class PublicComponent {
  private user;
  private isLoggedIn: Boolean = null;

  constructor(public authService: AuthenticationService) {
    this.authService.user.subscribe(user => {
      if (user == null) {
        this.isLoggedIn = false;
      } else {
        this.isLoggedIn = true;
      }
    });
}

ngDoCheck() {
  this.user = firebase.auth().currentUser;
 }
}