import { LyftService } from '../lyft.service'
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-edit-rider',
  templateUrl: './edit-rider.component.html',
  styleUrls: ['./edit-rider.component.css']
})
export class EditRiderComponent implements OnInit {
  @Input() selectedRiders;

  constructor(private lyftservice: LyftService) { }

  ngOnInit() {
  }
  beginUpdatingRiders(RidersToUpdate) {
    this.lyftservice.updateRiders(RidersToUpdate);
  }
  beginDeletingRiders(RidersToDelete) {
    if (confirm("Confirm")) {
      this.lyftservice.deleteRiders(RidersToDelete);
    }
  }
}