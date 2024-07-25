import './Header.scss';
import logo from '../../images/logo.svg';  
import burgerMenu from '../../images/menu.svg';

export const Header = () => (
  <header className="header">
    <div className="header__left">
      <div className="header__logo">
        <a href="#0" className="nav__link">
          <img src={logo} alt="Moyo logo" className="logo" />
        </a>
      </div>
      
      <nav className="header__nav">
        <ul className="nav__list">
          <li className="nav__item">
            <a href="#1" className="nav__link is-active">
              Home
            </a>
          </li>
          <li className="nav__item">
            <a href="#2" className="nav__link">
              Phones
            </a>
          </li>
          <li className="nav__item">
            <a href="#3" className="nav__link">
              Tablets
            </a>
          </li>
          <li className="nav__item">
            <a href="#4" className="nav__link">
              Accessories
            </a>
          </li>
        </ul>
      </nav>
    </div>

    <div className="header__icons">
      <a href="" className="icon icon--favourites"></a>
      <a href="" className="icon icon--cart"></a>
    </div>

    <a href="#5" className="icon icon--burgerMenu">
      <img src={burgerMenu} alt="burger menu" />
    </a>
  </header>
);
