import { Injectable } from '@angular/core';
import {ProductModel} from "../model/product-model";
import {ProductCartModel} from "../model/product-cart-model";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  productsInTheCart: ProductCartModel[] = [];
  total: number = 0;

  constructor() { }

  addProduct(productItem: ProductModel): void {
    let found = false;
    this.total = this.total + productItem.price;
    for(let i = 0; i < this.productsInTheCart.length; i++){
      if(productItem.sku === this.productsInTheCart[i].item.sku) {
        found = true;
        this.productsInTheCart[i].quantity++;
        this.productsInTheCart[i].sum = this.productsInTheCart[i].quantity * productItem.price;
        break;
      }
    }

    if(!found){
      this.productsInTheCart.push(new class implements ProductCartModel {
        item = productItem;
        quantity = 1;
        sum = productItem.price;
      })
    }
    console.log(productItem.name + " has been added into the cart. Unique products in the cart: " + this.productsInTheCart.length);
  }

  retrieveProductsInTheCart(): ProductCartModel[] {
    return this.productsInTheCart;
  }

  retrieveCartTotal(): number {
    return this.total;
  }

  checkout(): void {
    this.productsInTheCart = [];
    this.total = 0;
  }

}
