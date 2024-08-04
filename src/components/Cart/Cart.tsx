import React, { useMemo } from 'react';
import './Cart.scss';
import { Link } from 'react-router-dom';
import { Grid } from '../Grid/Grid';
import { Container } from '../Container';
import { CartItem } from '../CartItem';
import { useUserActions } from '../../Contexts/useUserActions';
import { EmptyCart } from '../../pages/EmptyCart';
import { ActionTypes } from '../../Contexts/reduser';
import { useTranslation } from 'react-i18next';


export const Cart: React.FC = () => {
  const { userAction, dispatch } = useUserActions();
  const { cart } = userAction;
  const navigate = useNavigate();
  const { t } = useTranslation();


  const totalPrice  = useMemo(() => {
    return cart.reduce((total, { price, quantity }) => total + price * quantity, 0);
  }, [cart]);

  const handlerCheckout = () => {
      const userConfirmed = confirm("Checkout is not implemented yet. Do you want to clear the Cart?");
      
      if (userConfirmed) {
        dispatch({ type: ActionTypes.clearCart });
      }
  };

  return (
    <section className="cart">
      <Container>
        <div className="cart__back">
          <img src="/img/icons/arrow-right.svg" alt="Arrov right" />
          <Link className="cart__back--text" to={'/'}>
            {t('buttons.back')}
          </Link>
        </div>
        <h1 className="cart__title">{t('cart.title')}</h1>

        <div className="cart__content">
          {cart.length === 0 ? (
            <EmptyCart />
          ) : (
            <Grid>
              <div className="cart__items">
                {cart.map((product) => (
                  <CartItem product={product} key={product.id} />
                ))}
              </div>
              <div className="cart__info">
                <div className="cart__check">
                  <p className="cart__total">${totalPrice}</p>
                  <p className="cart__count">
                    {t('cart.total_for')} {cart.length} {t('cart.items')}
                  </p>
                </div>
                <div className="cart__line"></div>
                <button onClick={handlerCheckout} className="cart__button">
                  {t('cart.checkout')}
                </button>
              </div>
            </Grid>
          )}
        </div>
      </Container>
    </section>
  );
};
