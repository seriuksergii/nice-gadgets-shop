import './EmptyFavouritesPage.scss';

export const EmptyFavouritesPage = () => {
  return (
    <div className="favIsEmpty">
      <h1 className="favIsEmpty__message">Favourites is empty</h1>
      <h2 className="favIsEmpty__advice">Explore our catalog to find products</h2>

      <div className="favIsEmpty__image-wrapper">
        <img
          src="/img/empty-favourites-page.png"
          alt="fav-is-empty"
          className="favIsEmpty__img"
        />
      </div>
    </div>
  );
};
