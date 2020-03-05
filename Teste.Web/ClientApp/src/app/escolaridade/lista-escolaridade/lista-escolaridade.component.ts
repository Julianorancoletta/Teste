import { Component, OnInit } from '@angular/core';
import { EscolaridadeService } from '../escolaridade.service';
import { Escolaridade } from '../escolaridade';

@Component({
  selector: 'app-lista-escolaridade',
  templateUrl: './lista-escolaridade.component.html',
  styleUrls: []
})
export class ListaEscolaridadeComponent implements OnInit {

  constructor(private service: EscolaridadeService) { }

  Escolaridades : Escolaridade[];

  ngOnInit(){
    this.listaEscolaridade();
  }

  listaEscolaridade() {
    this.service.getEscolaridade()
      .subscribe(resp =>{
        this.Escolaridades = resp
        console.log(resp);
      })
  }

}
