import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EscolaridadeComponent } from './escolaridade.component';
import { ListaEscolaridadeComponent } from './lista-escolaridade/lista-escolaridade.component';
import { HttpClientModule } from '@angular/common/http';
import { DropdownEscolaridadeComponent } from './dropdown-escolaridade/dropdown-escolaridade.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    EscolaridadeComponent,
    ListaEscolaridadeComponent,
    DropdownEscolaridadeComponent
  ],
  exports:[
    EscolaridadeComponent,
    DropdownEscolaridadeComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    HttpClientModule
  ]
})
export class EscolaridadeModule { }
