import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {CarService} from "./services/car.service";
import { CarListComponent } from './car-list/car-list.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {
  MatButtonModule, MatCardModule, MatChipsModule, MatInputModule, MatListModule,
  MatToolbarModule
} from "@angular/material";
import {GiphyService} from "./services/giphy.service";
import { CarEditComponent } from './car-edit/car-edit.component';
import {FormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";


export const APP_ROUTES: Routes = [
  {
    path: '', redirectTo: '/car-list', pathMatch: 'full'
  },
  {
    path: 'car-list',
    component: CarListComponent
  },
  {
    path: 'car-add',
    component: CarEditComponent
  },
  {
    path: 'car-edit/:id',
    component: CarEditComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    CarListComponent,
    CarEditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    MatChipsModule,
    FormsModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [CarService, GiphyService],
  bootstrap: [AppComponent]
})
export class AppModule { }

