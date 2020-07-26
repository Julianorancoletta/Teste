import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroProdutoComponent } from './cadastro-produto/cadastro-produto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';

import { ListaComponent } from './lista/lista.component';
import { TableModule } from 'primeng/table';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { BrMaskerModule } from 'br-mask';
@NgModule({
  declarations: [
    CateforyComponent,
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
    TableModule,
    DynamicDialogModule
  ]
})
export class CateforyModule { }
