/* eslint-disable @typescript-eslint/no-misused-promises */
import React from 'react';
import './FavAndCartBlock.scss';
import { NavLink } from 'react-router-dom';
import { getNavlinkStyle } from '../../services/styleHelpers';
import { useUserActions } from '../../Contexts/useUserActions';
import { useTheme } from '../../Contexts/ThemeContext';

export const FavAndCartBlock: React.FC = () => {
  const { userAction } = useUserActions();
  const { cart, favorites } = userAction;
  const { theme } = useTheme();

  const cartCount = cart.length;
  const favoritesCount = favorites.length;

  return (
    <>
      <div className="info-buttons">
        <NavLink
          to={'/favorites'}
          className={({ isActive }) => getNavlinkStyle(isActive, 'info-buttons__link')}
        >
          <img
            className="icon"
            src={
              theme === 'light' ? '/img/icons/favourites.svg' : '/img/icons/favourites-white.svg'
            }
            alt="favorites"
          />
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
          <img
            className="icon"
            src={
              theme === 'light'
                ? '/img/icons/shopping-bag.svg'
                : '/img/icons/shopping-bag-white.svg'
            }
            alt="cart"
          />
          {cartCount > 0 && (
            <span className="count">
              <p className="countText">{cartCount}</p>
            </span>
          )}
        </NavLink>
      </div>
    </>
  );
};
