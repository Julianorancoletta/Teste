function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-showcase-show_case-module"], {
  /***/
  "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-card.js":
  /*!********************************************************************!*\
    !*** ./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-card.js ***!
    \********************************************************************/

  /*! exports provided: Card, CardModule */

  /***/
  function node_modulesPrimeng__ivy_ngcc__Fesm2015PrimengCardJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Card", function () {
      return Card;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardModule", function () {
      return CardModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! primeng/api */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-api.js");

    function Card_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function Card_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.header);
      }
    }

    function Card_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.subheader);
      }
    }

    function Card_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = ["*", [["p-header"]], [["p-footer"]]];
    var _c1 = ["*", "p-header", "p-footer"];

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var Card = /*#__PURE__*/function () {
      function Card(el) {
        _classCallCheck(this, Card);

        this.el = el;
      }

      _createClass(Card, [{
        key: "getBlockableElement",
        value: function getBlockableElement() {
          return this.el.nativeElement.children[0];
        }
      }]);

      return Card;
    }();

    Card.ɵfac = function Card_Factory(t) {
      return new (t || Card)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
    };

    Card.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: Card,
      selectors: [["p-card"]],
      contentQueries: function Card_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_2__["Header"], true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_2__["Footer"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.headerFacet = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.footerFacet = _t.first);
        }
      },
      inputs: {
        header: "header",
        subheader: "subheader",
        style: "style",
        styleClass: "styleClass"
      },
      ngContentSelectors: _c1,
      decls: 8,
      vars: 8,
      consts: [[3, "ngClass", "ngStyle"], ["class", "ui-card-header", 4, "ngIf"], [1, "ui-card-body"], ["class", "ui-card-title", 4, "ngIf"], ["class", "ui-card-subtitle", 4, "ngIf"], [1, "ui-card-content"], ["class", "ui-card-footer", 4, "ngIf"], [1, "ui-card-header"], [1, "ui-card-title"], [1, "ui-card-subtitle"], [1, "ui-card-footer"]],
      template: function Card_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Card_div_1_Template, 2, 0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, Card_div_3_Template, 2, 1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, Card_div_4_Template, 2, 1, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, Card_div_7_Template, 2, 0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.styleClass);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "ui-card ui-widget ui-widget-content ui-corner-all")("ngStyle", ctx.style);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.headerFacet);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.header);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.subheader);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.footerFacet);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
      encapsulation: 2
    });

    Card.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }];
    };

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Card.prototype, "header", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Card.prototype, "subheader", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Card.prototype, "style", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Card.prototype, "styleClass", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"])(primeng_api__WEBPACK_IMPORTED_MODULE_2__["Header"])], Card.prototype, "headerFacet", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"])(primeng_api__WEBPACK_IMPORTED_MODULE_2__["Footer"])], Card.prototype, "footerFacet", void 0);

    var CardModule = function CardModule() {
      _classCallCheck(this, CardModule);
    };

    CardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: CardModule
    });
    CardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function CardModule_Factory(t) {
        return new (t || CardModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], primeng_api__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Card, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'p-card',
          template: "\n        <div [ngClass]=\"'ui-card ui-widget ui-widget-content ui-corner-all'\" [ngStyle]=\"style\" [class]=\"styleClass\">\n            <div class=\"ui-card-header\" *ngIf=\"headerFacet\">\n               <ng-content select=\"p-header\"></ng-content>\n            </div>\n            <div class=\"ui-card-body\">\n                <div class=\"ui-card-title\" *ngIf=\"header\">{{header}}</div>\n                <div class=\"ui-card-subtitle\" *ngIf=\"subheader\">{{subheader}}</div>\n                <div class=\"ui-card-content\">\n                    <ng-content></ng-content>\n                </div>\n                <div class=\"ui-card-footer\" *ngIf=\"footerFacet\">\n                    <ng-content select=\"p-footer\"></ng-content>\n                </div>\n            </div>\n        </div>\n    ",
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].Default
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      }, {
        header: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        subheader: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        style: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        styleClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        headerFacet: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
          args: [primeng_api__WEBPACK_IMPORTED_MODULE_2__["Header"]]
        }],
        footerFacet: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
          args: [primeng_api__WEBPACK_IMPORTED_MODULE_2__["Footer"]]
        }]
      });
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CardModule, {
        declarations: function declarations() {
          return [Card];
        },
        imports: function imports() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]];
        },
        exports: function exports() {
          return [Card, primeng_api__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          exports: [Card, primeng_api__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]],
          declarations: [Card]
        }]
      }], null, null);
    })();
    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=primeng-card.js.map

    /***/

  },

  /***/
  "./src/app/core/models/product.model.ts":
  /*!**********************************************!*\
    !*** ./src/app/core/models/product.model.ts ***!
    \**********************************************/

  /*! exports provided: ProductModel */

  /***/
  function srcAppCoreModelsProductModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductModel", function () {
      return ProductModel;
    });

    var ProductModel = function ProductModel() {
      _classCallCheck(this, ProductModel);
    };
    /***/

  },

  /***/
  "./src/app/pages/showcase/detalhes-produto/detalhes-produto.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/pages/showcase/detalhes-produto/detalhes-produto.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: DetalhesProdutoComponent */

  /***/
  function srcAppPagesShowcaseDetalhesProdutoDetalhesProdutoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DetalhesProdutoComponent", function () {
      return DetalhesProdutoComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _produtos_produtos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../produtos/produtos.service */
    "./src/app/pages/produtos/produtos.service.ts");

    var ImageSnippet = function ImageSnippet(src, file) {
      _classCallCheck(this, ImageSnippet);

      this.src = src;
      this.file = file;
    };

    var DetalhesProdutoComponent = /*#__PURE__*/function () {
      function DetalhesProdutoComponent(produtoService, route) {
        var _this = this;

        _classCallCheck(this, DetalhesProdutoComponent);

        this.produtoService = produtoService;
        this.route = route;
        this.route.params.subscribe(function (res) {
          _this.id = res.id == 0 ? null : res.id;
        });
      }

      _createClass(DetalhesProdutoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.buscarProduto();
        }
      }, {
        key: "buscarProduto",
        value: function buscarProduto() {
          var _this2 = this;

          this.produtoService.getProduct(this.id).subscribe(function (result) {
            _this2.produto = result;
          }, function (error) {
            return alert('Produto não encontrado erro: ' + error.message);
          });
        }
      }]);

      return DetalhesProdutoComponent;
    }();

    DetalhesProdutoComponent.ɵfac = function DetalhesProdutoComponent_Factory(t) {
      return new (t || DetalhesProdutoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_produtos_produtos_service__WEBPACK_IMPORTED_MODULE_2__["ProdutosService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]));
    };

    DetalhesProdutoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DetalhesProdutoComponent,
      selectors: [["app-detalhes-produto"]],
      decls: 6,
      vars: 3,
      consts: [[1, "card", 2, "width", "20rem"], [1, "card-header"], [1, "card-img-top", 3, "src", "alt"], [1, "card-body"], [1, "card-title", "text-center"]],
      template: function DetalhesProdutoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.produto.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx.produto.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.produto.title);
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Nob3djYXNlL2RldGFsaGVzLXByb2R1dG8vZGV0YWxoZXMtcHJvZHV0by5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DetalhesProdutoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-detalhes-produto',
          templateUrl: './detalhes-produto.component.html',
          styleUrls: ['./detalhes-produto.component.css']
        }]
      }], function () {
        return [{
          type: _produtos_produtos_service__WEBPACK_IMPORTED_MODULE_2__["ProdutosService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/showcase/lista-produto/lista-produto.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/pages/showcase/lista-produto/lista-produto.component.ts ***!
    \*************************************************************************/

  /*! exports provided: ListaProdutosComponent */

  /***/
  function srcAppPagesShowcaseListaProdutoListaProdutoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListaProdutosComponent", function () {
      return ListaProdutosComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_component_car_car__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/component/car/car */
    "./src/app/component/car/car.ts");
    /* harmony import */


    var src_app_core_models_product_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/core/models/product.model */
    "./src/app/core/models/product.model.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0(a0) {
      return [a0, "BRL", true, "1.2-2", "pt"];
    };

    function ListaProdutosComponent_ng_container_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strike");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "currency");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "currency");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBindV"](3, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c0, ctx_r0.produto.price)));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBindV"](5, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c0, ctx_r0.produto.salePrice)), " ");
      }
    }

    function ListaProdutosComponent_ng_container_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "currency");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBindV"](2, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx_r1.produto.price)), " ");
      }
    }

    var _c1 = function _c1(a1) {
      return ["produto-detalhe", a1];
    };

    var ListaProdutosComponent = /*#__PURE__*/function () {
      function ListaProdutosComponent() {
        _classCallCheck(this, ListaProdutosComponent);

        this.cars = new src_app_component_car_car__WEBPACK_IMPORTED_MODULE_1__["car"]();
      }

      _createClass(ListaProdutosComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ListaProdutosComponent;
    }();

    ListaProdutosComponent.ɵfac = function ListaProdutosComponent_Factory(t) {
      return new (t || ListaProdutosComponent)();
    };

    ListaProdutosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ListaProdutosComponent,
      selectors: [["app-lista-produtos"]],
      inputs: {
        produto: "produto"
      },
      decls: 12,
      vars: 8,
      consts: [[1, "card", "mb-3", 2, "width", "15rem"], [1, "card-header"], [3, "routerLink"], ["alt", "", 1, "card-img-top", 3, "src"], [1, "card-body"], [1, "card-title"], [1, "list-unstyled", "mt-3", "mb-4", 3, "ngSwitch"], [4, "ngSwitchCase"], ["type", "button", 1, "btn", "btn-lg", "btn-block", "btn-outline-primary", 3, "click"]],
      template: function ListaProdutosComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ListaProdutosComponent_ng_container_8_Template, 6, 18, "ng-container", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ListaProdutosComponent_ng_container_9_Template, 3, 9, "ng-container", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListaProdutosComponent_Template_button_click_10_listener() {
            return ctx.cars.setCar(ctx.produto);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Comprar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c1, ctx.produto.id));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.produto.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.produto.title, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.produto.sale);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", false);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgSwitchCase"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CurrencyPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Nob3djYXNlL2xpc3RhLXByb2R1dG8vbGlzdGEtcHJvZHV0by5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListaProdutosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-lista-produtos',
          templateUrl: './lista-produto.component.html',
          styleUrls: ['./lista-produto.component.css']
        }]
      }], function () {
        return [];
      }, {
        produto: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/pages/showcase/show_case.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/showcase/show_case.component.ts ***!
    \*******************************************************/

  /*! exports provided: ShowCaseComponent */

  /***/
  function srcAppPagesShowcaseShow_caseComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShowCaseComponent", function () {
      return ShowCaseComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _produtos_produtos_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../produtos/produtos.service */
    "./src/app/pages/produtos/produtos.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _lista_produto_lista_produto_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./lista-produto/lista-produto.component */
    "./src/app/pages/showcase/lista-produto/lista-produto.component.ts");

    function ShowCaseComponent_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-lista-produtos", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var produto_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("produto", produto_r1);
      }
    }

    var ShowCaseComponent = /*#__PURE__*/function () {
      function ShowCaseComponent(produtoService) {
        _classCallCheck(this, ShowCaseComponent);

        this.produtoService = produtoService;
      }

      _createClass(ShowCaseComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.produtoService.getProducts().subscribe(function (listProdutos) {
            _this3.produtos = listProdutos;
          }, function (error) {
            return console.log(error);
          });
        }
      }]);

      return ShowCaseComponent;
    }();

    ShowCaseComponent.ɵfac = function ShowCaseComponent_Factory(t) {
      return new (t || ShowCaseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_produtos_produtos_service__WEBPACK_IMPORTED_MODULE_1__["ProdutosService"]));
    };

    ShowCaseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ShowCaseComponent,
      selectors: [["app-showcase"]],
      decls: 3,
      vars: 1,
      consts: [[1, "container"], [1, "card-deck", "mb-3", "text-center"], [4, "ngFor", "ngForOf"], [3, "produto"]],
      template: function ShowCaseComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ShowCaseComponent_ng_container_2_Template, 2, 1, "ng-container", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.produtos);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _lista_produto_lista_produto_component__WEBPACK_IMPORTED_MODULE_3__["ListaProdutosComponent"]],
      styles: [".carousel-demo[_ngcontent-%COMP%]   .ui-carousel[_ngcontent-%COMP%]   .ui-carousel-content[_ngcontent-%COMP%]   .ui-carousel-item[_ngcontent-%COMP%]   .car-details[_ngcontent-%COMP%]    > .p-grid[_ngcontent-%COMP%] {\r\n    border: 1px solid #b3c2ca;\r\n    border-radius: 3px;\r\n    margin: 0.3em;\r\n    text-align: center;\r\n    padding: 2em 0 2.25em 0;\r\n}\r\n.carousel-demo[_ngcontent-%COMP%]   .ui-carousel[_ngcontent-%COMP%]   .ui-carousel-content[_ngcontent-%COMP%]   .ui-carousel-item[_ngcontent-%COMP%]   .car-data[_ngcontent-%COMP%]   .car-title[_ngcontent-%COMP%] {\r\n    font-weight: 700;\r\n    font-size: 20px;\r\n    margin-top: 24px;\r\n}\r\n.carousel-demo[_ngcontent-%COMP%]   .ui-carousel[_ngcontent-%COMP%]   .ui-carousel-content[_ngcontent-%COMP%]   .ui-carousel-item[_ngcontent-%COMP%]   .car-data[_ngcontent-%COMP%]   .car-subtitle[_ngcontent-%COMP%] {\r\n    margin: 0.25em 0 2em 0;\r\n}\r\n.carousel-demo[_ngcontent-%COMP%]   .ui-carousel[_ngcontent-%COMP%]   .ui-carousel-content[_ngcontent-%COMP%]   .ui-carousel-item[_ngcontent-%COMP%]   .car-data[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    margin-left: 0.5em;\r\n}\r\n.carousel-demo[_ngcontent-%COMP%]   .ui-carousel[_ngcontent-%COMP%]   .ui-carousel-content[_ngcontent-%COMP%]   .ui-carousel-item[_ngcontent-%COMP%]   .car-data[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:first-child {\r\n    margin-left: 0;\r\n}\r\n.carousel-demo[_ngcontent-%COMP%]   .ui-carousel.custom-carousel[_ngcontent-%COMP%]   .ui-carousel-dot-icon[_ngcontent-%COMP%] {\r\n    width: 16px !important;\r\n    height: 16px !important;\r\n    border-radius: 50%;\r\n}\r\n.carousel-demo[_ngcontent-%COMP%]   .ui-carousel.ui-carousel-horizontal[_ngcontent-%COMP%]   .ui-carousel-content[_ngcontent-%COMP%]   .ui-carousel-item.ui-carousel-item-start[_ngcontent-%COMP%]   .car-details[_ngcontent-%COMP%]    > .p-grid[_ngcontent-%COMP%] {\r\n    margin-left: 0.6em;\r\n}\r\n.carousel-demo[_ngcontent-%COMP%]   .ui-carousel.ui-carousel-horizontal[_ngcontent-%COMP%]   .ui-carousel-content[_ngcontent-%COMP%]   .ui-carousel-item.ui-carousel-item-end[_ngcontent-%COMP%]   .car-details[_ngcontent-%COMP%]    > .p-grid[_ngcontent-%COMP%] {\r\n    margin-right: 0.6em;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2hvd2Nhc2Uvc2hvd19jYXNlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Nob3djYXNlL3Nob3dfY2FzZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcm91c2VsLWRlbW8gLnVpLWNhcm91c2VsIC51aS1jYXJvdXNlbC1jb250ZW50IC51aS1jYXJvdXNlbC1pdGVtIC5jYXItZGV0YWlscyA+IC5wLWdyaWQge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2IzYzJjYTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIG1hcmdpbjogMC4zZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAyZW0gMCAyLjI1ZW0gMDtcclxufVxyXG4uY2Fyb3VzZWwtZGVtbyAudWktY2Fyb3VzZWwgLnVpLWNhcm91c2VsLWNvbnRlbnQgLnVpLWNhcm91c2VsLWl0ZW0gLmNhci1kYXRhIC5jYXItdGl0bGUge1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIG1hcmdpbi10b3A6IDI0cHg7XHJcbn1cclxuLmNhcm91c2VsLWRlbW8gLnVpLWNhcm91c2VsIC51aS1jYXJvdXNlbC1jb250ZW50IC51aS1jYXJvdXNlbC1pdGVtIC5jYXItZGF0YSAuY2FyLXN1YnRpdGxlIHtcclxuICAgIG1hcmdpbjogMC4yNWVtIDAgMmVtIDA7XHJcbn1cclxuLmNhcm91c2VsLWRlbW8gLnVpLWNhcm91c2VsIC51aS1jYXJvdXNlbC1jb250ZW50IC51aS1jYXJvdXNlbC1pdGVtIC5jYXItZGF0YSBidXR0b24ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDAuNWVtO1xyXG59XHJcbi5jYXJvdXNlbC1kZW1vIC51aS1jYXJvdXNlbCAudWktY2Fyb3VzZWwtY29udGVudCAudWktY2Fyb3VzZWwtaXRlbSAuY2FyLWRhdGEgYnV0dG9uOmZpcnN0LWNoaWxkIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG59XHJcbi5jYXJvdXNlbC1kZW1vIC51aS1jYXJvdXNlbC5jdXN0b20tY2Fyb3VzZWwgLnVpLWNhcm91c2VsLWRvdC1pY29uIHtcclxuICAgIHdpZHRoOiAxNnB4ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDE2cHggIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG4uY2Fyb3VzZWwtZGVtbyAudWktY2Fyb3VzZWwudWktY2Fyb3VzZWwtaG9yaXpvbnRhbCAudWktY2Fyb3VzZWwtY29udGVudCAudWktY2Fyb3VzZWwtaXRlbS51aS1jYXJvdXNlbC1pdGVtLXN0YXJ0IC5jYXItZGV0YWlscyA+IC5wLWdyaWQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDAuNmVtO1xyXG59XHJcbi5jYXJvdXNlbC1kZW1vIC51aS1jYXJvdXNlbC51aS1jYXJvdXNlbC1ob3Jpem9udGFsIC51aS1jYXJvdXNlbC1jb250ZW50IC51aS1jYXJvdXNlbC1pdGVtLnVpLWNhcm91c2VsLWl0ZW0tZW5kIC5jYXItZGV0YWlscyA+IC5wLWdyaWQge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjZlbTtcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShowCaseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-showcase',
          templateUrl: './show_case.component.html',
          styleUrls: ['./show_case.component.css']
        }]
      }], function () {
        return [{
          type: _produtos_produtos_service__WEBPACK_IMPORTED_MODULE_1__["ProdutosService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/showcase/show_case.module.ts":
  /*!****************************************************!*\
    !*** ./src/app/pages/showcase/show_case.module.ts ***!
    \****************************************************/

  /*! exports provided: ShowcaseModule */

  /***/
  function srcAppPagesShowcaseShow_caseModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShowcaseModule", function () {
      return ShowcaseModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _detalhes_produto_detalhes_produto_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./detalhes-produto/detalhes-produto.component */
    "./src/app/pages/showcase/detalhes-produto/detalhes-produto.component.ts");
    /* harmony import */


    var _lista_produto_lista_produto_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./lista-produto/lista-produto.component */
    "./src/app/pages/showcase/lista-produto/lista-produto.component.ts");
    /* harmony import */


    var primeng_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! primeng/card */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-card.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_component_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/component/components.module */
    "./src/app/component/components.module.ts");
    /* harmony import */


    var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common/locales/pt */
    "./node_modules/@angular/common/locales/pt.js");
    /* harmony import */


    var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_7__);
    /* harmony import */


    var _produtos_produtos_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../produtos/produtos.service */
    "./src/app/pages/produtos/produtos.service.ts");
    /* harmony import */


    var _show_case_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./show_case.component */
    "./src/app/pages/showcase/show_case.component.ts");
    /* harmony import */


    var _show_case_routes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./show_case.routes */
    "./src/app/pages/showcase/show_case.routes.ts");

    Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["registerLocaleData"])(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_7___default.a);

    var ShowcaseModule = function ShowcaseModule() {
      _classCallCheck(this, ShowcaseModule);
    };

    ShowcaseModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ShowcaseModule
    });
    ShowcaseModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ShowcaseModule_Factory(t) {
        return new (t || ShowcaseModule)();
      },
      providers: [_produtos_produtos_service__WEBPACK_IMPORTED_MODULE_8__["ProdutosService"]],
      imports: [[src_app_component_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], primeng_card__WEBPACK_IMPORTED_MODULE_4__["CardModule"], _show_case_routes__WEBPACK_IMPORTED_MODULE_10__["ShowcaseRoutesModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ShowcaseModule, {
        declarations: [_detalhes_produto_detalhes_produto_component__WEBPACK_IMPORTED_MODULE_2__["DetalhesProdutoComponent"], _lista_produto_lista_produto_component__WEBPACK_IMPORTED_MODULE_3__["ListaProdutosComponent"], _show_case_component__WEBPACK_IMPORTED_MODULE_9__["ShowCaseComponent"]],
        imports: [src_app_component_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], primeng_card__WEBPACK_IMPORTED_MODULE_4__["CardModule"], _show_case_routes__WEBPACK_IMPORTED_MODULE_10__["ShowcaseRoutesModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShowcaseModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_detalhes_produto_detalhes_produto_component__WEBPACK_IMPORTED_MODULE_2__["DetalhesProdutoComponent"], _lista_produto_lista_produto_component__WEBPACK_IMPORTED_MODULE_3__["ListaProdutosComponent"], _show_case_component__WEBPACK_IMPORTED_MODULE_9__["ShowCaseComponent"]],
          imports: [src_app_component_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], primeng_card__WEBPACK_IMPORTED_MODULE_4__["CardModule"], _show_case_routes__WEBPACK_IMPORTED_MODULE_10__["ShowcaseRoutesModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          providers: [_produtos_produtos_service__WEBPACK_IMPORTED_MODULE_8__["ProdutosService"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/showcase/show_case.routes.ts":
  /*!****************************************************!*\
    !*** ./src/app/pages/showcase/show_case.routes.ts ***!
    \****************************************************/

  /*! exports provided: ShowcaseRoutesModule */

  /***/
  function srcAppPagesShowcaseShow_caseRoutesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShowcaseRoutesModule", function () {
      return ShowcaseRoutesModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _show_case_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./show_case.component */
    "./src/app/pages/showcase/show_case.component.ts");
    /* harmony import */


    var _detalhes_produto_detalhes_produto_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./detalhes-produto/detalhes-produto.component */
    "./src/app/pages/showcase/detalhes-produto/detalhes-produto.component.ts");

    var routes = [{
      path: '',
      component: _show_case_component__WEBPACK_IMPORTED_MODULE_2__["ShowCaseComponent"]
    }, {
      path: 'produto-detalhe/:id',
      component: _detalhes_produto_detalhes_produto_component__WEBPACK_IMPORTED_MODULE_3__["DetalhesProdutoComponent"]
    }];

    var ShowcaseRoutesModule = function ShowcaseRoutesModule() {
      _classCallCheck(this, ShowcaseRoutesModule);
    };

    ShowcaseRoutesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ShowcaseRoutesModule
    });
    ShowcaseRoutesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ShowcaseRoutesModule_Factory(t) {
        return new (t || ShowcaseRoutesModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ShowcaseRoutesModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShowcaseRoutesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=pages-showcase-show_case-module-es5.js.map