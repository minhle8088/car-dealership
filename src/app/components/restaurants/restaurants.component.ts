import { Component, OnInit } from '@angular/core';

import { Restaurant } from '../../shared/models/Restaurant';
import { RestaurantsService } from '../../shared/services/restaurants.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {
  restaurants: Restaurant[];

  constructor(
    private restaurantsService: RestaurantsService,
  ) { }

  ngOnInit() { 
    this.getRestaurants();
  }

  getRestaurants(): void {
    this.restaurantsService.getRestaurants()
      .subscribe(restaurants => this.restaurants = restaurants);
  }

}
