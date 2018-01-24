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
    if (car._links) {
      console.log(`update ${car.name}`);
      return this.http.put(car._links.self.href, car);
    }
    console.log(`save ${car.name}`);
    return this.http.post(CARS_API, car);
  }

  get(id: number) {
    return this.http.get(`${CARS_API}/${id}`);
  }
}
