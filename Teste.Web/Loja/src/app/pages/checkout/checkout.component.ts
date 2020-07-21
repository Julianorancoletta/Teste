import { Component, OnInit } from '@angular/core';
import { car } from 'src/app/component/car/car';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor() { }
  cars = new car()
  ngOnInit(): void {
  }

}
