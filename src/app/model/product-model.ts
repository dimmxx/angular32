import {ProductGroup} from "./product-group";

export interface ProductModel {
  sku: string
  name: string
  description: string
  price: number
  category: ProductGroup
  isAvailable: boolean
}



