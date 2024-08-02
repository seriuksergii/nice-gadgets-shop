import { Product } from "../types";
import { ProductCart } from "../types/ProductCart";

export const KEY_FAVORITES = 'favorites';
export const KEY_CART = 'cart';

export const getData = <T>(key:string): T[] => {
  return JSON.parse(localStorage.getItem(key) ?? '[]') as T[]
}

export const deleteProduct = (id: number, key: string) => {
  const products = getData<Product | ProductCart>(key);

  const newProducts = products.filter((product) => product.id !== id);
  localStorage.removeItem(key);
  localStorage.setItem(key, JSON.stringify(newProducts));
};



