import React from 'react';
import './FavouritesPage.scss';
import { Container } from '../../components/Container';
import { ProductCard } from '../../components/ProductCard';
import { useUserActions } from '../../Contexts/useUserActions';
import { EmptyFavouritesPage } from '../EmptyFavouritesPage/EmptyFavouritesPage';
import { Link } from 'react-router-dom';

export const FavouritesPage: React.FC = () => {
  const { userAction } = useUserActions();
  const { favorites } = userAction;
  const count = favorites.length;

  return (
    <Container>
      <div className="cart__back">
        <img src="/img/icons/arrow-right.svg" alt="Arrov right" />
        <Link className="cart__back--text" to={'/'}>
          Back
        </Link>
      </div>
      <section className="favourites">
        <h1 className="favourites__title">Favourites</h1>
        {count > 0 && <p className="favourites__count">{count} items</p>}

        <div className="favourites__content">
          <ul className="favourites__items">
            {favorites.length === 0 ? (
              <EmptyFavouritesPage />
            ) : (
              favorites.map((product) => (
                <li className="item" key={product.id}>
                  {' '}
                  <ProductCard product={product} />{' '}
                </li>
              ))
            )}
          </ul>
        </div>
      </section>
    </Container>
  );
};
