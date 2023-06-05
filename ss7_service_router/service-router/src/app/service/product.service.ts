import { Injectable } from '@angular/core';
import {Product} from '../product/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [{
    id: 1,
    name: 'Iphone 12',
    price: 12123123,
    description: 'New'
  }, {
    id: 2,
    name: 'IPhone 11',
    price: 1560000,
    description: 'Like new'
  }, {
    id: 3,
    name: 'IPhone X',
    price: 968000,
    description: '97%'
  }, {
    id: 4,
    name: 'IPhone 8',
    price: 7540000,
    description: '98%'
  }, {
    id: 5,
    name: 'IPhone 11 Pro',
    price: 1895000,
    description: 'Like new'
  }];

  getAll() {
    return this.products;
  }
  saveProduct(product) {
    this.products.push(product);
  }
  findById(id: number) {
    return this.products.find(products => products.id === id);
  }
  updateproduct(id: number, product: Product) {
    for (let i = 0; i < this.products.length; i++) {
          if (this.products[i].id === id) {
            this.products[i] = product;
          }
    }
  }
  deleteProduct(id: number) {
    this.products = this.products.filter(product => {
      return product.id !== id;
    });
  }
  constructor() {
  }
}