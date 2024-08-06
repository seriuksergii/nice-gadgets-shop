import './PageNotFound.scss';

export const PageNotFound = () => {
  return (
    <div className="pageNotFound__wrapper">
      <div className="pageNotFound">
        <div className="pageNotFound__image-wrapper">
          <img src="/img/404 people.png" alt="page-not-found" className="pageNotFound__img" />
        </div>
      </div>
    </div>
  );
};
