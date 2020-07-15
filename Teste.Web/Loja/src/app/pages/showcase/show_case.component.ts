import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ProductModel } from 'src/app/core/models/product.model';
import { ProdutosService } from '../produtos/produtos.service';


@Component({
  selector: 'app-showcase',
  templateUrl: './show_case.component.html',
  styleUrls: ['./show_case.component.css'],
})
export class ShowCaseComponent implements OnInit {

  constructor(private produtoService: ProdutosService) { 
  }

  produtos:ProductModel[];
  
  ngOnInit(): void {
    debugger
    this.produtoService.getProducts().subscribe(listProdutos =>{
      this.produtos = listProdutos
    },error => console.log(error))
  }  
}
