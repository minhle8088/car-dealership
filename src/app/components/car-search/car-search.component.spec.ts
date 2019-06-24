import { fakeAsync, ComponentFixture, TestBed} from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { FormsModule }   from '@angular/forms';
import { CarMaterialModule } from '../../material.module';

import { CarSearchComponent } from './car-search.component';
import { CarsService } from '../../shared/services/cars.service';
import { DebugElement } from '@angular/core';

describe('CarSearchComponent', () => {
  let component: CarSearchComponent;
  let fixture: ComponentFixture<CarSearchComponent>;
  let de: DebugElement;
  let el: HTMLElement;  

  let carsService: CarsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ CarSearchComponent ],
      imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientTestingModule,
        FormsModule, 
        CarMaterialModule
      ],
      providers: [CarsService]
    })
    .compileComponents();

    carsService = TestBed.get(CarsService);
  });

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

  // it('should call filterCars function', () => {
  //   spyOn(component, 'filterCars');
  //   el = fixture.debugElement.query(By.css('button')).nativeElement;
  //   el.click();
  //   fixture.detectChanges();
  //   expect(component.filterCars).toHaveBeenCalledTimes(1);
  // })  

  // it('checkbox Four Wheel Drive is not checked at beginning, then send true when selected', ((done: DoneFn) => {        
  //   const compiled = fixture.debugElement.nativeElement;
  //   const elem = compiled.querySelector('#isFourWheelDrive-input');
  //   expect(elem.checked).toBeFalsy;
  //   elem.click();
  //   fixture.detectChanges();
  //   expect(elem.checked).toBe(true);
  //   done();
  // }));

  // it('checkbox Sun Roof is not checked at beginning, then send true when selected', ((done: DoneFn) => {        
  //   const compiled = fixture.debugElement.nativeElement;
  //   const elem = compiled.querySelector('#hasSunroof-input');
  //   expect(elem.checked).toBeFalsy;
  //   elem.click();
  //   fixture.detectChanges();
  //   expect(elem.checked).toBe(true);
  //   done();
  // }));

  // it('checkbox Navigation is not checked at beginning, then send true when selected', ((done: DoneFn) => {        
  //   const compiled = fixture.debugElement.nativeElement;
  //   const elem = compiled.querySelector('#hasNavigation-input');
  //   expect(elem.checked).toBeFalsy;
  //   elem.click();
  //   fixture.detectChanges();
  //   expect(elem.checked).toBe(true);
  //   done();
  // }));

  // it('checkbox Low Miles is not checked at beginning, then send true when selected', ((done: DoneFn) => {        
  //   const compiled = fixture.debugElement.nativeElement;
  //   const elem = compiled.querySelector('#hasLowMiles-input');
  //   expect(elem.checked).toBeFalsy;
  //   elem.click();
  //   fixture.detectChanges();
  //   expect(elem.checked).toBe(true);
  //   done();
  // }));

  // it('checkbox Power Windows is not checked at beginning, then send true when selected', ((done: DoneFn) => {        
  //   const compiled = fixture.debugElement.nativeElement;
  //   const elem = compiled.querySelector('#hasPowerWindows-input');
  //   expect(elem.checked).toBeFalsy;
  //   elem.click();
  //   fixture.detectChanges();
  //   expect(elem.checked).toBe(true);
  //   done();
  // }));

  // it('checkbox Heated Seats is not checked at beginning, then send true when selected', ((done: DoneFn) => {        
  //   const compiled = fixture.debugElement.nativeElement;
  //   const elem = compiled.querySelector('#hasHeatedSeats-input');
  //   expect(elem.checked).toBeFalsy;
  //   elem.click();
  //   fixture.detectChanges();
  //   expect(elem.checked).toBe(true);
  //   done();
  // }));

});
