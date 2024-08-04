import React from 'react';
import './ProductCard.scss';
import { Link } from 'react-router-dom';

import { Product } from '../../types';

import { AddToCartButton } from '../AddToCartButton';
import { AddToFavButton } from '../AddToFavButton';
import { useUserActions } from '../../Contexts/useUserActions';
import { ActionTypes } from '../../Contexts/reduser';
import { KEY_FAVORITES } from '../../services/localStorageHelper';
import { useTranslation } from 'react-i18next';

interface Props {
  product: Product;
}

export const ProductCard: React.FC<Props> = ({ product }) => {
  const { t } = useTranslation();
  const { id, itemId, category, image, name, price, fullPrice, screen, capacity, ram } = product;

  const URL = `/${category}/${itemId}`;

  const { userAction, dispatch } = useUserActions();
  const { favorites, cart } = userAction;

  const isFavorites = favorites.some((p) => p.id === id);
  const isInCart = cart.some((p) => p.id == id);

  const handlerOnAddToCart = () => {
    dispatch({ type: ActionTypes.onAddToCart, payload: product });
  };

  const toggleFavorites = () => {
    console.log(!isFavorites);
    !isFavorites
      ? dispatch({ type: ActionTypes.onAddToFavorites, payload: product })
      : dispatch({ type: ActionTypes.onDelete, payload: { id: id, key: KEY_FAVORITES } });
  };

  return (
    <article className="productCard">
      <Link to={URL}>
        <img className="productCard__image" src={image} alt={name} />
        <p className="productCard__title">{name}</p>
        <div className="productCard__prices">
          <span className="productCard__prices-discount">${price}</span>
          <span className="productCard__prices-full">${fullPrice}</span>
        </div>
      </Link>

      <div className="productCard__params">
        <div className="productCard__params-pair">
          <p className="productCard__param">{t('product_card.screen')}</p>
          <p className="productCard__value">{screen}</p>
        </div>

        <div className="productCard__params-pair">
          <p className="productCard__param">{t('product_card.сapacity')}</p>
          <p className="productCard__value">{capacity}</p>
        </div>

        <div className="productCard__params-pair">
          <p className="productCard__param">{t('product_card.ram')}</p>
          <p className="productCard__value">{ram}</p>
        </div>
      </div>

      <div className="productCard__buttons">
        <AddToCartButton
          text={isInCart ? t('product_card.added') : t('product_card.add')}
          handler={handlerOnAddToCart}
          disabled={isInCart}
        />
        <AddToFavButton isFavorites={isFavorites} handler={toggleFavorites} />
      </div>
    </article>
  );
};
