import { Component, OnInit } from '@angular/core';
import {ProductModel} from "../../model/product-model";
import {ProductService} from "../../service/product.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products!: ProductModel[];

  constructor(private readonly productService: ProductService) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

}
