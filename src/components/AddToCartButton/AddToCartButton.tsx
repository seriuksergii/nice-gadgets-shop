import React from 'react';
import './AddToCartButton.scss';
import cn from 'classnames';
import { Product } from '../../types';
import { useUserActions } from '../../Contexts/useUserActions';
import { ActionTypes } from '../../Contexts/reduser';
import { useTranslation } from 'react-i18next';
interface Props {
 product: Product
}

export const AddToCartButton: React.FC<Props> = ({ product }) => {

  const { userAction, dispatch } = useUserActions();
  const { cart } = userAction;
  const { t } = useTranslation();

  const isInCart = cart.some((p) => p.id === product.id);

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
      {isInCart ? t('product_card.added') : t('product_card.add')}
    </button>
  );
};
