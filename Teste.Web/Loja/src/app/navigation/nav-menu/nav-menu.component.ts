import { Component } from '@angular/core';
import { car } from 'src/app/component/car/car';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {

  constructor(private router: Router) { }

  isExpanded = false;
  cars: any = new car();

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  buscar(produto) {

    this.router.navigate(['showcase/pesquisa/' + produto])

  }
}
