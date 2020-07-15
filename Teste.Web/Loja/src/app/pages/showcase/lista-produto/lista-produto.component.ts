import { Component, OnInit, Input } from '@angular/core';
import { ProductModel } from 'src/app/core/models/product.model';
import { car } from 'src/app/component/car/car';

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
