import './BreadCrumbs.scss';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export const BreadCrumbs: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <div className="bread-crumbs">
      <Link to="/" title="Return to the Homepage">
        <img
          src="/img/icons/home.svg"
          alt="home icon"
          className="ico ico-home"
        />
      </Link>
      {pathnames.map((value, index) => {
        const to = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;

        return (
          <React.Fragment key={to}>
            <img
              src="/img/icons/right.svg"
              alt="arrow right icon"
              className="ico ico-right"
            />
            {!isLast ? (
              <Link to={to} className='bread-crumbs__cat-name'>
                {value}
              </Link>
            ) : (
              <p className="bread-crumbs__name">{value}</p>
            )} 
          </React.Fragment>
        );
      })}
    </div>
  );
};
