import { Product } from "../types";
import { ProductCart } from "../types/ProductCart";

export const KEY_FAVORITES = 'favorites';
export const KEY_CART = 'cart';

export const getData = <T>(key:string): T[] => {
  return JSON.parse(localStorage.getItem(key) ?? '[]') as T[]
}

export const addFavorites = (product: Product) => {
  const products = getData(KEY_FAVORITES);
  
  const newProducts = [...products, product];
  localStorage.removeItem(KEY_FAVORITES);
  localStorage.setItem(KEY_FAVORITES, JSON.stringify(newProducts));
};


export const deleteProduct = (id: number, key: string) => {
  const products = getData<Product | ProductCart>(key);

  const newProducts = products.filter((product) => product.id !== id);
  localStorage.removeItem(key);
  localStorage.setItem(key, JSON.stringify(newProducts));
};

export const addToCart = (product: Product) => {
  const cartProducts = getData<ProductCart>(KEY_CART);
    
    cartProducts.push({ ...product, quantity: 1 });
  
  localStorage.setItem(KEY_CART, JSON.stringify(cartProducts));
};


export const decreaseQuantity = (id: number) => {
  const cartProducts = getData<ProductCart>(KEY_CART);
  
  const productIndex = cartProducts.findIndex(p => p.id === id);
  
  if (cartProducts[productIndex].quantity < 2) {
    deleteProduct(id, KEY_CART);
  } else {
    cartProducts[productIndex].quantity--;
    localStorage.setItem(KEY_CART, JSON.stringify(cartProducts))
  }
}