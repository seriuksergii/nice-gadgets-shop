import { deleteProduct, getData, KEY_CART, KEY_FAVORITES } from '../services/localStorageHelper';
import { Product } from '../types';
import { ProductCart } from '../types/ProductCart';
import { UserAction } from '../types/UserAction';

export enum ActionTypes {
  onGet = 'onGet',
  onAddToFavorites = 'onAddToFavorites',
  onDelete = 'onDelete',
  onAddToCart = 'onAddToCart',
  increaseQuantity = 'increaseQuantity',
  decreaseQuantity = 'decreaseQuantity',
}

export type Action =
  | { type: ActionTypes.onGet }
  | { type: ActionTypes.onAddToFavorites; payload: Product }
  | { type: ActionTypes.onDelete; payload: { id: number; key: string } }
  | { type: ActionTypes.onAddToCart; payload: Product }
  | { type: ActionTypes.increaseQuantity; payload: number }
  | { type: ActionTypes.decreaseQuantity; payload: number };

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

    case ActionTypes.onDelete: {
      deleteProduct(action.payload.id, action.payload.key);
      const updatedFavorites = getData<Product>(KEY_FAVORITES);
      const updatedCart = getData<ProductCart>(KEY_CART);
      return { ...state, favorites: updatedFavorites, cart: updatedCart };
    }

    case ActionTypes.increaseQuantity: {
      const cart = [...state.cart];
      const productIndex = cart.findIndex((p) => p.id === action.payload);

      if (productIndex !== -1) {
        cart[productIndex].quantity += 1;
        localStorage.setItem(KEY_CART, JSON.stringify(cart));
      }

      return { ...state, cart };
    }

    case ActionTypes.decreaseQuantity: {
      const cart = [...state.cart];
      const productIndex = cart.findIndex((p) => p.id === action.payload);

      if (productIndex !== -1) {
        if (cart[productIndex].quantity > 1) {
          cart[productIndex].quantity -= 1;
        } else {
          deleteProduct(action.payload, KEY_CART);
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

    default:
      return state;
  }
};
