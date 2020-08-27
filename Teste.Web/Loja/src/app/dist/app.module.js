"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var app_component_1 = require("./app.component");
var app_routing_module_1 = require("./app.routing.module");
var overlaypanel_1 = require("primeng/overlaypanel");
var animations_1 = require("@angular/platform-browser/animations");
var home_component_1 = require("./pages/home/home.component");
var components_module_1 = require("./component/components.module");
var produtos_module_1 = require("./pages/produtos/produtos.module");
var forms_1 = require("@angular/forms");
var autocomplete_1 = require("primeng/autocomplete");
var dropdown_1 = require("primeng/dropdown");
var nav_menu_component_1 = require("./navigation/nav-menu/nav-menu.component");
var with_progress_bar_service_1 = require("./with-progress-bar.service");
var header_component_1 = require("./navigation/header/header.component");
var card_1 = require("primeng/card");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                nav_menu_component_1.NavMenuComponent,
                home_component_1.HomeComponent,
                header_component_1.headerComponent
            ],
            imports: [
                platform_browser_1.BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
                http_1.HttpClientModule,
                components_module_1.ComponentsModule,
                app_routing_module_1.AppRoutingModule,
                overlaypanel_1.OverlayPanelModule,
                animations_1.BrowserAnimationsModule,
                produtos_module_1.ProdutosModule,
                forms_1.FormsModule,
                autocomplete_1.AutoCompleteModule,
                dropdown_1.DropdownModule,
                card_1.CardModule
            ],
            providers: [
                {
                    provide: http_1.HTTP_INTERCEPTORS,
                    useClass: with_progress_bar_service_1.WithProgressBarService,
                    multi: true
                }
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
