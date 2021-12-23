import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ProductCartModel} from "../../model/product-cart-model";

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent {

  @Input()
  productInTheCart!: ProductCartModel;

  @Output()
  addOneItem: EventEmitter<ProductCartModel> = new EventEmitter<ProductCartModel>();

  @Output()
  removeOneItem: EventEmitter<ProductCartModel> = new EventEmitter<ProductCartModel>();

  @Output()
  removeAllItems: EventEmitter<ProductCartModel> = new EventEmitter<ProductCartModel>();

  onAddOneItem(): void {
    console.log('adding one more ' + this.productInTheCart.item.name);
    this.addOneItem.emit(this.productInTheCart);
  }

  onRemoveOneItem(): void {
    console.log('removing one ' + this.productInTheCart.item.name);
    this.removeOneItem.emit(this.productInTheCart);
  }

  onRemoveAllItems(): void {
    console.log('removing all items of ' + this.productInTheCart.item.name);
    this.removeAllItems.emit(this.productInTheCart);
  }



}
