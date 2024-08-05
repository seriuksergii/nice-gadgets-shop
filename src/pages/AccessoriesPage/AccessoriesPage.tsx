import './AccessoriesPage.scss';
import { ProductsPage } from '../ProductsPage';
import { useTranslation } from 'react-i18next';

export const AccessoriesPage: React.FC = () => {
  const { t } = useTranslation();

  return <ProductsPage category={'accessories'} title={t('accessories_page.title')} />;
};
