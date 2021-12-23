import {Component, OnInit} from '@angular/core';
import {CartService} from "../../service/cart.service";
import {ProductCartModel} from "../../model/product-cart-model";
import {ProductService} from "../../../product/service/product.service";

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {

  productsInTheCart!: ProductCartModel[];

  color = 'ghostwhite';

  constructor(private readonly cartService: CartService, private readonly productService: ProductService) {
  }

  ngOnInit(): void {
    this.productsInTheCart = this.cartService.retrieveProductsInTheCart();
  }

  retrieveTotal(): number {
    return this.cartService.retrieveCartTotal();
  }

  checkOut(): void {
    this.cartService.checkout();
    this.ngOnInit();
  }

  onAddOneItem(productInTheCart: ProductCartModel): void {
    productInTheCart.quantity += this.productService.purchaseProduct(productInTheCart.item, 1);
  }

  onRemoveOneItem(productInTheCart: ProductCartModel): void {
    this.productService.returnProduct(productInTheCart.item, 1);
    productInTheCart.quantity -= 1;
  }

  onRemoveAllItems(productInTheCart: ProductCartModel): void {
    this.productService.returnProduct(productInTheCart.item, productInTheCart.quantity)
    this.cartService.removeAllItems(productInTheCart);
    this.productsInTheCart = this.cartService.retrieveProductsInTheCart();
  }

}
