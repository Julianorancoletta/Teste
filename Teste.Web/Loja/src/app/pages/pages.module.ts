import { NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ListaProdutosComponent } from './produtos/lista-produtos/lista-produtos.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { HttpClientModule } from '@angular/common/http';
import localePt from '@angular/common/locales/pt';
import { RouterModule } from '@angular/router';
import { DetalhesProdutoComponent } from './produtos/detalhes-produto/detalhes-produto.component';
registerLocaleData(localePt);


@NgModule({
  declarations: [
    ListaProdutosComponent,
    ProdutosComponent,
    DetalhesProdutoComponent
  ],
  exports: [
    ProdutosComponent
  ],
  imports: [
    HttpClientModule,
    CardModule,
    CommonModule,
    RouterModule
  ]
})
export class PagesModule { }
