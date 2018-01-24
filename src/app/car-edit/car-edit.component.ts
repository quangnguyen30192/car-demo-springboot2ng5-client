import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CarService} from "../services/car.service";
import {GiphyService} from "../services/giphy.service";
import {Car} from "../model/Car";

@Component({
  selector: 'app-car-edit',
  templateUrl: './car-edit.component.html',
  styleUrls: ['./car-edit.component.css']
})
export class CarEditComponent implements OnInit {

  requestedCar: Car;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.carService.get(id).subscribe((car: any) => {
          this.requestedCar = car;
          this.giphyService.searchImg(car.name).subscribe(imgUrl => {
            this.requestedCar.giphyUrl = imgUrl;
          });
        },
        err => {
          console.log(err);
          console.log(`no car for this id: ${id}`);
        });
    });
  }

  constructor(private route: ActivatedRoute,
              private router: Router,
              private carService: CarService,
              private giphyService: GiphyService) {

  }
}




