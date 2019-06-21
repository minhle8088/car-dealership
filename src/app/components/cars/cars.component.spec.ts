import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { CarsComponent } from './cars.component';
import { CarsService } from '../../shared/services/cars.service';

describe('CarsComponent', () => {
  let component: CarsComponent;
  let fixture: ComponentFixture<CarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarsComponent ],
      imports: [
        HttpClientTestingModule
      ],
      providers: [CarsService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
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
