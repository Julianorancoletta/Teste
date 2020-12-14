import { Component, Input, OnInit } from '@angular/core';
import { formularios } from '../../../app/models/formularios';
import { FormsBaseComponent } from './forms.base.component';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent  extends FormsBaseComponent implements OnInit{

  @Input() formulario: formularios

  constructor() {
    super() 
  }

  ngOnInit(): void {
  }

  adicionar(){

  }


}
