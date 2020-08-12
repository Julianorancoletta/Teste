import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroProdutoComponent } from './cadastro-produto/cadastro-produto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ProdutoRoutesModule } from './produtos.routes';
import { ListaComponent } from './lista/lista.component';
import { TableModule } from 'primeng/table';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { BrMaskerModule } from 'br-mask';
import { ProdutoResolve } from '../../services/produtos/produtos.resolve';
import { ComponentsModule } from '../../component/components.module';
import { SubCategoriaService } from '../../services/subCategoria/sub-categoria.service';


@NgModule({
  declarations: [
    CadastroProdutoComponent,
    ListaComponent,
  ],
  imports: [
    BrMaskerModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ComponentsModule,
    HttpClientModule,
    ProdutoRoutesModule,
    TableModule,
    DynamicDialogModule
  ],
  providers: [
    ProdutoResolve,
    SubCategoriaService
  ]
})
export class ProdutosModule { }
