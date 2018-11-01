import { Injectable } from '@angular/core';
import { DriverComponent } from './driver/driver.component';
import { RiderComponent } from './rider/rider.component';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Injectable()
export class LyftService {
    riders: FirebaseListObservable<any[]>;
    drivers: FirebaseListObservable<any[]>;
    title = 'Lyft';
    constructor(private database: AngularFireDatabase) {
        this.riders = database.list('riders');
        this.drivers = database.list('drivers');
    }

    // Riders
    getRiders() {
        return this.riders;
    }
    addRiders(newRiders: Riders) {
        this.riders.push(newRiders);
    }

    getRidersById(ridersId: string) {
        return this.database.object('riders/' + ridersId);
    }
    updateRiders(localUpdatedRiders) {
        var albumEntryInFirebase = this.getRidersById(localUpdatedRiders.$key);
        albumEntryInFirebase.update({
            name: localUpdatedRiders.name,
            car: localUpdatedRiders.car,
            description: localUpdatedRiders.description,
            rides: localUpdatedRiders.rides
        });
    }

    deleteRiders(localRidersToDelete) {
        var albumEntryInFirebase = this.getDriversById(localRidersToDelete.$key);
        albumEntryInFirebase.remove();
    }


    // Drivers
    getDrivers() {
        return this.drivers;
    }
    addDrivers(newDrivers: Drivers) {
        this.drivers.push(newDrivers);
    }

    getDriversById(driversId: string) {
        return this.database.object('drivers/' + driversId);
    }
    updateDrivers(localUpdatedDrivers) {
        var albumEntryInFirebase = this.getDriversById(localUpdatedDrivers.$key);
        albumEntryInFirebase.update({
            name: localUpdatedDrivers.name,
            car: localUpdatedDrivers.car,
            description: localUpdatedDrivers.description,
            money: localUpdatedDrivers.money
        });
    }
    deleteDrivers(localDriversToDelete) {
        var albumEntryInFirebase = this.getDriversById(localDriversToDelete.$key);
        albumEntryInFirebase.remove();
    }
}