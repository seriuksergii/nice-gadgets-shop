import React, { useEffect } from 'react';
import './Burger.scss';
import { Logo } from '../Logo/Logo';
import { Navigation } from '../Navigation/Navigation';
import { FavAndCartBlock } from '../FavAndCartBlock/FavAndCartBlock';
import  cn from 'classnames';

interface Props {
  isActive: boolean;
  closeBurger: () => void;
}

export const Burger: React.FC<Props> = ({ isActive, closeBurger }) => {
  useEffect(() => {
    if (isActive) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [isActive]);


  return (
    <section className={cn('burger', { 'is-active-burger': isActive })}>
      <div className="burger__top">
        <div className="burger__logo">
          <Logo src={'./img/icons/logo-black.svg'} />
        </div>
        <div className="burger__close">
          <img  onClick={closeBurger} src="./img/icons/close.svg" alt="" />
        </div>
      </div>

      <div className="burger__nav">
        <Navigation />
      </div>

      <FavAndCartBlock />
    </section>
  );
};
