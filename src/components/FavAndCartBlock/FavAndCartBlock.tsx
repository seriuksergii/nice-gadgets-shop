import React from 'react';
import './FavAndCartBlock.scss';

export const FavAndCartBlock: React.FC = () => {
  return (
    <div className="info-buttons">
      <div className="info-buttons__icon info-buttons__icon--favorites">
        <a className='info-buttons__link' href="#">
          <img src="/img/icons/favourites.svg" alt="" />
        </a>
      </div>

      <div className="info-buttons__icon info-buttons__icon--cart">
        <a className='info-buttons__link' href="#">
          <img src="/img/icons/shopping-bag.svg" alt="" />
        </a>
      </div>
    </div>
  );
};
