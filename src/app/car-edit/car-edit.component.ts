import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs/Subscription";
import {ActivatedRoute, Router} from "@angular/router";
import {CarService} from "../services/car.service";
import {GiphyService} from "../services/giphy.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-car-edit',
  templateUrl: './car-edit.component.html',
  styleUrls: ['./car-edit.component.css']
})
export class CarEditComponent implements OnInit {
  ngOnInit(): void {
    console.log('init Caredit')
  }

  constructor(){

  }
}




