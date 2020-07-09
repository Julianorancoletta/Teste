import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ProdutosService } from './produtos.service';
import { ProductModel } from 'src/app/core/models/product.model';


@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProdutosComponent implements OnInit {

  constructor(private produtoService: ProdutosService) { 
    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '768px',
          numVisible: 2,
          numScroll: 2
      },
      {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1
      }
  ];
  }

  produtos:ProductModel[];
  responsiveOptions;
  
  ngOnInit(): void {
    this.produtoService.getProducts().subscribe(listProdutos =>{
      this.produtos = listProdutos
    },error => console.log(error))
  }  
}
