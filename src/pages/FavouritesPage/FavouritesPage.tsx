import React from 'react';
import './FavouritesPage.scss';
import { Link } from 'react-router-dom';
import { Container } from '../../components/Container';
import { ProductCard } from '../../components/ProductCard';
import { Grid } from '../../components/Grid';
import { useUserActions } from '../../Contexts/useUserActions';
import { EmptyFavouritesPage } from '../EmptyFavouritesPage/EmptyFavouritesPage';

export const FavouritesPage: React.FC = () => {
  const { userAction } = useUserActions();
  const { favorites } = userAction;

  return (
    <section className="favourites">
      <Container>
        <div className="favourites__back">
          <img src="/img/icons/arrow-right.svg" alt="Arrow right" />
          <Link className="favourites__back--text" to={'/'}>
            Back
          </Link>
        </div>
        <h1 className="favourites__title">Favourites</h1>

        <div className="favourites__content">
          <Grid>
            <div className="favourites__items">
              {favorites.length === 0 ? (
                <EmptyFavouritesPage />
              ) : (
                favorites.map((product) => <ProductCard product={product} key={product.id} />)
              )}
            </div>
          </Grid>
        </div>
      </Container>
    </section>
  );
};
