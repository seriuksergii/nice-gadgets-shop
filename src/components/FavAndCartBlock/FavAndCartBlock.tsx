import React from 'react';
import './FavAndCartBlock.scss';
import { NavLink } from 'react-router-dom';
import { getNavlinkStyle } from '../../services/styleHelpers';
import { useUserActions } from '../../Contexts/useUserActions';

export const FavAndCartBlock: React.FC = () => {
  const { userAction } = useUserActions();
  const { cart, favorites } = userAction;

  const cartCount = cart.length;
  const favoritesCount = favorites.length;

  return (
    <div className="info-buttons">
      <NavLink
        to={'/favorites'}
        className={({ isActive }) => getNavlinkStyle(isActive, 'info-buttons__link')}
      >
        <img className="icon" src="/img/icons/favourites.svg" alt="favorites" />
        {favoritesCount > 0 && (
          <span className="count">
            <p className="countText">{favoritesCount}</p>
          </span>
        )}
      </NavLink>

      <NavLink
        to={'/cart'}
        className={({ isActive }) => getNavlinkStyle(isActive, 'info-buttons__link')}
      >
        <img className="icon" src="/img/icons/shopping-bag.svg" alt="cart" />
        {cartCount > 0 && (
          <span className="count">
            <p className="countText">{cartCount}</p>
          </span>
        )}
      </NavLink>
    </div>
  );
};
