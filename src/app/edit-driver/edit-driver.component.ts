import { Component, OnInit, Input } from '@angular/core';
import { LyftService } from './../lyft.service'; 

@Component({
  selector: 'app-edit-driver',
  templateUrl: './edit-driver.component.html',
  styleUrls: ['./edit-driver.component.css']
})
export class EditDriverComponent implements OnInit {
  @Input() selectedDriver;

  constructor(private lyftservice: LyftService) { }

  ngOnInit() {
  }
  beginUpdatingAlbum(driverToUpdate) {
    this.lyftservice.updateDrivers(driverToUpdate);
  }
  beginDeletingDriver(driverToDelete) {
    if (confirm('Confirm')) {
      this.lyftservice.deleteDrivers(driverToDelete);
    }
  }
}
