import React from 'react';
import { Link } from 'react-router-dom';

import './ShopByCategory.scss';
import { CategoryType } from '../../types/CategoryType';

interface ProductType {
  category: string;
}

interface ShopByCategoryProps {
  products: ProductType[];
}

export const ShopByCategory: React.FC<ShopByCategoryProps> = ({ products }) => {
  const categories: CategoryType[] = [
    {
      name: 'Mobile Phones',
      src: '/img/Images shop by category/Phones.png',
      linkTo: '/phones',
    },
    {
      name: 'Tablets',
      src: '/img/Images shop by category/Tablets.png',
      linkTo: '/tablets',
    },
    {
      name: 'Accessories',
      src: '/img/Images shop by category/Accessories.png',
      linkTo: '/accessories',
    },
  ];

  return (
    <div className="shop">
      <div className="shop__content">
        <h2 className="shop__title title--h2">Shop by Category</h2>
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
                {`${products.filter((item) => item.category === linkTo.slice(1)).length} models`}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
