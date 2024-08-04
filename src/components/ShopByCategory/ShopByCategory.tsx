import React from 'react';
import { Link } from 'react-router-dom';

import './ShopByCategory.scss';
import { CategoryType } from '../../types/CategoryType';
import { useTranslation } from 'react-i18next';

interface ProductType {
  category: string;
}

interface ShopByCategoryProps {
  products: ProductType[];
}

export const ShopByCategory: React.FC<ShopByCategoryProps> = ({ products }) => {
  const { t } = useTranslation();
  const categories: CategoryType[] = [
    {
      name: t('categories.mobile'),
      src: '/img/Images shop by category/Phones.png',
      linkTo: '/phones',
    },
    {
      name: t('categories.tablet'),
      src: '/img/Images shop by category/Tablets.png',
      linkTo: '/tablets',
    },
    {
      name: t('categories.accessories'),
      src: '/img/Images shop by category/Accessories.png',
      linkTo: '/accessories',
    },
  ];

  return (
    <div className="shop">
      <div className="shop__content">
        <h2 className="shop__title title--h2">{t('categories.title')}</h2>
        <div className="shop__categories" data-cy="categoryLinksContainer">
          {categories.map(({ name, src, linkTo }) => (
            <Link to={linkTo} className="shop__category" key={linkTo}>
              <div className="shop__category-img-box">
                <img
                  src={src}
                  alt={name}
                  className={`shop__category-img shop__category-img--${linkTo.slice(1)}`}
                />
              </div>
              <h3 className="shop__category-title">{name}</h3>
              <span className="shop__category-count">
                {`${products.filter((item) => item.category === linkTo.slice(1)).length} ${t('categories.models')}`}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
