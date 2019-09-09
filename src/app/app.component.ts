import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from './animation';
import { Router } from '@angular/router';
import { Event as NavigationEvent } from "@angular/router";
import { filter } from "rxjs/operators";
import { NavigationStart } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [ slideInAnimation ]
})
export class AppComponent {
  title = 'Welcome to Car Dealership';  
  tabs = [    
    { path: 'cars', label: 'All Cars' },
    { path: 'car-search', label: 'Search Car' }, 
    { path: 'restaurants', label: 'Restaurants' },
    { path: 'light-switch', label: 'Light Switch' }
  ];
  visible = false;

  constructor( private router: Router ) {
    router.events
        .pipe(
            filter(( event: NavigationEvent ) => {
                    return( event instanceof NavigationStart );
                }))
        .subscribe(( event: NavigationStart ) => {
                console.log( "route:", event.url );
                this.visible = event.url.includes("detail");
                console.groupEnd();
            });
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  goBack(): void {    
    this.router.navigate(['/restaurants', {}]);
  }
}
