import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Riders } from '../riders.model';
import { Drivers } from '../Drivers.model';
import { LyftService } from '../lyft.service';
import { FirebaseObjectObservable } from 'angularfire2/database';
@Component({
  selector: 'app-rider-detail',
  templateUrl: './rider-detail.component.html',
  styleUrls: ['./rider-detail.component.css']
})
export class RiderDetailComponent implements OnInit {
  ridersId: string;
  ridersToDisplay;
  provider: [LyftService]

  constructor(private route: ActivatedRoute, private location: Location, private lyftService: LyftService
  ) { }



  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.ridersId = urlParameters['id'];
    });
    this.ridersToDisplay = this.lyftService.getRidersById(this.ridersId);

  }
}
