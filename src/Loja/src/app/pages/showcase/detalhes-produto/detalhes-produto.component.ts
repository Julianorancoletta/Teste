import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductModel } from '../../../models/product.model';
import { ProdutosService } from '../../../services/produtos/produtos.service';

class ImageSnippet {
  constructor(public src: string, public file: File) { }
}

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
  selectedFile: ImageSnippet;

  ngOnInit(): void {
    this.buscarProduto()
  }

  buscarProduto() {
    this.produtoService.getProduct(this.id).subscribe(
      result => {
        this.produto = result;
      },
      error => alert('Produto não encontrado erro: ' + error.message))
  }
}
