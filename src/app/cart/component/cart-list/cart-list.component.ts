import { Component, OnInit } from '@angular/core';
import {CartService} from "../../service/cart.service";
import {ProductCartModel} from "../../model/product-cart-model";

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {

  productsInTheCart!: ProductCartModel[];

  color = 'lightgrey';

  constructor(private cartService: CartService) { }

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
}
