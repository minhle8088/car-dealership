/// <reference types="@types/googlemaps" />
import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../../shared/models/Restaurant';
import { RestaurantsService } from '../../shared/services/restaurants.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css']
})
export class RestaurantDetailComponent implements OnInit {  
  restaurant: Restaurant;

  constructor(
    private restaurantsService: RestaurantsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.pipe(switchMap((params: Params) =>  
      this.restaurantsService.getRestaurant(+params['id'])))
    .subscribe((restaurant: Restaurant) => {
      this.restaurant = restaurant;      
    });    
  }

}
