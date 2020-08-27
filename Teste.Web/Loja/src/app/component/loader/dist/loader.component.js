"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LoaderComponent = void 0;
var core_1 = require("@angular/core");
var LoaderComponent = /** @class */ (function () {
    function LoaderComponent(loaderService) {
        this.loaderService = loaderService;
        this.color = 'primary';
        this.mode = 'indeterminate';
        this.value = 50;
        this.isLoading = this.loaderService.isLoading;
    }
    LoaderComponent = __decorate([
        core_1.Component({
            selector: 'app-loader',
            template: "\n    <div *ngIf=\"isLoading | async\" class=\"overlay\">\n      <mat-progress-spinner class=\"spinner\" [color]=\"color\" [mode]=\"mode\" [value]=\"value\"></mat-progress-spinner>\n    </div>\n  ",
            styleUrls: ['./loader.component.css']
        })
    ], LoaderComponent);
    return LoaderComponent;
}());
exports.LoaderComponent = LoaderComponent;
