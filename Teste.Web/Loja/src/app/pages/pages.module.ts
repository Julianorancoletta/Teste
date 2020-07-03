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
    CarouselModule,
    ComponentsModule,
    HttpClientModule,
    CardModule,
    CommonModule,
    RouterModule,
  ]
})
export class PagesModule { }
