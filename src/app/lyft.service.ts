import { Injectable } from '@angular/core';
import { Riders } from './riders.model';
import { Drivers} from './drivers.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Injectable()
export class LyftService {
    riders: FirebaseListObservable<any[]>;
    drivers: FirebaseListObservable<any[]>;

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
        const riderEntryInFirebase = this.getRidersById(localUpdatedRiders.$key);
        riderEntryInFirebase.update({
            name: localUpdatedRiders.name,
            car: localUpdatedRiders.car,
            description: localUpdatedRiders.description,
            rides: localUpdatedRiders.rides
        });
    }

    deleteRiders(localRidersToDelete) {
        const riderEntryInFirebase = this.getDriversById(localRidersToDelete.$key);
        riderEntryInFirebase.remove();
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
        const driverEntryInFirebase = this.getDriversById(localUpdatedDrivers.$key);
        driverEntryInFirebase.update({
            name: localUpdatedDrivers.name,
            car: localUpdatedDrivers.car,
            description: localUpdatedDrivers.description,
            money: localUpdatedDrivers.money
        });
    }
    deleteDrivers(localDriversToDelete) {
        const driverEntryInFirebase = this.getDriversById(localDriversToDelete.$key);
        driverEntryInFirebase.remove();
    }
}
