import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ProductModel } from 'src/app/core/models/product.model';
import { ProdutosService } from '../produtos/produtos.service';
import { busca } from 'src/app/core/models/busca.model'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-showcase',
  templateUrl: './show_case.component.html',
  styleUrls: ['./show_case.component.css'],
})
export class ShowCaseComponent implements OnInit {

  Busca: busca

  constructor(private produtoService: ProdutosService,
    private route: ActivatedRoute) {
      this.route.params.subscribe(res => {
        this.id = res.id == 0 ? null : res.id
      });
  }

  id: string;
  produtos: ProductModel[];

  order(value) {
    this.Busca.order = value
  }

  ngOnInit(): void {
    debugger
    if (this.id) {
      this.Busca = new busca;
      this.Busca.ItemBuscado = this.id
    }
    this.loaderProducts();
  }

  loaderProducts() {
    this.produtoService.getProducts(this.Busca).subscribe(listProdutos => {
      this.produtos = listProdutos
    }, error => console.log(error))
  }

}
