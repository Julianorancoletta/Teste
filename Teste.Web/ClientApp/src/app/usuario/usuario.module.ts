import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaUsuarioComponent } from './lista-usuario/lista-usuario.component';
import { UsuarioComponent } from './usuario.component';



@NgModule({
  declarations: [
    ListaUsuarioComponent,
    UsuarioComponent
  ],
  exports:[
    UsuarioComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UsuarioModule { }
