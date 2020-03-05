import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../usuario.service';
import { Usuario } from '../usuario';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Validacoes } from 'src/app/shared/vmessage/Validacoes/Validacoes';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html'
})
export class EditarUsuarioComponent implements OnInit {


  @Input() id: number = this.route.snapshot.params['id']

  constructor(private route: ActivatedRoute,
    private service: UsuarioService,
    private formBuilder: FormBuilder,
    private router: Router) { }

  usuario: Usuario;
  FromUsuario: FormGroup;
  selected :Number

  ngOnInit(): void {
    this.BuscaUsuario();  
    this.createForm(new Usuario());
  }

  BuscaUsuario() {
    this.service.buscaUsuario(this.id).subscribe(resp => {
      this.dropDown(resp);      
    })      
  }

  editrUsuario(){
    this.service.atualizaUsuario(this.FromUsuario.value)
    this.createForm(new Usuario());
    //this.router.navigate(['']);
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

  
  changeEscoridade(value) {
    this.FromUsuario.get("idEscolaridade").setValue(value);
  }
  dropDown(usuario: Usuario){
    this.FromUsuario.setValue(usuario); 
    this.selected = usuario.id  
  }
}
