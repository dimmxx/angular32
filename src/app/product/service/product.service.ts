import {Injectable} from '@angular/core';
import {ProductModel} from "../model/product-model";
import {ProductGroup} from "../model/product-group";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: ProductModel[] = [{
    sku: '23ee4fe1',
    name: 'Samsung S21 512',
    price: 800,
    category: ProductGroup.mobile,
    isAvailable: true,
    description: 'product description',
    quantity: 10,
    imageUrl: "./assets/no-product-image.jpeg"
  }, {
    sku: '8a97f022',
    name: 'Apple iPhone 12 Pro 256',
    price: 900,
    category: ProductGroup.mobile,
    isAvailable: true,
    description: 'product description',
    quantity: 10,
    imageUrl: "./assets/no-product-image.jpeg"
  }, {
    sku: '8a97f022',
    name: 'Apple iPhone 13 Pro Max 256',
    price: 1199,
    category: ProductGroup.mobile,
    isAvailable: false,
    description: 'product description',
    quantity: 0,
    imageUrl: "./assets/no-product-image.jpeg"
  }, {
    sku: 'bc77a43b',
    name: 'Angular in action',
    price: 25,
    category: ProductGroup.book,
    isAvailable: true,
    description: 'product description',
    quantity: 10,
    imageUrl: "./assets/no-product-image.jpeg"

  }, {
    sku: '72c48ea8',
    name: 'MacBook Pro M1',
    price: 800,
    category: ProductGroup.computer,
    isAvailable: true,
    description: 'product description',
    quantity: 10,
    imageUrl: "./assets/no-product-image.jpeg"
  }, {
    sku: 't6ashfg6',
    name: 'Clean Code',
    price: 30,
    category: ProductGroup.book,
    isAvailable: true,
    description: 'product description',
    quantity: 10,
    imageUrl: "./assets/no-product-image.jpeg"
  }, {
    sku: 'kl38hdgt',
    name: 'HP Spectre x360',
    price: 900,
    category: ProductGroup.computer,
    isAvailable: true,
    description: 'product description',
    quantity: 10,
    imageUrl: "./assets/no-product-image.jpeg"
  },];

  constructor() {
  }

  getProducts(): ProductModel[] {
    return this.products;
  }

  purchaseProduct(product: ProductModel, quantity: number): number {
    if (product.quantity > quantity) {
      product.quantity -= quantity;
      return quantity;
    } else if (product.quantity === quantity) {
      product.quantity -= quantity;
      product.isAvailable = false
      return quantity;
    } else {
      const stock = product.quantity;
      product.quantity = 0;
      product.isAvailable = false;
      return stock;
    }
  }

  returnProduct(product: ProductModel, quantity: number): void {
    product.quantity += quantity;
    if (product.quantity > 0) {
      product.isAvailable = true;
    }
  }
}
