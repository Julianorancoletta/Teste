import { Component, HostListener } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { car } from '../../component/car/car';
import { searchComponent } from '../../component/search/search.component';
import { listProduct } from '../../models/product.model';
import { ProdutosService } from '../../services/produtos/produtos.service';

@Component({
  selector: 'app-showcase',
  templateUrl: './show_case.component.html',
  styleUrls: ['./show_case.component.scss'],
})

export class ShowCaseComponent extends searchComponent {

  cars: any = new car();

  constructor(
    private produtoService: ProdutosService,private route: ActivatedRoute,
    private sanitizer: DomSanitizer) {
    super();
   
    this.route.params.subscribe(params => {
      this.listaProduto = this.route.snapshot.data['Product'];
      super.onInit(params);
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

  photoURL(imageUrl) {
    return this.sanitizer.bypassSecurityTrustUrl(imageUrl);
  }
}
