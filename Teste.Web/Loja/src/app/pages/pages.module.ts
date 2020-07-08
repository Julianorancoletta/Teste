import { NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ListaProdutosComponent } from './client/produtos/lista-produtos/lista-produtos.component';
import { ProdutosComponent } from './client/produtos/produtos.component';
import { HttpClientModule } from '@angular/common/http';
import localePt from '@angular/common/locales/pt';
import { RouterModule } from '@angular/router';
import { DetalhesProdutoComponent } from './client/produtos/detalhes-produto/detalhes-produto.component';
registerLocaleData(localePt);
import {CarouselModule} from 'primeng/carousel';
import { ComponentsModule } from '../component/components.module';
import { ProdutoRoutesModule } from './client/produtos/produtos.routes';
import { CadastroProdutoComponent } from './client/produtos/cadastro-produto/cadastro-produto.component';

@NgModule({
  declarations: [
    ListaProdutosComponent,
    ProdutosComponent,
    DetalhesProdutoComponent,
    CadastroProdutoComponent
  ],
  exports: [
    ProdutosComponent
  ],
  imports: [
    CarouselModule,
    ComponentsModule,
    HttpClientModule,
    CardModule,
    CommonModule,
    ProdutoRoutesModule
  ]
})
export class PagesModule { }
