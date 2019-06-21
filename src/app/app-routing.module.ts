import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarsComponent } from './components/cars/cars.component';
import { CarSearchComponent } from './components/car-search/car-search.component';

const routes: Routes = [  
  { path: '', redirectTo: '/cars', pathMatch: 'full' },
  { path: 'cars', component: CarsComponent },
  { path: 'car-search', component: CarSearchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
