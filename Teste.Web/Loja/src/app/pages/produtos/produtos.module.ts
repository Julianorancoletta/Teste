import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroProdutoComponent } from './cadastro-produto/cadastro-produto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from 'src/app/component/components.module';
import { HttpClientModule } from '@angular/common/http';
import { ProdutoRoutesModule } from './produtos.routes';
import { ListaComponent } from './lista/lista.component';
import {TableModule} from 'primeng/table';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DynamicDialogModule} from 'primeng/dynamicdialog';
@NgModule({
  declarations: [
    CadastroProdutoComponent,
    ListaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ComponentsModule,
    HttpClientModule,
    ProdutoRoutesModule,
    TableModule,
    DynamicDialogModule
  ]
})
export class ProdutosModule { }
