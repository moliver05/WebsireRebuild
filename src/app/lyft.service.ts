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
    addRiders(newRider: Riders) {
        this.riders.push(newRider);
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

    deleteDrivers(localDriversToDelete) {
        var albumEntryInFirebase = this.getDriversById(localDriversToDelete.$key);
        albumEntryInFirebase.remove();
    }


    // Drivers
    getAlbums() {
        return this.albums;
    }
    addAlbum(newDrivers: Drivers) {
        this.drivers.push(newdriver);
    }

    getDriversById(driversId: string) {
        return this.database.object('drivers/' + driversId);
    }
    updateAlbum(localUpdatedAlbum) {
        var albumEntryInFirebase = this.getAlbumById(localUpdatedAlbum.$key);
        albumEntryInFirebase.update({
            title: localUpdatedAlbum.title,
            artist: localUpdatedAlbum.artist,
            description: localUpdatedAlbum.description
        });
    }
    deleteAlbum(localAlbumToDelete) {
        var albumEntryInFirebase = this.getAlbumById(localAlbumToDelete.$key);
        albumEntryInFirebase.remove();
    }
}