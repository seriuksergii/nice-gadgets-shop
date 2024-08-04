/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useState, useEffect } from 'react';
import './FavAndCartBlock.scss';
import { NavLink } from 'react-router-dom';
import { getNavlinkStyle } from '../../services/styleHelpers';
import { useUserActions } from '../../Contexts/useUserActions';
import i18n from '../i18n/i18n';

export const FavAndCartBlock: React.FC = () => {
  const { userAction } = useUserActions();
  const { cart, favorites } = userAction;

  const cartCount = cart.length;
  const favoritesCount = favorites.length;

  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  useEffect(() => {
    const handleLanguageChange = (lng: string) => {
      setCurrentLanguage(lng);
    };

    i18n.on('languageChanged', handleLanguageChange);

    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, []);

  const changeLanguage = async () => {
    const newLanguage = currentLanguage === 'en' ? 'ua' : 'en';
    await i18n.changeLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  return (
    <>
      <div className="buttons-lng-wrp">
        <button onClick={changeLanguage} className="buttons-lng-btn">
          {currentLanguage === 'en' ? 'UA' : 'EN'}
        </button>
      </div>
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
    </>
  );
};
