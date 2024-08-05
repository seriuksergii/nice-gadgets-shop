import { ProductCart } from "./ProductCart";
import { ProductFavorites } from "./ProductFavorites";


export interface UserAction {
  favorites: ProductFavorites[];
  cart: ProductCart[];
}