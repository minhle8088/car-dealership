import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CarsComponent } from './components/cars/cars.component';
import { CarSearchComponent } from './components/car-search/car-search.component';
import { LightSwitchComponent } from './components/light-switch/light-switch.component';
import { RestaurantsComponent } from './components/restaurants/restaurants.component';
import { RestaurantDetailComponent } from './components/restaurant-detail/restaurant-detail.component';

const routes: Routes = [  
  { path: '', redirectTo: '/cars', pathMatch: 'full' },
  { path: 'cars', component: CarsComponent },
  { path: 'car-search', component: CarSearchComponent },
  { path: 'light-switch', component: LightSwitchComponent },
  { path: 'restaurants', component: RestaurantsComponent, data: {animation: 'Restaurants'}},  
  { path: 'restaurant-detail/:id', component: RestaurantDetailComponent, data: {animation: 'RestaurantDetail'}},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    FlexLayoutModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
