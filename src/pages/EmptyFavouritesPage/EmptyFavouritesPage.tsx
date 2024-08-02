import './EmptyFavouritesPage.scss';

export const EmptyFavouritesPage = () => {
  return (
    <div className="favIsEmpty">
      <h1 className="favIsEmpty__message">Oooops! You favourites is empty!</h1>
      <h2 className="favIsEmpty__advice">Explore our catalog!</h2>

      <div className="favIsEmpty__image-wrapper">
        <img src="/img/emptyFavourites.jpeg" alt="fav-is-empty" className="favIsEmpty__img" />
      </div>
    </div>
  );
};
