import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  riders: Observable<any []>;
  drivers: Observable<any[]>;
  title = 'Lyft';
  constructor(db: AngularFireDatabase) {
    this.riders = db.list('riders');
    this.drivers = db.list('drivers');
    }
}
