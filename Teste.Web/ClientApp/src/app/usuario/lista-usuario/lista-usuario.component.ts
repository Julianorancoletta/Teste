import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-lista-usuario',
  templateUrl: './lista-usuario.component.html',
  styleUrls: []
})
export class ListaUsuarioComponent implements OnInit {

  usuarios: Usuario[]

  constructor(private service: UsuarioService) { }

  ngOnInit() {
    this.ListaUsuario()
  }

  ListaUsuario() {
    this.service.getUsuario()
      .subscribe(resp =>{
        this.usuarios = resp
      })
  }

}
