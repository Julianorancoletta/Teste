import { Component } from '@angular/core';
import { car } from '../../component/car/car';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})

export class CheckoutComponent {
  constructor() { }
  cars = new car()
}
