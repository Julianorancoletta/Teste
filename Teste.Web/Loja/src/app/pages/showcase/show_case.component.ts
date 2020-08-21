import { Component, HostListener } from '@angular/core';
import { ProdutosService } from '../../services/produtos/produtos.service';
import { ActivatedRoute } from '@angular/router';
import { busca } from '../../core/models/busca.model';
import { ProductModel, listProduct } from '../../core/models/product.model';
import { car } from '../../component/car/car';

@Component({
  selector: 'app-showcase',
  templateUrl: './show_case.component.html',
  styleUrls: ['./show_case.component.scss'],
})

export class ShowCaseComponent {
  paginaAtual: number;
  list: boolean = false;
  produtos: ProductModel[];
  listaProduto: listProduct;
  Busca: busca;
  cars: any = new car();

  constructor(
    private produtoService: ProdutosService,
    private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.paginaAtual = 1;
      this.Busca = new busca
      this.listaProduto = this.route.snapshot.data['Product'];
      this.produtos = this.listaProduto.product;
      this.Busca.ItemBuscado = params.id ? params.id : " ";
      this.Busca.subCategoria = params.subCategoria ? params.subCategoria : " ";
      this.Busca.categoria = params.categoria ? params.categoria : " "
    });
  }

  onScroll() {
    if (this.paginaAtual == this.listaProduto.numPagina)
      return;

    this.Busca.numeroPagina += 1;
    this.Busca.itensPorPagina = 4;
    this.loaderProducts();
  }

  listar() {
    this.list = this.list == false ? true : false;
  }

  order(value) {
    this.Busca.order = value;
    this.loaderProducts();
  }

  loaderProducts() {
    this.produtoService.getProducts(this.Busca).subscribe((listProdutos: listProduct) => {
      this.listaProduto = listProdutos;
    }, error => console.log(error),
      () => {
        this.paginaAtual++;
        this.listaProduto.product.forEach(
          element => {
            this.produtos.push(element);
          }
        )
      }
    )
  }
}
