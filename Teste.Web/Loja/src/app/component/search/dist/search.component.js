"use strict";
exports.__esModule = true;
exports.searchComponent = void 0;
var busca_model_1 = require("../../core/models/busca.model");
var searchComponent = /** @class */ (function () {
    function searchComponent() {
        this.list = false;
    }
    searchComponent.prototype.onInit = function (params) {
        this.paginaAtual = 1;
        this.Busca = new busca_model_1.busca;
        this.produtos = this.listaProduto.product;
        this.Busca.ItemBuscado = params.id ? params.id : " ";
        this.Busca.subCategoria = params.subCategoria ? params.subCategoria : " ";
        this.Busca.categoria = params.categoria ? params.categoria : " ";
    };
    return searchComponent;
}());
exports.searchComponent = searchComponent;
