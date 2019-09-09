import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import 'rxjs/operators';

import { Restaurant } from '../models/Restaurant';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {

  private headers = new Headers({ 'Content-Type': 'application/json' });
  private restaurantsUrl = 'api/restaurants'; //URL to web api
  // private restaurantsUrl = 'http://sandbox.bottlerocketapps.com/BR_iOS_CodingExam_2015_Server/restaurants.json'; //URL to web api

  constructor(private http: HttpClient) { }

  /** GET cars from the server */
  getRestaurants (): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(this.restaurantsUrl)
      .pipe(
        tap(_ => this.log('fetched restaurants')),
        catchError(this.handleError<Restaurant[]>('getRestaurants', []))
      );
  }

  /** GET restaurant detail*/
  getRestaurant(id: number): Promise<Restaurant> {
    const url = `${this.restaurantsUrl}/${id}`
    return this.http.get(url)
      .toPromise()
      .then(response => response as Restaurant)
      .catch(this.handlePromiseError);
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

  private handlePromiseError(error: any): Promise<any> {
    console.log('An error occur', error);
    return Promise.reject(error.message || error)
  }

  /**Log a message */
  private log(message: string) {
    console.log(message);
  }
  
}
