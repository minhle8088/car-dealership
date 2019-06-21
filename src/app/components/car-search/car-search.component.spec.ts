import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { of } from 'rxjs';

import { FormsModule }   from '@angular/forms';
import { CarSearchComponent } from './car-search.component';
import { CarsService } from '../../shared/services/cars.service';
import { DebugElement } from '@angular/core';
import { Car } from '../../shared/models/Car';

describe('CarSearchComponent', () => {
  let component: CarSearchComponent;
  let fixture: ComponentFixture<CarSearchComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  let carsService: CarsService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarSearchComponent ],
      imports: [
        HttpClientTestingModule,
        FormsModule
      ],
      providers: [CarsService]
    })
    .compileComponents();

    carsService = TestBed.get(CarsService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarSearchComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('form'));
    el = de.nativeElement;
    fixture.detectChanges();    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have ngOnInit function', () => {
    expect(component.ngOnInit).toBeTruthy();
  })

  it('should have getCars function', () => {
    expect(component.getCars).toBeTruthy();
  })

  it('should have getCarsAfterFilter function', () => {
    expect(component.getCarsAfterFilter).toBeTruthy();
  })

  it('should have filterCars function', () => {
    expect(component.filterCars).toBeTruthy();
  })

  it('should call filterCars function', () => {
    spyOn(component, 'filterCars');
    el = fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    expect(component.filterCars).toHaveBeenCalledTimes(1);
  })
});
