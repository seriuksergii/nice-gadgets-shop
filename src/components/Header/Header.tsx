import './Header.scss';
import { Navigation } from '../Navigation/Navigation';
import { FavAndCartBlock } from '../FavAndCartBlock/FavAndCartBlock';
import { useState } from 'react';
import { Burger } from '../Burger';
import { Link } from 'react-router-dom';
import { useTheme } from '../../Contexts/ThemeContext';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

export const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const closeBurger = () => {
    setIsActive(!isActive);
  };

  const showBurger = () => {
    setIsActive(true);
  }
  return (<header className="header">
    <div className='header__container'>
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

    <div className="theme-button" title='Switch theme'>
      <DarkModeSwitch
        checked={theme === 'dark'}
        onChange={toggleTheme}
        size={23}
      />
    </div>

    <div className="header__icons header__icons--info">
      <FavAndCartBlock />
    </div>

    <div className="header__icons header__icons--burger">
      <a className="icon icon--burgerMenu">
        <img 
          onClick={showBurger} 
          src={theme === 'light' ? '/img/icons/menu.svg' : '/img/icons/menu-white.svg'}
          alt="burger menu"
        />
      </a>
      </div>
    </div>
    <Burger isActive = {isActive} closeBurger={closeBurger}/>
  </header>);
};
