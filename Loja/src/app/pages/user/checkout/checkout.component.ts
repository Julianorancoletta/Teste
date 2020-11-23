import { Component, OnInit } from '@angular/core';
import { car } from '../../../component/car/car';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})

export class CheckoutComponent implements OnInit{
  qntProd:number[] = [];

  constructor() { }

  ngOnInit(): void {
    for (let index = 0; index <= 10; index++) {      
      if (index != 0)
        this.qntProd.push(index)
    }
  }
  cars = new car()
}
