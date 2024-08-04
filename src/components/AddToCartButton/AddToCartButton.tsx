import React from 'react';
import './AddToCartButton.scss';
import cn from 'classnames';
import { SimpleProduct } from '../../types';
import { useUserActions } from '../../Contexts/useUserActions';
import { ActionTypes } from '../../Contexts/reduser';
interface Props {
 product: SimpleProduct
}

export const AddToCartButton: React.FC<Props> = ({ product }) => {

  const { userAction, dispatch } = useUserActions();
  const { cart } = userAction;

  const isInCart = cart.some((p) => p.itemId === product.itemId);

  const handlerOnAddToCart = () => {
    dispatch({ type: ActionTypes.onAddToCart, payload: product });
  };


  return (
    <button
      className={cn('button', {
        "button--disabled": isInCart,
      })}
      onClick={handlerOnAddToCart}
      disabled={isInCart}
    >
      {isInCart ? 'Added to cart' : 'Add  to cart'}
    </button>
  );
};
