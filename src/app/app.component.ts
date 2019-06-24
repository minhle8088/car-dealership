import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to Car Dealership';  
  tabs = [    
    { path: 'cars', label: 'All Cars' },
    { path: 'car-search', label: 'Search Car' }
  ]
}
