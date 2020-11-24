import { DataViewModule } from 'primeng/dataview';
import { NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { DetalhesProdutoComponent } from './detalhes-produto/detalhes-produto.component';
import { CardModule } from 'primeng/card';
import { RouterModule } from '@angular/router';
import localePt from '@angular/common/locales/pt';
import { ShowCaseComponent } from './show_case.component';
import { ShowcaseRoutesModule } from './show_case.routes';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ComponentsModule } from '../../../component/components.module';
import { ProdutosService } from '../../../services/produtos/produtos.service';
import { PipeModule } from '../../../pipe/pipe.module';
registerLocaleData(localePt);

@NgModule({
  declarations: [
    DetalhesProdutoComponent,
    ShowCaseComponent,
  ],
  imports: [
    PipeModule,
    ComponentsModule,
    RouterModule,
    CardModule,
    ShowcaseRoutesModule,
    CommonModule,
    DataViewModule,
    InfiniteScrollModule
  ],
  providers: [
    ProdutosService
  ]
})
export class ShowcaseModule { }
