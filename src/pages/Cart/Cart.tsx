import React, { useMemo } from 'react';
import './Cart.scss';
import { Grid } from '../../components/Grid/Grid';
import { Container } from '../../components/Container';
import { CartItem } from '../../components/CartItem';
import { useUserActions } from '../../Contexts/useUserActions';
import { EmptyCart } from '../EmptyCart';
import { useTranslation } from 'react-i18next';
import { Back } from '../../components/Back';
import { Fade } from 'react-awesome-reveal';
import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';
import { useNavigate } from 'react-router-dom';
import { CreateOrderActions, OnApproveActions, OnApproveData } from '@paypal/paypal-js';
import { ActionTypes } from '../../Contexts/reduser';

export const Cart: React.FC = () => {
  const { userAction, dispatch } = useUserActions();
  const { cart } = userAction;
  const { t } = useTranslation();
  const navigate = useNavigate();

  const totalPrice = useMemo(() => {
    return cart.reduce((total, { price, quantity }) => total + price * quantity, 0);
  }, [cart]);

  return (
    <section className="cart">
      <Container>
        <Fade direction="up" triggerOnce>
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
                  <PayPalScriptProvider
                    options={{
                      clientId: 'AXn7DCKuuQcydqwIIapdDyeMVSvywxi3iWepnHS3n3074NfPMkBufjPwqzWVV51gh0JRlaZEa-zXjIQ3',
                    }}
                  >
                    <PayPalButtons
                      createOrder={(_data, actions: CreateOrderActions) => {
                        return actions.order.create({
                          intent: 'CAPTURE', 
                          purchase_units: [
                            {
                              amount: {
                                currency_code: 'USD',
                                value: totalPrice.toString(),
                              },
                            },
                          ],
                        });
                      }}
                      onApprove={(_data: OnApproveData, actions: OnApproveActions) => {
                        if (!actions.order) {
                          return Promise.resolve();
                        }
                        return actions.order.capture().then((data) => {
                          dispatch({ type: ActionTypes.clearCart });
                          const orderID = data.id;
                          const payerName = data.payer?.name?.given_name ?? 'Unknown'; 
                          navigate('/thank-you', { state: { orderID, payerName } });
                        });
                      }}
                    />
                  </PayPalScriptProvider>
                </div>
              </Grid>
            </Fade>
          )}
        </div>
      </Container>
    </section>
  );
};
