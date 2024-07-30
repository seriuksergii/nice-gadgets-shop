import { Product } from "./Product";
import { ProductCart } from "./ProductCart";

export interface UserAction {
  favorites: Product[];
  cart: ProductCart[];
}