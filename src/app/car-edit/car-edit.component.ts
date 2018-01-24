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
  name: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private carService: CarService,
              private giphyService: GiphyService) {

  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.carService.get(id).subscribe((car: any) => {
            this.requestedCar = car;
            this.name = car.name;
            console.log(JSON.stringify(car));
            this.giphyService.searchImg(car.name).subscribe(imgUrl => {
              this.requestedCar.giphyUrl = imgUrl;
            });
          },
          err => {
            console.log(err);
            console.log(`no car for this id: ${id}, return to home page`);
            this.router.navigate(['/car-list']).then(() => {
              console.log('success');
            });

          });
      }
    });
  }

  onSave() {
    this.requestedCar.name = this.name;
    this.carService.saveOrUpdate(this.requestedCar).subscribe(
      car => {
        this.requestedCar = car;
        this.giphyService.searchImg(this.requestedCar.name).subscribe(
          url => this.requestedCar.giphyUrl = url
        );
      }
    );
  }
}




