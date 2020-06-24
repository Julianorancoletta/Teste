import { Component, OnInit, Input } from '@angular/core';
import { ProdutosService } from '../produtos.service';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.css']
})
export class ListaProdutosComponent implements OnInit {

  @Input() produto: any  

  constructor() { }

  ngOnInit(): void {
    
  }

}
