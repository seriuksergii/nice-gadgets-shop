import React from 'react';
import './ProductCard.scss';

import { MainButton } from '../MainButton';
import { AddToFavButton } from '../AddToFavButton';``

export const ProductCard: React.FC = () => {
  return (
    <article className="productCard">
      <img className="productCard_image" src="/src/images/example-phone-photo.jpg" alt="Phone" />
      <p className="productCard_title">Apple iPhone 11 128GB Black</p>
      <div className="productCard__prices">
        <span className="productCard__prices-discount">$1050</span>
        <span className="productCard__prices-full">$1100</span>
      </div>

      <div className="productCard__params">
        <div className="productCard__params-pair">
          <p className="productCard__param">Screen</p>
          <p className="productCard__value">6.1 IPS</p>
        </div>

        <div className="productCard__params-pair">
          <p className="productCard__param">Capacity</p>
          <p className="productCard__value">128GB</p>
        </div>

        <div className="productCard__params-pair">
          <p className="productCard__param">Ram</p>
          <p className="productCard__value">4 GB</p>
        </div>
      </div>

      <div className="productCard__buttons">
        <MainButton text = {'Add to cart'} handler={() => true} />
        <AddToFavButton />
      </div>
    </article>
  );
};
