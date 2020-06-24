import { Component, OnInit } from '@angular/core';
import { ProdutosService } from './produtos.service';
import { ProductModel } from 'src/app/models/product.model';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  constructor(private produtoService: ProdutosService) { }

  produtos:ProductModel[]
  
  ngOnInit(): void {
    this.produtoService.getProducts().subscribe(listProdutos =>{
      this.produtos = listProdutos
    },error => console.log(error))
  }

}
