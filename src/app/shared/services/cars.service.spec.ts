import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { CarsService } from './cars.service';
import { Car } from '../models/Car';
import { CARS, GRAY_CARS, BLACK_LOWMILES, FOUR_WHEEL_DRIVE_HEATED_SEATS } from '../mock-data/cars-data'; //mock data

describe('CarsService', () => {
  let service: CarsService;
  let httpTestingController: HttpTestingController;
  let mockCars = [...CARS];
  let grayCars = [...GRAY_CARS];
  let blackLowMiles = [...BLACK_LOWMILES];
  let fourWheelDriveHeatedSeats = [...FOUR_WHEEL_DRIVE_HEATED_SEATS];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ], 
      providers: [CarsService]
    });
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(CarsService);    
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {    
    expect(service).toBeTruthy();
  });

  it('should have getCars function', () => {    
    expect(service.getCars).toBeTruthy();
  })  

  it('should have searchCars function', () => {    
    expect(service.searchCars).toBeTruthy();
  })  

  describe('getCars', () => {
    it('should return mock cars', () => {
      service.getCars().subscribe(
        cars => expect(cars.length).toEqual(mockCars.length),
        fail
      );
      // Receive GET request
      const req = httpTestingController.expectOne('api/cars');
      expect(req.request.method).toEqual('GET');      
      // Respond with the mock cars
      req.flush(mockCars);
    });
  });

  describe('searchCars', () => {
    it('should find cars matching the search criteria with color = Gray', () => {      
      console.log('mock data with color = Gray; lengh: ' + grayCars.length);

      const color = 'Gray';   
      const options = [];      

      service.searchCars(color, options).subscribe(
        cars => expect(cars.length).toEqual(grayCars.length),
        fail
      );

      // Receive GET request      
      const req = httpTestingController.expectOne(req => req.method === 'GET' && req.url === 'api/cars');      
      // Respond with the updated cars      
      req.flush(grayCars);
    });

    it('should find cars matching the search criteria with color = Black and has low miles', () => {      
      console.log('color = Black and hasLowMiles = true; lengh: ' + blackLowMiles.length);

      const color = 'Black';   
      const options = ['hasLowMiles'];      

      service.searchCars(color, options).subscribe(
        cars => expect(cars.length).toEqual(blackLowMiles.length),
        fail
      );

      // Receive GET request      
      const req = httpTestingController.expectOne(req => req.method === 'GET' && req.url === 'api/cars');      
      // Respond with the updated cars      
      req.flush(blackLowMiles);
    });
  });

  it('should find cars matching the search criteria with four wheel drive and heated seats', () => {      
    console.log('four wheel drive and heated seats; lengh: ' + fourWheelDriveHeatedSeats.length);

    const color = '';   
    const options = ['isFourWheelDrive', 'hasHeatedSeats'];      

    service.searchCars(color, options).subscribe(
      cars => expect(cars.length).toEqual(fourWheelDriveHeatedSeats.length),
      fail
    );

    // Receive GET request      
    const req = httpTestingController.expectOne(req => req.method === 'GET' && req.url === 'api/cars');      
    // Respond with the updated cars      
    req.flush(fourWheelDriveHeatedSeats);
  });
  
});

