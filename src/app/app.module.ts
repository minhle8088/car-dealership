import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService} from './shared/services/in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarsComponent } from './components/cars/cars.component';
import { CarSearchComponent } from './components/car-search/car-search.component';
import { CarMaterialModule } from './material.module';
import { SortByPipe } from './shared/pipes/sortOrder.pipe';
import { LightSwitchComponent } from './components/light-switch/light-switch.component';

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    CarSearchComponent,
    SortByPipe,
    LightSwitchComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,    
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    CarMaterialModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )        
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
