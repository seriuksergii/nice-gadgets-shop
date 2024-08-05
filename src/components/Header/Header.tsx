/* eslint-disable @typescript-eslint/no-misused-promises */
import './Header.scss';
import { Navigation } from '../Navigation/Navigation';
import { FavAndCartBlock } from '../FavAndCartBlock/FavAndCartBlock';
import { useEffect, useState } from 'react';
import { Burger } from '../Burger';
import { Link } from 'react-router-dom';
import { useTheme } from '../../Contexts/ThemeContext';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import i18n from '../i18n/i18n';

export const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  const closeBurger = () => {
    setIsActive(!isActive);
  };

  const showBurger = () => {
    setIsActive(true);
  };

  const changeLanguage = async () => {
    const newLanguage = currentLanguage === 'en' ? 'ua' : 'en';
    await i18n.changeLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  useEffect(() => {
    const handleLanguageChange = (lng: string) => {
      setCurrentLanguage(lng);
    };

    i18n.on('languageChanged', handleLanguageChange);

    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, []);

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <Link to="/" title="Go to Home page">
            <img
              src={theme === 'light' ? '/img/icons/logo-pink.svg' : '/img/icons/logo-white.svg'}
              alt="Nice Gagets logo"
            />
          </Link>
        </div>

        <div className="header__nav">
          <Navigation />
        </div>

        <div className="theme-button" title="Switch theme">
          <button onClick={changeLanguage} className="buttons-lng-btn">
            {currentLanguage === 'en' ? 'UA' : 'EN'}
          </button>
          <DarkModeSwitch checked={theme === 'dark'} onChange={toggleTheme} size={23} />
        </div>

        <div className="header__icons header__icons--info">
          <FavAndCartBlock />
        </div>

        <div className="header__icons header__icons--burger">
          <Link to={'menu'} className="icon icon--burgerMenu">
            <img
              onClick={showBurger}
              src={theme === 'light' ? '/img/icons/menu.svg' : '/img/icons/menu-white.svg'}
              alt="burger menu"
            />
          </Link>
        </div>
      </div>
      <Burger isActive={isActive} closeBurger={closeBurger} />
    </header>
  );
};
