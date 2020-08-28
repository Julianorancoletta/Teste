import { Component} from '@angular/core';
import { car } from './car';

@Component({
  selector: 'app-car',
  template: `
  <div class="carrinho">
      <div id="cart" [ngSwitch]="cars.TotalCart() > 0">
      <div class="carrinho-cheio" *ngSwitchCase="true">
        <h4 class="text-center" id="title"><a [routerLink]="['/checkout']"><span class="fa fa-shopping-cart"></span>
            Carrinho</a></h4>
        <div class="order-item" *ngFor="let selected of cars.returnCar(); index as i">
          <span id="title" class="prdTitulo"><img src="{{ selected.img }}" alt="{{ selected.title }}" id="prdFoto">
            {{ selected.title }}
          </span>
          <span id="price">
            {{ selected.price  * selected.num | currency:'BRL':true:'1.2-2':'pt' }} </span>
          <span class="fa fa-trash text-danger remov" (click)="cars.remove(selected.id)"></span>
          <p><small>Quantidade: {{ selected.num }}</small></p>
        </div>
        <div class="order-total">
          <p class="order-price"><span id="title">SubTotal:</span>
            {{ cars.GetTotal() | currency:'BRL':true:'1.2-2':'pt' }}</p>
        </div>
      </div>
      
      <div class="carrinho-vazio" *ngSwitchCase="false">
        <span id="title" class="text-center"><img id="cesta" class="text-center" src="assets/img/shopping_basket-24px.svg"
            alt="Cesta de compras">
          Você ainda não tem produtos no seu carrinho
        </span>
      </div>
    </div>
  </div>
`,
})
export class CarComponent{
  cars: any = new car();
  total:number
  constructor() {
  }
}
