import './ProductList.scss';
import React from 'react';
import { Product } from '../../types';
import { ProductCard } from '../ProductCard';
import { Loader } from '../Loader';

interface Props {
  products: Product[];
  isLoading: boolean;
}

export const ProductList: React.FC<Props> = ({ products, isLoading }) => {
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <ul className="product-list">
          {products.map((product) => (
            <li className="product-list__item" key={product.id}>
              <ProductCard product={product} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
