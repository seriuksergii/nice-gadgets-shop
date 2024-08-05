import React, { useMemo } from 'react';
import './Cart.scss';
import { Grid } from '../Grid/Grid';
import { Container } from '../Container';
import { CartItem } from '../CartItem';
import { useUserActions } from '../../Contexts/useUserActions';
import { EmptyCart } from '../../pages/EmptyCart';
import { ActionTypes } from '../../Contexts/reduser';
import { useTranslation } from 'react-i18next';
import { Back } from '../Back';
import { Fade } from 'react-awesome-reveal';



export const Cart: React.FC = () => {
  const { userAction, dispatch } = useUserActions();
  const { cart } = userAction;
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
         <Fade direction='up' triggerOnce={true}>
        <Back />
        <h1 className="cart__title">{t('cart.title')}</h1>
      </Fade>  
        <div className="cart__content">
          {cart.length === 0 ? (
            <EmptyCart />
          ) : (
                    <Fade>
                    <Grid>
              <div className="cart__items">
                {cart.map((product) => (
                  <CartItem product={product} key={product.itemId} />
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
            </Fade>   
          )}
              </div>
              
      </Container>
    </section>
  );
};
