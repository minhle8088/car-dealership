import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarsComponent } from './components/cars/cars.component';
import { CarSearchComponent } from './components/car-search/car-search.component';
import { LightSwitchComponent } from './components/light-switch/light-switch.component';

const routes: Routes = [  
  { path: '', redirectTo: '/cars', pathMatch: 'full' },
  { path: 'cars', component: CarsComponent },
  { path: 'car-search', component: CarSearchComponent },
  { path: 'light-switch', component: LightSwitchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
