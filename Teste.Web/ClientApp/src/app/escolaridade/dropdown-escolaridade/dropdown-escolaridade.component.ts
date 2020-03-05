import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Escolaridade } from '../escolaridade';
import { EscolaridadeService } from '../escolaridade.service';

@Component({
  selector: 'app-dropdown-escolaridade',
  templateUrl: './dropdown-escolaridade.component.html',
  styleUrls: []
})
export class DropdownEscolaridadeComponent implements OnChanges, OnInit {


  @Input() selected = 0;

  constructor(private Service: EscolaridadeService) { }
  escolaridade: Escolaridade[];
  


  ngOnInit() {
    this.Service.getEscolaridade()
      .subscribe(
        (resp) => {
          this.escolaridade = resp
        },
        error => console.log(error)
      );
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.selected) {
        this.selected
      }
    }
  }
