"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.car = void 0;
var core_1 = require("@angular/core");
var car = /** @class */ (function () {
    function car() {
    }
    car.prototype.setCar = function (item) {
        var product = this.get(), productExistInCart = product.find(function (_a) {
            var id = _a.id;
            return id == item.id;
        });
        if (!productExistInCart) {
            var product_1 = this.get();
            product_1.push(__assign(__assign({}, item), { num: 1 }));
            this.set(product_1);
            return;
        }
        productExistInCart.num += 1;
        this.set(product);
    };
    car.prototype.GetTotal = function () {
        return this.get().reduce(function (acc, prod) { return acc += prod.price * prod.num; }, 0);
    };
    car.prototype.remove = function (index) {
        var product = this.get().filter(function (p, i) {
            return p.id !== index;
        });
        this.set(product);
    };
    car.prototype.quantiy = function (item, num) {
        var product = this.get();
        if (num <= 0) {
            this.remove(item.id);
        }
        else {
            var productExistInCart = product.find(function (_a) {
                var id = _a.id;
                return id == item.id;
            });
            productExistInCart.num = Number(num);
            this.set(product);
        }
    };
    car.prototype.set = function (product) {
        localStorage.setItem('car', JSON.stringify(product));
    };
    car.prototype.get = function () {
        return JSON.parse(localStorage.getItem('car'))
            ? JSON.parse(localStorage.getItem('car')) : [];
    };
    car.prototype.returnCar = function () {
        return JSON.parse(localStorage.getItem('car'));
    };
    car.prototype.TotalCart = function () {
        return this.get().length;
    };
    car = __decorate([
        core_1.Injectable()
    ], car);
    return car;
}());
exports.car = car;
