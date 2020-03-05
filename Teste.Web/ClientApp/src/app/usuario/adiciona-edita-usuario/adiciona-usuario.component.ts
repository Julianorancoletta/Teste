import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Usuario } from '../usuario';
import { Validacoes } from 'src/app/shared/vmessage/Validacoes/Validacoes';
import { UsuarioService } from '../usuario.service';
import { Router, ActivatedRoute } from '@angular/router';





@Component({
  selector: 'app-edita-usuario',
  templateUrl: './adiciona-usuario.component.html',

})
export class AdicionaUsuarioComponent implements OnInit {



  FromUsuario: FormGroup;
  usuario: Usuario;

  constructor(private formBuilder: FormBuilder,
    private service: UsuarioService,
    private router: Router) {
  }




  ngOnInit() {
    this.createForm(new Usuario());
  }


  createForm(usuario: Usuario) {
    this.FromUsuario = this.formBuilder.group({
      id: [usuario.id],
      nome: [usuario.nome, Validators.required],
      sobrenome: [usuario.sobrenome, Validators.required],
      email: [usuario.email, Validators.email],
      dataNascimento: [usuario.dataNascimento, Validacoes.DataMaior],
      idEscolaridade: [usuario.idEscolaridade]
    })
  }


  adicionarUsuario() {
    this.service.AdicionaUsuario(this.FromUsuario.value)
    this.createForm(new Usuario());
    this.router.navigate(['']);
  }
  changeEscoridade(value) {
    this.FromUsuario.get("idEscolaridade").setValue(value);
  }





}
