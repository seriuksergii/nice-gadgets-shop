import React from 'react';
import './FavAndCartBlock.scss';
import { NavLink } from 'react-router-dom';
import { getNavlinkStyle } from '../../services/styleHelpers';

export const FavAndCartBlock: React.FC = () => {
  return (
    <div className="info-buttons">
      
        <NavLink
          to={'/favorites'}
          className={({ isActive }) => getNavlinkStyle(isActive, 'info-buttons__link')}
        >
          <img className='icon' src="/img/icons/favourites.svg" alt="favorites" />
        </NavLink>
     

      
        <NavLink
          to={'/cart'}
          className={({ isActive }) => getNavlinkStyle(isActive, 'info-buttons__link')}
        >
          <img className='icon' src="/img/icons/shopping-bag.svg" alt="cart" />
        </NavLink>
     
    </div>
  );
};
