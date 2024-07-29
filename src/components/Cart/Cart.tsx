import React from 'react';
import './Cart.scss';
import { Link } from 'react-router-dom';
import { Grid } from '../Grid/Grid';
import { MainButton } from '../MainButton';
import { Container } from '../Container';

export const Cart: React.FC = () => {
  return (
    <section className="cart">
      <Container>
      <div className="cart__back">
        <img src="/img/icons/arrow-right.svg" alt="Arrov right" />
        <Link className="cart__back--text" to={'/'}>
          Back
        </Link>
      </div>
      <h1 className="cart__title">Cart</h1>

      <div className="cart__content">
        <Grid>
          <div className="cart__items"></div>

          <div className="cart__info">
            <div className="cart__check">
              <p className="cart__total">$2657</p>

              <p className="cart__count">Total for 3 items</p>
            </div>

            <div className="cart__line"></div>

            <MainButton text = {'Checkout'} handler={() => true} />
          </div>
        </Grid>
        </div>
        </Container>
    </section>
  );
};
