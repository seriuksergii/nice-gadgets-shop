import { Product } from "./Product";

export type SimpleProduct = Pick<Product, 'category' | 'itemId' | 'name' | 'price' | 'image' >;

export interface ProductCart extends SimpleProduct {
  quantity: number;
}