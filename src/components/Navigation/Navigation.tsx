import React from 'react';
import './Navigation.scss';
import { NavLink } from 'react-router-dom';
import { getNavlinkStyle } from '../../services/styleHelpers';

export const Navigation: React.FC = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <NavLink to={'/'} className={({ isActive }) => getNavlinkStyle(isActive, 'nav__link')}>
            home
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink
            to={'phones'}
            className={({ isActive }) => getNavlinkStyle(isActive, 'nav__link')}
          >
            Phones
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink
            to={'tablets'}
            className={({ isActive }) => getNavlinkStyle(isActive, 'nav__link')}
          >
            tablets
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink
            to={'accessories'}
            className={({ isActive }) => getNavlinkStyle(isActive, 'nav__link')}
          >
            accessories
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
