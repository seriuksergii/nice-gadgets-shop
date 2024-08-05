import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import './Back.scss'

export const Back = () => {
  const { t } = useTranslation();

  return (<div className="back">
    <img src="/img/icons/arrow-right.svg" alt="Arrov right" />
    <Link className="back__text" to={'/'}>
      {t('buttons.back')}
    </Link>
  </div>)
}