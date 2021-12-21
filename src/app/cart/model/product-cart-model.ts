import {ProductModel} from "../../product/model/product-model";

export interface ProductCartModel {
  item: ProductModel;
  quantity: number;
  sum: number;
}



