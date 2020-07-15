import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductModel } from 'src/app/core/models/product.model';
import { ProdutosService } from '../produtos.service';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { CadastroProdutoComponent } from '../cadastro-produto/cadastro-produto.component';

@Component({
  selector: 'app-lista-produto',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
  providers: [DialogService]
})
export class ListaComponent implements OnInit, OnDestroy {

  constructor(
    private produtoService: ProdutosService,
    public dialogService: DialogService
  ) { }
  product: ProductModel[];
  ref: DynamicDialogRef
  cols: any[];
  ngOnInit(): void {
    this.cols = [
      { field: 'title', header: 'Titulo' },
      { field: 'brand', header: 'Marca' },
      { field: 'price', header: 'Preço' },
      { field: 'sale', header: 'Promoção' },
      { field: 'category', header: 'Categoria' },
    ];

    this.produtoService.getProducts().subscribe(listProdutos => {
      this.product = listProdutos

    }, error => console.log(error))
  }

  cadastro() {
    this.ref = this.dialogService.open(CadastroProdutoComponent, {
      header: 'Cadastro De Produto',
      width: '80%'
    });
    this.ref.onClose.subscribe((product: ProductModel) => {
      this.product.push(product);
    });
  }



  
  ngOnDestroy() {
    this.ref.close();
  }
}
