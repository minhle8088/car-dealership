import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Car } from '../../shared/models/Car';
import { CarsService } from '../../shared/services/cars.service';

@Component({
  selector: 'app-car-search',
  templateUrl: './car-search.component.html',
  styleUrls: ['./car-search.component.css']
})
export class CarSearchComponent implements OnInit {  
  cars: Car[];
  makes: string[] = [];

  // colors = [ 
  //   { name: 'Red' },
  //   { name: 'White' },
  //   { name: 'Gray' },
  //   { name: 'Black' },
  //   { name: 'Silver' }
  // ];  

  colors = [ 
    { name: 'Red' },
    { name: 'White' },
    { name: 'Gray' },
    { name: 'Black' },
    { name: 'Silver' }
  ];  

  checkboxes = [
    {
      value: 'isFourWheelDrive', name: 'Four Wheel Drive', selected: false 
    },
    {
      value: 'hasSunroof', name: 'Sun Roof', selected: false
    },
    {
      value: 'hasNavigation', name: 'Navigation', selected: false
    },
    {
      value: 'hasLowMiles', name: 'Low Miles', selected: false
    },
    {
      value: 'hasPowerWindows', name: 'Power Windows', selected: false
    },
    {
      value: 'hasHeatedSeats', name: 'Heated Seats', selected: false
    }
  ];

  selectedColor = '';
  selectedMake = '';

  constructor(private carsService: CarsService) { }

  ngOnInit() {
    this.getCars();
  }

  getCars(): void {
    this.carsService.getCars()
      .subscribe(cars => { 
        this.cars = cars;
        cars.forEach (car => {
          if (this.makes.indexOf(car.make) == -1)
            this.makes.push(car.make);        
        });
        console.log(this.cars);
        console.log(this.makes);
        this.makes.sort();
        
      }
      );
  }
  
  getCarsAfterFilter(make: string, color: string, options: any[]) {
    this.carsService.searchCars(make, color, options)
      .subscribe(cars => this.cars = cars);
  }

  filterCars(filterCarForm: NgForm) {
    let options = this.checkboxes.filter((ch) => { return ch.selected })
                     .map((ch) => { return { 'name': ch.value, 'value': 'true' } });    
    this.getCarsAfterFilter(this.selectedMake, this.selectedColor, options);
  }

  getMakes(): void {    
    // this.getCars();
    this.cars.forEach (car => {
      this.makes.push(car.make);        
    });
  }

}
