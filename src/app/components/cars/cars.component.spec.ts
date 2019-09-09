import { ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { PrjMaterialModule } from '../../material.module';

import { CarsComponent } from './cars.component';
import { CarsService } from '../../shared/services/cars.service';

describe('CarsComponent', () => {
  let component: CarsComponent;
  let fixture: ComponentFixture<CarsComponent>;  
  let carsService: CarsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ CarsComponent ],
      imports: [
        HttpClientTestingModule,
        PrjMaterialModule
      ],
      providers: [CarsService]
    })
    carsService = TestBed.get(CarsService);

    fixture = TestBed.createComponent(CarsComponent);
    component = fixture.componentInstance;
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
});