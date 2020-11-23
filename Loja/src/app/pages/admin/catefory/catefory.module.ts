import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { BrMaskerModule } from 'br-mask';
import { CateforyComponent } from './catefory.component';
import { ListaComponent } from '../produtos/lista/lista.component';
import { ComponentsModule } from '../../../component/components.module';

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
