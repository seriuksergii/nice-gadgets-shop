import { deleteProductCart, deleteProductFavorites, getData, KEY_CART, KEY_FAVORITES } from '../services/localStorageHelper';
import { Product } from '../types';
import { ProductCart, SimpleProduct } from '../types/ProductCart';
import { ProductFavorites } from '../types/ProductFavorites';
import { UserAction } from '../types/UserAction';

export enum ActionTypes {
  onGet = 'onGet',
  onAddToFavorites = 'onAddToFavorites',
  onDeleteCart = 'onDeleteCart',
  onDeleteFavorites = 'onDeleteFavorites',
  onAddToCart = 'onAddToCart',
  increaseQuantity = 'increaseQuantity',
  decreaseQuantity = 'decreaseQuantity',
  clearCart = 'clearCart'
}

export type Action =
  | { type: ActionTypes.onGet }
  | { type: ActionTypes.onAddToFavorites; payload: ProductFavorites }
  | { type: ActionTypes.onDeleteCart; payload: string}
  | { type: ActionTypes.onDeleteFavorites; payload: string}
  | { type: ActionTypes.onAddToCart; payload: SimpleProduct }
  | { type: ActionTypes.increaseQuantity; payload: string }
  | { type: ActionTypes.decreaseQuantity; payload: string }
  | { type: ActionTypes.clearCart}

export const userActionReducer = (state: UserAction, action: Action): UserAction => {
  switch (action.type) {
    case ActionTypes.onGet: {
      return {
        favorites: getData<Product>(KEY_FAVORITES),
        cart: getData<ProductCart>(KEY_CART),
      };
    }

    case ActionTypes.onAddToCart: {
      const cart = [...state.cart];
      cart.push({ ...action.payload, quantity: 1 });
      localStorage.setItem(KEY_CART, JSON.stringify(cart));
      return { ...state, cart };
    }

    case ActionTypes.onDeleteCart: {
      deleteProductCart(action.payload);
      const updatedCart = state.cart.filter(p=> p.itemId !== action.payload)
      return { ...state, cart: updatedCart };
    }
      
    case ActionTypes.onDeleteFavorites: {
      deleteProductFavorites(action.payload);
      const updatedFavorites = state.favorites.filter(product => product.itemId !== action.payload)
      return { ...state, favorites: updatedFavorites};
    }

    case ActionTypes.increaseQuantity: {
      const cart = [...state.cart];
      const productIndex = cart.findIndex((p) => p.itemId === action.payload);

      if (productIndex !== -1) {
        cart[productIndex].quantity += 1;
        localStorage.setItem(KEY_CART, JSON.stringify(cart));
      }

      return { ...state, cart };
    }

    case ActionTypes.decreaseQuantity: {
      const cart = [...state.cart];
      const productIndex = cart.findIndex((p) => p.itemId === action.payload);

      if (productIndex !== -1) {
        if (cart[productIndex].quantity > 1) {
          cart[productIndex].quantity -= 1;
        } else {
          deleteProductCart(action.payload);
        }
        localStorage.setItem(KEY_CART, JSON.stringify(cart));
      }

      return { ...state, cart };
    }

    case ActionTypes.onAddToFavorites: {
      const favorites = [...state.favorites, action.payload];
      localStorage.setItem(KEY_FAVORITES, JSON.stringify(favorites));
      return { ...state, favorites };
    }

    case ActionTypes.clearCart: {
      localStorage.removeItem(KEY_CART);
      return {
        ...state,
        cart: [],
      }
    }  

    default:
      return state;
  }
};
