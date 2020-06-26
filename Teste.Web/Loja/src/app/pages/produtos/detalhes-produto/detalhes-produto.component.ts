import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdutosService } from '../produtos.service';
import { ProductModel } from 'src/app/models/product.model';

@Component({
  selector: 'app-detalhes-produto',
  templateUrl: './detalhes-produto.component.html',
  styleUrls: ['./detalhes-produto.component.css']
})

export class DetalhesProdutoComponent implements OnInit {

  constructor(private produtoService: ProdutosService,
    private route: ActivatedRoute) {
    this.route.params.subscribe(res => {
      this.id = res.id == 0 ? null : res.id
    });
  }

  id: string;
  produto: ProductModel;

  ngOnInit(): void {
    this.buscarProduto()
  }

  buscarProduto() {
    this.produtoService.getProduct(this.id).subscribe(
      result => {
      this.produto = result[0];
      debugger
    },
    error => alert('Produto não encontrado erro: ' + error.message))
  }
}
