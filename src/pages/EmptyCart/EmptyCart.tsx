import './EmptyCart.scss';

export const EmptyCart = () => {
  return (
    <div className="cartIsEmpty">
      <h1 className="cartIsEmpty__message">Oooops! You cart is empty!</h1>
      <h2 className="cartIsEmpty__advice">Add your goods!</h2>

      <div className="cartIsEmpty__image-wrapper">
        <img src="/img/emptyCart.png" alt="cart-is-empty" className="cartIsEmpty__img" />
      </div>
    </div>
  );
};
