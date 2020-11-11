import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { car } from '../../component/car/car';
import { Router } from '@angular/router';
import { Category } from '../../models/category.model';
import { categoryService } from '../../services/catefory/category.service';
import { ProdutosService } from '../../services/produtos/produtos.service';
import { searchComponent } from '../../component/search/search.component';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent extends searchComponent implements OnInit {

  @ViewChild("prd") divView: ElementRef;
  
  constructor(private router: Router,
    private category_Service: categoryService,
    private Produtos: ProdutosService) {
    super();
  }


  isExpanded = false;
  cars: any = new car();
  Category: Category[];
  subCategoria: any[];
  results: any[];
  prod: any[];

  ngOnInit(): void {
    this.category_Service.getcategory().
      subscribe(category => {
        this.Category = category
      })
  }

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  buscar(item) {
    let produto = item.value ? item.value : item
    this.router.navigate(['showcase/' + produto]);
  }

  buscarMarcas(categoria) {
    this.category_Service.getsubcategory(categoria).subscribe(
      (subcategoria: any[]) => {
        this.subCategoria = subcategoria;
      },
      error => {
        console.log(error)
      }
    )
  }
  search(event) {
    this.Busca.ItemBuscado = event.query;
    this.Produtos.getbusca(this.Busca).subscribe((Produto: string[]) => {
      this.results = Produto
    }, erro => console.log(erro))
  }
}
