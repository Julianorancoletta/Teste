import { NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CardModule } from 'primeng/card';
import { ListaProdutosComponent } from './produtos/lista-produtos/lista-produtos.component';
import { ProdutosComponent } from './produtos/produto/produtos.component';
import { HttpClientModule } from '@angular/common/http';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);
import { RouterModule } from '@angular/router';
import { DetalhesProdutoComponent } from './produtos/detalhes-produto/detalhes-produto.component';

import {CarouselModule} from 'primeng/carousel';
import { ComponentsModule } from '../component/components.module';
import { ProdutoRoutesModule } from './produtos/produtos.routes';
import { CadastroProdutoComponent } from './produtos/cadastro-produto/cadastro-produto.component';


@NgModule({
  declarations: [
    ListaProdutosComponent,
    ProdutosComponent,
    DetalhesProdutoComponent,
    CadastroProdutoComponent,
    DetalhesProdutoComponent
  ],
  exports: [
    ProdutosComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    CarouselModule,
    ComponentsModule,
    HttpClientModule,
    CardModule,
    CommonModule,
    ProdutoRoutesModule,
  ]
})
export class PagesModule { }
