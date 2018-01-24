import { Component, OnInit } from '@angular/core';
import {CarService} from "../services/car.service";
import {GiphyService} from "../services/giphy.service";

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  cars: Array<any>;

  constructor(private carService: CarService, private giphyService: GiphyService) { }

  ngOnInit() {
    this.carService.getCoolCars().subscribe(
      data => {
        this.cars = data;
        this.cars.forEach(car => this.giphyService.searchImg(car.name)
          .subscribe(url => car.giphyUrl = url))
      }
    );
  }
}
