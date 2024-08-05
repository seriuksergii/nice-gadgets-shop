import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Back.scss'
import { useTheme } from "../../Contexts/ThemeContext";

export const Back = () => {
  const { t } = useTranslation();
   const { theme } = useTheme();
 const navigate = useNavigate();

  return (
    <div className="back" onClick={() => navigate(-1)}>
      <img
        src={theme === 'light' ? "img/icons/arrow-right.svg" : "img/icons/arrow-left-white.svg"}
        alt="back"
      />
      <span className="back__text">
        {t('buttons.back')}
      </span>
    </div>
  );
}