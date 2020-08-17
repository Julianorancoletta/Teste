import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { ProdutosService } from '../../services/produtos/produtos.service';

import { ActivatedRoute } from '@angular/router';
import { busca } from '../../core/models/busca.model';
import { ProductModel, listProduct } from '../../core/models/product.model';

@Component({
  selector: 'app-showcase',
  templateUrl: './show_case.component.html',
  styleUrls: ['./show_case.component.css'],

})
export class ShowCaseComponent {

  produtos: ProductModel[];
  listaProduto : listProduct;
  Busca: busca;

  constructor(
    private produtoService: ProdutosService,
    private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.Busca = new busca
      this.listaProduto = this.route.snapshot.data['Product'];
      this.produtos = this.listaProduto.product;
      this.Busca.ItemBuscado = params.id ? params.id : " ";
      this.Busca.subCategoria = params.subCategoria ? params.subCategoria : " ";
      this.Busca.categoria = params.categoria ? params.categoria :" " 
    });    
  }

  order(value) {
    
    this.Busca.order = value
    this.loaderProducts();
  }

  loaderProducts() {
    this.produtoService.getProducts(this.Busca).subscribe((listProdutos:listProduct) => {
      this.produtos = listProdutos.product
    }, error => console.log(error))
  }



}
