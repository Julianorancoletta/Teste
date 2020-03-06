import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-usuario',
  templateUrl: './lista-usuario.component.html',
  styleUrls: []
})
export class ListaUsuarioComponent implements OnInit {

  usuarios: Usuario[]

  constructor(private service: UsuarioService,private router: Router) { }

  ngOnInit() {
    this.ListaUsuario()
  }

  ListaUsuario() {
    debugger
    this.service.getUsuario()
      .subscribe(resp => {
        this.usuarios = resp
      })
  }

  deleteUsuario(usuario: Usuario){
    this.service.deleteUsuario(usuario.id)
    .subscribe( resp=> {
      this.usuarios = this.usuarios.filter(x => x !== usuario)
    })
  }
  addUsuario(){
    this.router.navigate(['Adicionar']);
  };  
  onEditar(usuario: Usuario){
    this.router.navigate(['Editar',usuario.id])
  }


}
