import { ProductCart } from "../types/ProductCart";

export const KEY_FAVORITES = 'favorites';
export const KEY_CART = 'cart';

export const getData = <T>(key:string): T[] => {
  return JSON.parse(localStorage.getItem(key) ?? '[]') as T[]
}

export const deleteProductCart = (itemId: string) => {
  const products = getData<ProductCart>(KEY_CART);

  const newProducts = products.filter((product) => product.itemId !== itemId);
  localStorage.removeItem(KEY_CART);
  localStorage.setItem(KEY_CART, JSON.stringify(newProducts));
};


export const deleteProductFavorites = (itemId: string) => {
  const ids = getData<string>(KEY_FAVORITES);

  const newIds = ids.filter((id) => id !== itemId);
  localStorage.removeItem(KEY_FAVORITES);
  localStorage.setItem(KEY_FAVORITES, JSON.stringify(newIds));
};


