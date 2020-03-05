import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaUsuarioComponent } from './lista-usuario/lista-usuario.component';
import { UsuarioComponent } from './usuario.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VMessageModule } from '../shared/vmessage/vmessage.module';
import { RouterModule } from '@angular/router';
import { EscolaridadeModule } from '../escolaridade/escolaridade.module';
import { AdicionaUsuarioComponent } from './adiciona-edita-usuario/adiciona-usuario.component';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';


@NgModule({
  declarations: [
    ListaUsuarioComponent,
    UsuarioComponent,
    AdicionaUsuarioComponent,
    EditarUsuarioComponent
  ],
  exports:[
    UsuarioComponent
  ],
  imports: [
    CommonModule,
    EscolaridadeModule,
    SweetAlert2Module.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    VMessageModule,
    RouterModule,
  ]
})
export class UsuarioModule { }
