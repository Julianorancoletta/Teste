import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EscolaridadeComponent } from './escolaridade.component';
import { ListaEscolaridadeComponent } from './lista-escolaridade/lista-escolaridade.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    EscolaridadeComponent,
    ListaEscolaridadeComponent
  ],
  exports:[
    EscolaridadeComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class EscolaridadeModule { }
