import React from 'react';
import './ProductCard.scss';
import { Link } from 'react-router-dom';

import { Product } from '../../types';

import { AddToCartButton } from '../AddToCartButton';
import { AddToFavButton } from '../AddToFavButton';
import { useTranslation } from 'react-i18next';
import { ProductFavorites } from '../../types/ProductFavorites';
import { Fade, Zoom } from 'react-awesome-reveal';

interface Props {
  product: Product | ProductFavorites;
}

export const ProductCard: React.FC<Props> = ({ product }) => {
  const { t } = useTranslation();
  const { itemId, category, image, name, price, fullPrice, screen, capacity, ram } = product;

  const URL = `/${category}/${itemId}`;

  return (
    <article className="productCard">
      <Fade triggerOnce={true}>
        <Link to={URL}>
          <Zoom triggerOnce={true}>
            <img className="productCard__image" src={image} alt={name} />
          </Zoom>
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
          <AddToCartButton product={product} />
          <AddToFavButton product={product} />
        </div>
      </Fade>
    </article>
  );
};
