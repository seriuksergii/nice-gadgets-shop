import React from 'react';
import './AddToCartButton.scss';
import cn from 'classnames';
import { SimpleProduct } from '../../types';
import { useUserActions } from '../../Contexts/useUserActions';
import { ActionTypes } from '../../Contexts/reduser';
import { useTranslation } from 'react-i18next';
import toast from 'react-hot-toast';
interface Props {
 product: SimpleProduct
}

export const AddToCartButton: React.FC<Props> = ({ product }) => {

  const { userAction, dispatch } = useUserActions();
  const { cart } = userAction;
  const { t } = useTranslation();

  const isInCart = cart.some((p) => p.itemId === product.itemId);

  const handlerOnAddToCart = () => {
    dispatch({ type: ActionTypes.onAddToCart, payload: product });
  };

  const notify = () => toast.success('Product added to cart!', {
    style: {
      border: '5px solid #27AE60',
      borderRadius: '20px',
      padding: '25px 30px 25px 30px',
      color: '#fff',
      backgroundColor: '#27AE60',
      fontSize: '20px',
    },
    iconTheme: {
      primary: '#fff',
      secondary: '#27AE60',
    },
  });

  const handleClick = () => {
    handlerOnAddToCart();
    notify();
  };


  return (
    <button
      className={cn('button', {
        "button--disabled": isInCart,
      })}
      onClick={handleClick}
      disabled={isInCart}
    >
      {isInCart ? t('product_card.added') : t('product_card.add')}
    </button>
  );
};
