import { Component, OnInit, Input } from '@angular/core';


import { car } from 'src/app/component/car/car';
import { ProductModel } from 'src/app/core/models/product.model';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produto.component.html',
  styleUrls: ['./lista-produto.component.css']
})
export class ListaProdutosComponent implements OnInit {

  @Input() produto: ProductModel 

  cars: any = new car();

  constructor() { }

  ngOnInit(): void {
    
  }

}