"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ShowCaseComponent = void 0;
var core_1 = require("@angular/core");
var car_1 = require("../../component/car/car");
var search_component_1 = require("../../component/search/search.component");
var ShowCaseComponent = /** @class */ (function (_super) {
    __extends(ShowCaseComponent, _super);
    function ShowCaseComponent(produtoService, route) {
        var _this = _super.call(this) || this;
        _this.produtoService = produtoService;
        _this.route = route;
        _this.cars = new car_1.car();
        _this.route.params.subscribe(function (params) {
            _this.listaProduto = _this.route.snapshot.data['Product'];
            _super.prototype.onInit.call(_this, params);
        });
        return _this;
    }
    ShowCaseComponent.prototype.onScroll = function () {
        if (this.paginaAtual == this.listaProduto.numPagina)
            return;
        this.Busca.numeroPagina += 1;
        this.Busca.itensPorPagina = 4;
        this.loaderProducts();
    };
    ShowCaseComponent.prototype.listar = function () {
        this.list = this.list == false ? true : false;
    };
    ShowCaseComponent.prototype.order = function (value) {
        this.Busca.order = value;
        this.loaderProducts();
    };
    ShowCaseComponent.prototype.loaderProducts = function () {
        var _this = this;
        this.produtoService.getProducts(this.Busca).subscribe(function (listProdutos) {
            _this.listaProduto = listProdutos;
        }, function (error) { return console.log(error); }, function () {
            _this.paginaAtual++;
            _this.listaProduto.product.forEach(function (element) {
                _this.produtos.push(element);
            });
        });
    };
    ShowCaseComponent = __decorate([
        core_1.Component({
            selector: 'app-showcase',
            templateUrl: './show_case.component.html',
            styleUrls: ['./show_case.component.scss']
        })
    ], ShowCaseComponent);
    return ShowCaseComponent;
}(search_component_1.searchComponent));
exports.ShowCaseComponent = ShowCaseComponent;
