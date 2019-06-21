import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Car } from '../models/Car';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  private carsUrl = 'api/cars'; //URL to web api

  constructor(private http: HttpClient) { }

/** GET cars from the server */
getCars (): Observable<Car[]> {
  return this.http.get<Car[]>(this.carsUrl)
    .pipe(
      tap(_ => this.log('fetched cars')),
      catchError(this.handleError<Car[]>('getCars', []))
    );
}
  
searchCars(color: string, options: any[]): Observable<Car[]> {        
  if (!color && !options) {      
    return of([]);
  }

  let params = new HttpParams();
  params = params.append('color', color);

  for (var i = 0; i < options.length; i++) {
    params = params.append(options[i].name, options[i].value);  
  }

  return this.http.get<Car[]>(this.carsUrl, { params: params }).pipe(    
    tap(_ => this.log('found cars matching')),
    catchError(this.handleError<Car[]>('searchCars', []))
  );
}

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead     

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /**Log a message */
  private log(message: string) {
    console.log(message);
  }
}
