import {Component, Input, OnInit} from '@angular/core';
import {ProductModel} from "../../model/product-model";
import {CartService} from "../../service/cart.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input()
  productItem!: ProductModel;

  constructor(private readonly cartService: CartService) { }

  ngOnInit(): void {
  }

  onAddToCart(): void {
    this.cartService.addProduct(this.productItem);
  }
}
