import React from 'react';
import './TabletsPage.scss';
import { ProductsPage } from '../ProductsPage';
import { useTranslation } from 'react-i18next';

export const TabletsPage: React.FC = () => {
  const { t } = useTranslation();

  return <ProductsPage category="tablets" title={t('tablets_page.title')} />;
};
