import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';
import { Drivers } from '../drivers.model';
import { LyftService } from '../lyft.service';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css'],
  providers: [LyftService]

})


export class DriverComponent implements OnInit {
  drivers: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  constructor(private router: Router, private lyftService: LyftService) { }

  ngOnInit() {
    this.drivers = this.lyftService.getDrivers();
    console.log(this.router.url);
  }

  goToDetailPage(clickedDrivers) {
    this.router.navigate(['drivers', clickedDrivers.$key]);
  }
}
