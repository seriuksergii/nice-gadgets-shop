import './Header.scss';
import { Navigation } from '../Navigation/Navigation';
import { Logo } from '../Logo/Logo';
import { FavAndCartBlock } from '../FavAndCartBlock/FavAndCartBlock';
import { useState } from 'react';
import { Burger } from '../Burger';
import { Link } from 'react-router-dom';

export const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const closeBurger = () => {
    setIsActive(!isActive);
  };

  const showBurger = () => {
    setIsActive(true);
  }
  return (<header className="header">
    <div className='header__container'>
    <div className="header__logo">
      <Logo src="/img/icons/logo-pink.svg" />
    </div>

    <div className="header__nav">
      <Navigation />
    </div>

    <div className="header__icons header__icons--info">
      <FavAndCartBlock />
    </div>

    <div className="header__icons header__icons--burger">
      <Link to={"menu"} className="icon icon--burgerMenu">
        <img onClick={showBurger} src="\img\icons\menu.svg" alt="burger menu" />
      </Link>
      </div>
    </div>
    <Burger isActive = {isActive} closeBurger={closeBurger}/>
  </header>);
};
