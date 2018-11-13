import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Drivers } from '../drivers.model';
import { LyftService } from '../lyft.service';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-driver-detail',
  templateUrl: './driver-detail.component.html',
  styleUrls: ['./driver-detail.component.css']
})
export class DriverDetailComponent implements OnInit {
  driversId: string;
  driversToDisplay;
  provider: [LyftService];
  constructor(private route: ActivatedRoute, private location: Location, private lyftService: LyftService
  ) { }



  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.driversId = urlParameters['id'];
    });
    this.driversToDisplay = this.lyftService.getDriversById(this.driversId);

  }
}
