import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import './Back.scss'
import { useTheme } from "../../Contexts/ThemeContext";

export const Back = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();

  return (<div className="back">
    <img
    src={theme === 'light' ? "img/icons/arrow-right.svg" : "img/icons/arrow-left-white.svg"}/>
    <Link className="back__text" to={'/'}>
      {t('buttons.back')}
    </Link>
  </div>)
}