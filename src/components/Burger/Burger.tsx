import React from "react";
import "./Burger.scss";
import { Logo } from "../Logo/Logo";
import { Navigation } from "../Navigation/Navigation";

export const Burger: React.FC = () => {
  return (
    <section className="burger">  
      <div className="burger__top">
        <Logo className={"burger__logo"} src={"./img/icons/logo-black.svg"} />
        <button className="burger__close" type="button">
          <img src="./img/icons/close.svg" alt="" />
        </button>
      </div>

      <div className="burger__nav">
        <Navigation />
      </div>

      <div className="burger__bottom">
        <a className="burger__icon" href="#"><img src="/img/icons/favourites.svg" alt="" /></a>
        <a className="burger__icon" href="#"><img src="/img/icons/shopping-bag.svg" alt="" /></a>
      </div>
    </section>
  );
};
