"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ComponentsModule = void 0;
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var pt_1 = require("@angular/common/locales/pt");
common_1.registerLocaleData(pt_1["default"]);
var car_component_1 = require("./car/car.component");
var car_1 = require("./car/car");
var router_1 = require("@angular/router");
var toast_delete_component_1 = require("./toast-delete/toast-delete.component");
var toast_1 = require("primeng/toast");
var toast_component_1 = require("./toast/toast.component");
var bigger_smaller_component_1 = require("./checkbox/bigger-smaller/bigger-smaller.component");
var loader_component_1 = require("./loader/loader.component");
var progress_spinner_1 = require("@angular/material/progress-spinner");
var loader_services_1 = require("./loader/loader.services");
var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        core_1.NgModule({
            declarations: [
                car_component_1.CarComponent,
                toast_delete_component_1.ToastDeleteComponent,
                toast_component_1.ToastComponent,
                bigger_smaller_component_1.BiggerSmallerComponent,
                loader_component_1.LoaderComponent
            ],
            imports: [
                common_1.CommonModule,
                router_1.RouterModule,
                toast_1.ToastModule,
                progress_spinner_1.MatProgressSpinnerModule
            ],
            providers: [
                car_1.car,
                loader_services_1.LoaderService
            ],
            bootstrap: [],
            exports: [
                bigger_smaller_component_1.BiggerSmallerComponent,
                toast_delete_component_1.ToastDeleteComponent,
                car_component_1.CarComponent,
                toast_component_1.ToastComponent,
                loader_component_1.LoaderComponent
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());
exports.ComponentsModule = ComponentsModule;
