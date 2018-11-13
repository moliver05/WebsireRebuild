import { Component} from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent  {
  private user;
  constructor() { }

  // tslint:disable-next-line:use-life-cycle-interface
  ngDoCheck() {
    this.user = firebase.auth().currentUser;
  }
}
