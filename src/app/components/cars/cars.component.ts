import { Component, OnInit } from '@angular/core';
import { Car } from '../../shared/models/Car';
import { CarsService } from '../../shared/services/cars.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  cars: Car[];

  constructor(private carsService: CarsService) { }

  ngOnInit() { 
    this.getCars();
  }

  getCars(): void {
    this.carsService.getCars()
      .subscribe(cars => this.cars = cars);
  }

}
