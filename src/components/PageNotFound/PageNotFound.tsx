import { useTranslation } from "react-i18next";
import "./PageNotFound.scss";


export const PageNotFound = () => {
  const { t } = useTranslation();
  return (
    <div className="pageNotFound__wrapper">
      <div className="pageNotFound">
        <h1 className="pageNotFound__title">{t('page_not_found.message')}</h1>

        <div className="pageNotFound__image-wrapper">
          <img
            src="/src/images/page-not-found.png"
            alt="page-not-found"
            className="pageNotFound__img"
          />
        </div>
      </div>
    </div>
  );
};
