import './PhonePage.scss';
import { ProductsPage } from '../ProductsPage';
import { useTranslation } from 'react-i18next';

export const PhonePage: React.FC = () => {
  const { t } = useTranslation();
  return <ProductsPage category={'phones'} title={t('phone_page.title')} />;
};
