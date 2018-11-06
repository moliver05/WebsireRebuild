import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { RiderDetailComponent } from './rider-detail/rider-detail.component';
import { DriverDetailComponent } from './driver-detail/driver-detail.component';
import { DriverComponent } from './driver/driver.component';
import { RiderComponent } from './rider/rider.component';
import { WelcomeComponent } from './welcome/welcome.component';


const appRoutes: Routes = [
    {
        path: '',
        component: WelcomeComponent
    },
    
    {
        path: 'admin',
        component: AdminComponent
    },
    {
        path: 'riders',
        component: RiderComponent
    },
    {
        path: 'riders/:id',
        component: RiderDetailComponent
    },
    {
        path: 'drivers',
        component: DriverComponent
    },
    {
        path: 'drivers/:id',
        component: DriverDetailComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
