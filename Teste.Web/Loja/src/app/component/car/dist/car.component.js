"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CarComponent = void 0;
var core_1 = require("@angular/core");
var car_1 = require("./car");
var CarComponent = /** @class */ (function () {
    function CarComponent() {
        this.cars = new car_1.car();
    }
    CarComponent = __decorate([
        core_1.Component({
            selector: 'app-car',
            template: "\n  <div class=\"carrinho\">\n      <div id=\"cart\" [ngSwitch]=\"cars.TotalCart() > 0\">\n      <div class=\"carrinho-cheio\" *ngSwitchCase=\"true\">\n        <h4 class=\"text-center\" id=\"title\"><a [routerLink]=\"['/checkout']\"><span class=\"fa fa-shopping-cart\"></span>\n            Carrinho</a></h4>\n        <div class=\"order-item\" *ngFor=\"let selected of cars.returnCar(); index as i\">\n          <span id=\"title\" class=\"prdTitulo\"><img src=\"{{ selected.img }}\" alt=\"{{ selected.title }}\" id=\"prdFoto\">\n            {{ selected.title }}\n          </span>\n          <span id=\"price\">\n            {{ selected.price  * selected.num | currency:'BRL':true:'1.2-2':'pt' }} </span>\n          <span class=\"fa fa-trash text-danger remov\" (click)=\"cars.remove(selected.id)\"></span>\n          <p><small>Quantidade: {{ selected.num }}</small></p>\n        </div>\n        <div class=\"order-total\">\n          <p class=\"order-price\"><span id=\"title\">SubTotal:</span>\n            {{ cars.GetTotal() | currency:'BRL':true:'1.2-2':'pt' }}</p>\n        </div>\n      </div>\n      \n      <div class=\"carrinho-vazio\" *ngSwitchCase=\"false\">\n        <span id=\"title\" class=\"text-center\"><img id=\"cesta\" class=\"text-center\" src=\"assets/img/shopping_basket-24px.svg\"\n            alt=\"Cesta de compras\">\n          Voc\u00EA ainda n\u00E3o tem produtos no seu carrinho\n        </span>\n      </div>\n    </div>\n  </div>\n",
            styleUrls: ['./car.component.scss']
        })
    ], CarComponent);
    return CarComponent;
}());
exports.CarComponent = CarComponent;
