import {Injectable} from '@angular/core';
import {ProductModel} from "../../product/model/product-model";
import {ProductCartModel} from "../model/product-cart-model";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  productsInTheCart: ProductCartModel[] = [];

  addProduct(productItem: ProductModel): void {
    let found = false;
    // вместо for посмотрите на использование метода find или findIndex
    // код станет проще
    for (let i = 0; i < this.productsInTheCart.length; i++) {
      if (productItem.sku === this.productsInTheCart[i].item.sku) {
        found = true;
        this.productsInTheCart[i].quantity++;
        break;
      }
    }

    if (!found) {
      const product = {
        item: productItem, quantity: 1
      } as ProductCartModel;
      this.productsInTheCart.push(product);
    }
    console.log(productItem.name + " has been added into the cart. Unique products in the cart: " + this.productsInTheCart.length);
  }

  retrieveProductsInTheCart(): ProductCartModel[] {
    return this.productsInTheCart;
  }

  retrieveCartTotal(): number {
    let total = 0;
    // посмотрите как использовать метод массива reduce
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
