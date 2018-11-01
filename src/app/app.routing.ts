import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { LogInComponent } from './login/login.component';
import { RiderDetailComponent } from './rider-detail/rider-detail.component';
import { DriverDetailComponent } from './driver-detail/driver-detail.component';
import { DriverComponent } from './driver/driver.component';
import { RiderComponent } from './rider/rider.component';


const appRoutes: Routes = [
    {
        path: '',
        component: WelcomeComponent
    },
    {
        path: 'login',
        component: LogInComponent
    },
    {
        path: 'rider/:id',
        component: RiderComponent
    },
    {
        path: 'rider-detail',
        component: RiderDetailComponent
    },
    {
        path: 'driver/:id',
        component: DriverComponent
    },
    {
        path: 'driver-detail',
        component: DriverDetailComponent
    }, 
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);