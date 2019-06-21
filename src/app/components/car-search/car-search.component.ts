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

  colors = [ 
    { name: 'Red' },
    { name: 'White' },
    { name: 'Gray' },
    { name: 'Black' },
    { name: 'Silver' }
  ];  

  checkboxes = [
    {
      value: 'isFourWheelDrive', 
      name: 'Four Wheel Drive',
      selected: false 
    },
    {
      value: 'hasSunroof',
      name: 'Sun Roof',
      selected: false
    },
    {
      value: 'hasNavigation',
      name: 'Navigation',
      selected: false
    },
    {
      value: 'hasLowMiles',
      name: 'Low Miles',
      selected: false
    },
    {
      value: 'hasPowerWindows',
      name: 'Power Windows',
      selected: false
    },
    {
      value: 'hasHeatedSeats',
      name: 'Heated Seats',
      selected: false
    }
  ]

  constructor(private carsService: CarsService) { }

  ngOnInit() { }

  getCars(): void {
    this.carsService.getCars()
      .subscribe(cars => this.cars = cars);
  }
  
  getCarsAfterFilter(color: string, options: any[]) {
    this.carsService.searchCars(color, options)
      .subscribe(cars => this.cars = cars);
  }

  filterCars(filterCarForm: NgForm) {
    let options = this.checkboxes.filter((ch) => { return ch.selected })
                     .map((ch) => { return { 'name': ch.value, 'value': 'true' } });
    let color = filterCarForm.controls['color'].value;    
    this.getCarsAfterFilter(color, options);
  }

}
