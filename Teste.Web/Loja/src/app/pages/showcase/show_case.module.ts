import { NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { DetalhesProdutoComponent } from './detalhes-produto/detalhes-produto.component';
import { ListaProdutosComponent } from './lista-produto/lista-produto.component';
import { CardModule } from 'primeng/card';
import { RouterModule } from '@angular/router';
import localePt from '@angular/common/locales/pt';
import { ProdutosService } from '../../services/produtos/produtos.service';
import { ShowCaseComponent } from './show_case.component';
import { ShowcaseRoutesModule } from './show_case.routes';
import { ComponentsModule } from '../../component/components.module';
registerLocaleData(localePt);


@NgModule({
  declarations: [
    DetalhesProdutoComponent,
    ListaProdutosComponent,
    ShowCaseComponent,
  ],
  imports: [
    ComponentsModule,
    RouterModule,
    CardModule,
    ShowcaseRoutesModule,
    CommonModule
  ],
  providers: [
    ProdutosService
  ]
})
export class ShowcaseModule { }
