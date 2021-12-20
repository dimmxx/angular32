import {Injectable} from '@angular/core';
import {ProductModel} from "../model/product-model";
import {ProductGroup} from "../model/product-group";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: ProductModel[] =
    [
      {sku: '23ee4fe1', name: 'Samsung S21', price: 800, category: ProductGroup.mobile, isAvailable: true, description: 'product description'},
      {sku: '8a97f022', name: 'Apple iPhone 12 Pro 256', price: 900, category: ProductGroup.mobile, isAvailable: true, description: 'product description'},
      {sku: '8a97f022', name: 'Apple iPhone 13 Pro Max 256', price: 1199, category: ProductGroup.mobile, isAvailable: false, description: 'product description'},
      {sku: 'bc77a43b', name: 'Angular in action', price: 25, category: ProductGroup.book, isAvailable: true, description: 'product description'},
      {sku: '72c48ea8', name: 'MacBook Pro M1', price: 800, category: ProductGroup.computer, isAvailable: true, description: 'product description'},
    ];

  constructor() { }

  getProducts(): ProductModel[]{
    return this.products;
  }
}
