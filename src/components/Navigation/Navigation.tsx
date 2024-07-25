import React from "react";
import "./Navigation.scss";

export const Navigation: React.FC = () => {
  return ( 
        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__item is-active"><a className="nav__link" href="">home</a></li>
            <li className="nav__item"><a className="nav__link" href="">Phones</a></li>
            <li className="nav__item"><a className="nav__link" href="">tablets</a></li>
            <li className="nav__item"><a className="nav__link" href="">accessories</a></li>
         </ul>
        </nav>
  );
};
