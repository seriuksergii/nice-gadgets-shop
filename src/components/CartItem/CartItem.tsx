import styles from './CartItem.module.scss';
import cn from 'classnames';
import deleteIcon from '../../images/icons/delete-icon.svg';
import plusIcon from '../../images/icons/plus-icon.svg';
import minusIcon from '../../images/icons/minus-icon.svg';
import { ProductCart } from '../../types';
import { ActionTypes } from '../../Contexts/reduser';
import { useUserActions } from '../../Contexts/useUserActions';
import { KEY_CART } from '../../services/localStorageHelper';
import { Link } from 'react-router-dom';

interface Props {
  product: ProductCart;
}

export const CartItem: React.FC<Props> = ({ product }) => {
  const { dispatch } = useUserActions();
  const { name, price, category, itemId,  image, quantity, id } = product;
  const total = price * quantity;

  const URL = `/${category}/${itemId}`;

  const handleIncrease = () => {
    dispatch({ type: ActionTypes.increaseQuantity, payload: id });
  };

  const handleDecrease = () => {
    dispatch({ type: ActionTypes.decreaseQuantity, payload: id });
  };

  const handleDeleteItem = () => {
    dispatch({ type: ActionTypes.onDelete, payload: { id: id, key: KEY_CART } });
  };

  return (
    <div className={styles.cartItem}>
      <div className={styles.mainContainer}>
        <button onClick={handleDeleteItem} className={styles.deleteButton}>
          <img src={deleteIcon} alt="Delete" className={styles.deleteButtonIcon} />
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
            <img src={minusIcon} alt="Decrease" className={styles.controlButtonIcon} />
          </button>
          <div className={styles.quantityValueContainer}>
            <p className={styles.quantityValue}>{quantity}</p>
          </div>
          <button onClick={handleIncrease} className={styles.button}>
            <img src={plusIcon} alt="Increase" className={styles.controlButtonIcon} />
          </button>
        </div>
        <h3 className={styles.price}>${total}</h3>
      </div>
    </div>
  );
};
