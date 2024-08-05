/* eslint-disable react/prop-types */
import styles from './CartItem.module.scss';
import cn from 'classnames';
import { ProductCart } from '../../types';
import { useTheme } from '../../Contexts/ThemeContext';
import { ActionTypes } from '../../Contexts/reduser';
import { useUserActions } from '../../Contexts/useUserActions';
import { Link } from 'react-router-dom';

interface Props {
  product: ProductCart;
}

export const CartItem: React.FC<Props> = ({ product }) => {
  const { theme } = useTheme();
  const { dispatch } = useUserActions();
  const { name, price, category, itemId,  image, quantity} = product;
  const total = price * quantity;

  const URL = `/${category}/${itemId}`;

  const handleIncrease = () => {
    dispatch({ type: ActionTypes.increaseQuantity, payload: itemId });
  };

  const handleDecrease = () => {
    dispatch({ type: ActionTypes.decreaseQuantity, payload: itemId });
  };

  const handleDeleteItem = () => {
    dispatch({ type: ActionTypes.onDeleteCart, payload: itemId });
  };

  return (
    <div className={styles.cartItem}>
      <div className={styles.mainContainer}>
        <button onClick={handleDeleteItem} className={styles.deleteButton}>
          <img
            src={theme === 'light' ? '/img/icons/delete.svg' : '/img/icons/delete-white.svg'}
            alt="Delete"
            className={styles.deleteButtonIcon}
          />
        </button>
        <Link to={URL} className={styles.cartLink}>
          <img src={image} alt={name} className={styles.image} />

          <p className={styles.productName}>{name}</p>
        </Link>
      </div>

      <div className={styles.quantityControl}>
        <div className={styles.quantity}>
          <button
            onClick={handleDecrease}
            disabled={quantity <= 1}
            className={cn(styles.button, {
              [styles.disabled]: quantity <= 1,
            })}
          >
            <img
              src={theme === 'light' ? '/img/icons/minus.svg' : '/img/icons/minus-white.svg'}
              alt="Decrease"
              className={styles.controlButtonIcon}
            />
          </button>
          <div className={styles.quantityValueContainer}>
            <p className={styles.quantityValue}>{quantity}</p>
          </div>
          <button onClick={handleIncrease} className={styles.button}>
            <img
              src={theme === 'light' ? '/img/icons/plus.svg' : '/img/icons/plus-white.svg'}
              alt="Increase"
              className={styles.controlButtonIcon}
            />
          </button>
        </div>
        <h3 className={styles.price}>${total}</h3>
      </div>
    </div>
  );
};
