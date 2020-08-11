import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { ProdutosService } from '../../services/produtos/produtos.service';

import { ActivatedRoute } from '@angular/router';
import { busca } from 'app/core/models/busca.model';
import { ProductModel } from 'app/core/models/product.model';

@Component({
  selector: 'app-showcase',
  templateUrl: './show_case.component.html',
  styleUrls: ['./show_case.component.css'],

})
export class ShowCaseComponent {

  produtos: ProductModel[];
  Busca: busca;

  constructor(
    private produtoService: ProdutosService,
    private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.Busca = new busca
      this.produtos = this.route.snapshot.data['Product'];
      this.Busca.ItemBuscado = params.id ? params.id : " ";
      this.Busca.categoria = params.categoria ? params.categoria :" " 

    });    
  }

  order(value) {
    
    this.Busca.order = value
    this.loaderProducts();
  }

  loaderProducts() {
    this.produtoService.getProducts(this.Busca).subscribe(listProdutos => {
      this.produtos = listProdutos
    }, error => console.log(error))
  }



}
