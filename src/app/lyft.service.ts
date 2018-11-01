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
            title: localUpdatedRiders.name,
            artist: localUpdatedRiders.artist,
            description: localUpdatedAlbum.description
        });
    }
    deleteAlbum(localAlbumToDelete) {
        var albumEntryInFirebase = this.getAlbumById(localAlbumToDelete.$key);
        albumEntryInFirebase.remove();
    }

    getAlbums() {
        return this.albums;
    }
    addAlbum(newAlbum: Album) {
        this.albums.push(newAlbum);
    }

    getAlbumById(albumId: string) {
        return this.database.object('albums/' + albumId);
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