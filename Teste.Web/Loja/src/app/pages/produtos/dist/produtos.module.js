"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProdutosModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var cadastro_produto_component_1 = require("./cadastro-produto/cadastro-produto.component");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var http_1 = require("@angular/common/http");
var produtos_routes_1 = require("./produtos.routes");
var lista_component_1 = require("./lista/lista.component");
var table_1 = require("primeng/table");
var dynamicdialog_1 = require("primeng/dynamicdialog");
var br_mask_1 = require("br-mask");
var produtos_resolve_1 = require("../../services/produtos/produtos.resolve");
var components_module_1 = require("../../component/components.module");
var sub_categoria_service_1 = require("../../services/subCategoria/sub-categoria.service");
var fieldset_1 = require("primeng/fieldset");
var platform_browser_1 = require("@angular/platform-browser");
var animations_1 = require("@angular/platform-browser/animations");
var ProdutosModule = /** @class */ (function () {
    function ProdutosModule() {
    }
    ProdutosModule = __decorate([
        core_1.NgModule({
            declarations: [
                cadastro_produto_component_1.CadastroProdutoComponent,
                lista_component_1.ListaComponent,
            ],
            imports: [
                br_mask_1.BrMaskerModule,
                common_1.CommonModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                router_1.RouterModule,
                components_module_1.ComponentsModule,
                http_1.HttpClientModule,
                produtos_routes_1.ProdutoRoutesModule,
                table_1.TableModule,
                dynamicdialog_1.DynamicDialogModule,
                fieldset_1.FieldsetModule,
                platform_browser_1.BrowserModule,
                animations_1.BrowserAnimationsModule,
            ],
            providers: [
                produtos_resolve_1.ProdutoResolve,
                sub_categoria_service_1.SubCategoriaService
            ]
        })
    ], ProdutosModule);
    return ProdutosModule;
}());
exports.ProdutosModule = ProdutosModule;
