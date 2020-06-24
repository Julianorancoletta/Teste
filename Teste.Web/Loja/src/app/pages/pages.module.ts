import { NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import {CardModule} from 'primeng/card';
import { ListaProdutosComponent } from './produtos/lista-produtos/lista-produtos.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { HttpClientModule } from '@angular/common/http';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);


@NgModule({
  declarations: [
    ListaProdutosComponent,
    ProdutosComponent
  ],
  exports:[
   ProdutosComponent
  ],
  imports: [
    HttpClientModule,
    CardModule,
    CommonModule
  ]
})
export class PagesModule { }
