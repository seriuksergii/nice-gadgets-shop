import React from 'react';
import './Navigation.scss';
import { NavLink } from 'react-router-dom';
import { getNavlinkStyle } from '../../services/styleHelpers';
import { useTranslation } from 'react-i18next';

export const Navigation: React.FC = () => {
  const { t } = useTranslation();
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <NavLink to={'/'} className={({ isActive }) => getNavlinkStyle(isActive, 'nav__link')}>
            {t('nav.home')}
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink
            to={'/phones'}
            className={({ isActive }) => getNavlinkStyle(isActive, 'nav__link')}
          >
            {t('nav.phones')}
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink
            to={'/tablets'}
            className={({ isActive }) => getNavlinkStyle(isActive, 'nav__link')}
          >
            {t('nav.tablets')}
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink
            to={'/accessories'}
            className={({ isActive }) => getNavlinkStyle(isActive, 'nav__link')}
          >
            {t('nav.accessories')}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
