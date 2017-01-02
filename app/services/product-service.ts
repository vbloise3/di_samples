/**
 * Created by vincebloise on 1/2/17.
 */
import {Http} from '@angular/http';
import {Injectable} from '@angular/core';

@Injectable()
export class Product {
    constructor(
        public id: number,
        public title: string,
        public price: number,
        public description: string) {
    }
}

export class ProductService {
    /*constructor(private http:Http){
        let products = http.get('products.json');
    }*/
    getProduct(): Product {
        return new Product( 0, "iPhone 7", 249.99, "The latest iPhone, 7-inch screen");
    }
}