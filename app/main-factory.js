"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by vincebloise on 1/2/17.
 */
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var Product = (function () {
    function Product(title) {
        this.title = title;
    }
    return Product;
}());
var ProductService = (function () {
    function ProductService() {
    }
    ProductService.prototype.getProduct = function () {
        // Code making an HTTP request to get actual product details
        // would go here
        return new Product('iPhone 7');
    };
    return ProductService;
}());
var MockProductService = (function () {
    function MockProductService() {
    }
    MockProductService.prototype.getProduct = function () {
        return new Product('Samsung 7');
    };
    return MockProductService;
}());
var Product1Component = (function () {
    function Product1Component(productService) {
        this.product = productService.getProduct();
    }
    Product1Component = __decorate([
        core_1.Component({
            selector: 'product1',
            template: '{{product.title}}' })
    ], Product1Component);
    return Product1Component;
}());
var Product2Component = (function () {
    function Product2Component(productService) {
        this.product = productService.getProduct();
    }
    Product2Component = __decorate([
        core_1.Component({
            selector: 'product2',
            providers: [{
                    provide: ProductService,
                    useFactory: function (isDev) {
                        if (isDev) {
                            return new MockProductService();
                        }
                        else {
                            return new ProductService();
                        }
                    }, deps: ["IS_DEV_ENVIRONMENT"] }],
            template: '{{product.title}}'
        })
    ], Product2Component);
    return Product2Component;
}());
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app',
            template: "\n    <h2>A root component hosts two products<br> provided by different services</h2>\n    <product1></product1>\n    <br>\n    <product2></product2>\n  "
        })
    ], AppComponent);
    return AppComponent;
}());
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule],
            declarations: [AppComponent, Product1Component, Product2Component],
            providers: [ProductService,
                { provide: "IS_DEV_ENVIRONMENT", useValue: true }],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(AppModule);
