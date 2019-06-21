import { TestBed, async, tick } from '@angular/core/testing';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { of } from 'rxjs';
import { CarsService } from './cars.service';
import { Car } from '../models/Car';

describe('CarsService', () => {

  let service: CarsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ], 
      providers: [CarsService]
    });
    service = TestBed.get(CarsService);
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 25000;
  });

  it('should be created', () => {
    // const service: CarsService = TestBed.get(CarsService);
    expect(service).toBeTruthy();
  });

  it('should have getCars function', () => {
    // const service: CarsService = TestBed.get(CarsService);
    expect(service.getCars).toBeTruthy();
  })  

  it('should have searchCars function', () => {
    // const service: CarsService = TestBed.get(CarsService);
    expect(service.searchCars).toBeTruthy();
  })  
});
