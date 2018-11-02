import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';
import { Riders } from '../riders.model';
import { LyftService } from '../lyft.service';

@Component({
  selector: 'app-rider',
  templateUrl: './rider.component.html',
  styleUrls: ['./rider.component.css'],
  providers: [LyftService]

})


export class RiderComponent implements OnInit {
  riders: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  constructor(private router: Router, private lyftService: LyftService) { }

  ngOnInit() {
    this.riders = this.lyftService.getRiders();
    console.log(this.router.url);
  }

  goToDetailPage(clickedRiders) {
    this.router.navigate(['riders', clickedRiders.$key]);
  }
}
