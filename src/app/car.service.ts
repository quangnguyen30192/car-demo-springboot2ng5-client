import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {API_BACKEND} from "./global";

@Injectable()
export class CarService {


  constructor(private http: HttpClient) {

  }

  getCoolCars(): Observable<any> {
    return this.http.get(API_BACKEND + '/cool-cars');
  }

  add(car: any): Observable<any> {
    return this.http.post(API_BACKEND + '/cars', car);
  }

}
