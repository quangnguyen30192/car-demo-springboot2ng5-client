import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {CARS_API, COOL_CARS_API} from "../global";

@Injectable()
export class CarService {

  constructor(private http: HttpClient) {

  }

  getCoolCars(): Observable<any> {

    return this.http.get(COOL_CARS_API);
  }

  saveOrUpdate(car: any): Observable<any> {
    if (car['href']) {
      return this.http.put(car.href, car);
    }

    return this.http.post(CARS_API, car);
  }

  remove(href: string): Observable<any> {
    return this.http.delete(href);
  }

  get(id: string) {
    return this.http.get(`${CARS_API}/${id}`);
  }
}
