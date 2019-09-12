import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService} from './shared/services/in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarsComponent } from './components/cars/cars.component';
import { CarSearchComponent } from './components/car-search/car-search.component';
import { PrjMaterialModule } from './material.module';
import { SortByPipe } from './shared/pipes/sortOrder.pipe';
import { LightSwitchComponent } from './components/light-switch/light-switch.component';
import { RestaurantsComponent } from './components/restaurants/restaurants.component';
import { RestaurantDetailComponent } from './components/restaurant-detail/restaurant-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    CarSearchComponent,    
    SortByPipe,
    LightSwitchComponent,
    RestaurantsComponent,
    RestaurantDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,    
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    PrjMaterialModule,
    FlexLayoutModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    AgmCoreModule.forRoot({
      apiKey: ''
    })
  ],
  providers: [],
  bootstrap: [AppComponent],  
})
export class AppModule { }
