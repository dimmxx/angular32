import {Component, OnInit} from '@angular/core';
import {ProductModel} from "../../model/product-model";
import {ProductService} from "../../service/product.service";
import {CartService} from "../../../cart/service/cart.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products!: ProductModel[];

  constructor(private readonly productService: ProductService, private readonly cartService: CartService) {
  }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  onAddToCartOne(product: ProductModel): void {
    if(this.productService.purchaseProduct(product, 1) === 1){
      this.cartService.addProduct(product);
    }
  }

}
