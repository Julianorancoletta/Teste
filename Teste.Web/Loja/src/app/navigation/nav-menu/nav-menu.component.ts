import { Component, OnInit } from '@angular/core';
import { car } from '../../component/car/car';
import { Router } from '@angular/router';
import { Category } from '../../core/models/category.model';
import { categoryService } from '../../services/catefory/category.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit{

  constructor(private router: Router,
    private category_Service:categoryService) { }


  isExpanded = false;
  cars: any = new car();
  Category :Category[];
  subCategoria: any[];

  ngOnInit(): void {
    this.category_Service.getcategory().
    subscribe(category =>{
      this.Category = category
    })
  }
  
  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  buscar(produto) {
    this.router.navigate(['showcase/' + produto])
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
}
