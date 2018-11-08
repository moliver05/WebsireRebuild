import { LyftService } from './lyft.service';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { masterFirebaseConfig } from './api-keys';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { AuthenticationService } from './authentication.service';

import { RiderDetailComponent } from './rider-detail/rider-detail.component';
import { DriverDetailComponent } from './driver-detail/driver-detail.component';
import { DriverComponent } from './driver/driver.component';
import { RiderComponent } from './rider/rider.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AdminComponent } from './admin/admin.component';


import { AuthGuard } from './auth-guard.service';
import { EditRiderComponent } from './edit-rider/edit-rider.component';
import { EditDriverComponent } from './edit-driver/edit-driver.component';


export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    DriverComponent,
    RiderComponent,
    RiderDetailComponent,
    DriverDetailComponent,
    WelcomeComponent,
    AdminComponent,
    EditRiderComponent,
    EditDriverComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  providers: [AuthGuard, AuthenticationService, LyftService],
  bootstrap: [AppComponent]
})



export class AppModule { }
