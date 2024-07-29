import { useState } from 'react';
import styles from './CartItem.module.scss';
import cn from 'classnames';
import plusIcon from '../../images/icons/plus-icon.svg';
import deleteIcon from '../../images/icons/delete-icon.svg';
import minusIcon from '../../images/icons/minus-icon.svg';
import iphneIcon from '../../../public/img/phones/apple-iphone-11-pro/gold/00.webp'

export const CartItem = () => {
const [quantity, setQuantity] = useState(1);

const handleIncrease = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const handleDecrease = () => {
    setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };
   


  return (
    <div className={styles.cartItem}>
      <div className={styles.mainContainer}>
           <button
              className={styles.deleteButton}>
          <img
            src={deleteIcon}
            alt="Delete"
            className={styles.deleteButtonIcon}
          />
        </button>
           
          <img
            src={iphneIcon}
            alt='ipone'
            className={styles.image}
          />
        
           <p className={styles.productName}>
            Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)
           </p>
      </div>
      <div className={styles.quantityControl}>
        <div className={styles.quantity}>
          <button
             onClick={handleDecrease}
            disabled={quantity <= 1}
            className={cn(styles.button, {
              [styles.disabled]:  quantity <= 1,
            })}
          >
            <img
              src={minusIcon}
              alt="Decrease"
              className={styles.controlButtonIcon}
            />
          </button>
          <div className={styles.quantityValueContainer}>
                 <p className={styles.quantityValue}>{quantity}</p>
          </div>
          <button
            onClick={handleIncrease}
            className={styles.button}
          >
            <img
              src={plusIcon}
              alt="Increase"
              className={styles.controlButtonIcon}
            />
          </button>
        </div>
           <h3 className={styles.price}>
              $985
           </h3>
      </div>
    </div>
  );
};


