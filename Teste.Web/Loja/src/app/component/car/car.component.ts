import { Component, OnInit, Input, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { car } from './car';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent{
  cars: any = new car();
  total:number
  constructor() {
  }
}
