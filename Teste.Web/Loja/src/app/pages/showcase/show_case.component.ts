import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ProductModel } from 'src/app/core/models/product.model';
import { ProdutosService } from '../produtos/produtos.service';
import { busca } from 'src/app/core/models/busca.model'

@Component({
  selector: 'app-showcase',
  templateUrl: './show_case.component.html',
  styleUrls: ['./show_case.component.css'],
})
export class ShowCaseComponent implements OnInit {

  Busca : busca

  constructor(private produtoService: ProdutosService) {
  }

  produtos: ProductModel[];

  order(value) {
    this.Busca.order = value
  }

  ngOnInit(): void {
    this.loaderProducts();
  }

  loaderProducts(){
    this.produtoService.getProducts(this.Busca).subscribe(listProdutos => {
      this.produtos = listProdutos
    }, error => console.log(error))
  }

}
