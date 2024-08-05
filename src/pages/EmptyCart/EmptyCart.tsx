import { Zoom } from 'react-awesome-reveal';
import './EmptyCart.scss';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../Contexts/ThemeContext';

export const EmptyCart = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();
  return (
     <div className="cartIsEmpty">
        <Zoom>
      <h1 className="cartIsEmpty__message">{t('cart.empty_cart_message')}</h1>
      <h2 className="cartIsEmpty__advice">{t('cart.empty_cart_advice')}</h2>

      <div className="cartIsEmpty__image-wrapper">
        <img
          src={theme === 'light' ? "/img/emptyCart.png" : "/img/emptyCart-white.png"}
          alt="cart-is-empty"
          className="cartIsEmpty__img"
        />
      </div>
     </Zoom> 
     </div>
  );
};
