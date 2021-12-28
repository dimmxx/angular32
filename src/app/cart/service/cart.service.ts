import {Injectable} from '@angular/core';
import {ProductModel} from "../../product/model/product-model";
import {ProductCartModel} from "../model/product-cart-model";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  productsInTheCart: ProductCartModel[] = [];

  constructor() {
  }

  addProduct(productItem: ProductModel): void {
    let found = false;
    for (let i = 0; i < this.productsInTheCart.length; i++) {
      if (productItem.sku === this.productsInTheCart[i].item.sku) {
        found = true;
        this.productsInTheCart[i].quantity++;
        break;
      }
    }

<<<<<<< HEAD:src/app/service/cart.service.ts
    if(!found){
      const product = {
        item: productItem,
        quantity: 1,
        sum: productItem.price
      } as ProductCartModel;

      this.productsInTheCart.push(product)
=======
    if (!found) {
      const product = {
        item: productItem, quantity: 1
      } as ProductCartModel;
      this.productsInTheCart.push(product);
>>>>>>> 55398c6abb534be7b9cde7b22e71b9602bc759d7:src/app/cart/service/cart.service.ts
    }
    console.log(productItem.name + " has been added into the cart. Unique products in the cart: " + this.productsInTheCart.length);
  }

  retrieveProductsInTheCart(): ProductCartModel[] {
    return this.productsInTheCart;
  }

  retrieveCartTotal(): number {
    let total = 0;
    for(let i = 0; i < this.productsInTheCart.length; i++){
      total += this.productsInTheCart[i].item.price * this.productsInTheCart[i].quantity;
    }
    return total;
  }

  removeAllItems(productInTheCart: ProductCartModel): void {
    this.productsInTheCart = this.productsInTheCart
      .filter(item => item.item.sku != productInTheCart.item.sku);
  }

  checkout(): void {
    this.productsInTheCart = [];
  }
}
