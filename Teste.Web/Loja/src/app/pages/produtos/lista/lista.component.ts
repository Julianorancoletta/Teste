import { Component, OnInit } from '@angular/core';

import { ProdutosService } from '../../../services/produtos/produtos.service';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { CadastroProdutoComponent } from '../cadastro-produto/cadastro-produto.component';
import { MessageService } from 'primeng/api';
import { busca } from '../../../core/models/busca.model';
import { ProductModel } from '../../../core/models/product.model';


@Component({
  selector: 'app-lista-produto',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
  providers: [DialogService, MessageService]
})
export class ListaComponent implements OnInit {

  constructor(
    private produtoService: ProdutosService,
    public dialogService: DialogService,
  ) {
    this.Busca = new busca;
   }

  products: ProductModel[];
  ref: DynamicDialogRef;
  cols: any[];
  loading: boolean;
  msg: string = null;
  product :ProductModel;
  Busca:busca;

  ngOnInit(): void {
    this.cols = [
      { field: 'title', header: 'Titulo' },
      { field: 'brand', header: 'Marca' },
      { field: 'price', header: 'Preço' },
      { field: 'sale', header: 'Promoção' },
      { field: 'category', header: 'Categoria' },
    ];
    this.listaProdutos();
  }

  listaProdutos() {
    this.loading = true;
    this.produtoService.getProducts(this.Busca).subscribe(listProdutos => {
      this.products = listProdutos
    }, error => console.log(error)
      , () => {
        this.loading = false;
      })
  }

  cadastro() {
    this.ref = this.dialogService.open(CadastroProdutoComponent, {
      header: 'Cadastro De Produto',
      data: {
        id: null
      },
      width: '80%'
    });
    this.ref.onClose.subscribe((product: ProductModel) => {
      this.products.push(product);
    });
  }

  delete(product: ProductModel) {
    this.msg = `teste ${product.title}`
    this.product = product
  }

  edit(product: ProductModel) {
    this.ref = this.dialogService.open(CadastroProdutoComponent, {
      header: 'Editar De Produto',
      data: {
        id: product.id
      },
      width: '80%'
    });
    this.ref.onClose.subscribe((product: ProductModel) => {
      this.listaProdutos();
    });
  }
  deleteConfirm(resp: boolean) {
    if (resp) {
      this.produtoService.delete(this.product.id).subscribe(resp => {
        console.log(resp)
      }, erro => console.log(erro)
        , () => {
          this.listaProdutos();
        }
      )
      this.msg = null
    }
  }
}
