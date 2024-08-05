import {Zoom } from 'react-awesome-reveal';
import './EmptyFavouritesPage.scss';
import { useTranslation } from 'react-i18next';

export const EmptyFavouritesPage = () => {
  const { t } = useTranslation();
  return (
     <div className="favIsEmpty">
       <Zoom>
      <h1 className="favIsEmpty__message">{t('favourites.message')}</h1>
      <h2 className="favIsEmpty__advice">{t('favourites.advice')}</h2>

      <div className="favIsEmpty__image-wrapper">
        <img src="/img/EmptyFavourites.png" alt="fav-is-empty" className="favIsEmpty__img" />
           </div>
           </Zoom >
    </div>
  );
};
