import { Component, OnInit, Input } from '@angular/core';
import { ProdutosService } from '../produtos.service';
import { ProductModel } from 'src/app/models/product.model';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.css']
})
export class ListaProdutosComponent implements OnInit {

  @Input() produto: ProductModel 

  constructor() { }

  ngOnInit(): void {
    
  }

}
