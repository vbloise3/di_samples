"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var Product = (function () {
    function Product(id, title, price, description) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.description = description;
    }
    Product = __decorate([
        core_1.Injectable()
    ], Product);
    return Product;
}());
exports.Product = Product;
var ProductService = (function () {
    function ProductService() {
    }
    /*constructor(private http:Http){
        let products = http.get('products.json');
    }*/
    ProductService.prototype.getProduct = function () {
        return new Product(0, "iPhone 7", 249.99, "The latest iPhone, 7-inch screen");
    };
    return ProductService;
}());
exports.ProductService = ProductService;
