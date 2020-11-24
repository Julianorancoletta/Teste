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
import {FieldsetModule} from 'primeng/fieldset';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentsModule } from '../../../component/components.module';
import { ProdutoResolve } from '../../../services/produtos/produtos.resolve';
import { SubCategoriaService } from '../../../services/subCategoria/sub-categoria.service';

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
    DynamicDialogModule,
    FieldsetModule,
    BrowserModule,
    BrowserAnimationsModule,
  ],
  providers: [
    ProdutoResolve,
    SubCategoriaService
  ]
})
export class ProdutosModule { }