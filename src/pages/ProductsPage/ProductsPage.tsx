import './ProductsPage.scss';
import React, { useEffect, useState } from 'react';
import { Category, Product } from '../../types';
import { getProducts } from '../../services';
import { Container } from '../../components/Container';

import { SortOptions } from '../../types/SortOptions';
import { PerPageCount } from '../../types/PerPageCount';
import { getProductSort } from '../../services/getProductSort';
import { ProductList } from '../../components/ProductList/ProductList';
import { ProductPageTop } from '../../components/ProductPageTop';
import { useSearchParams } from 'react-router-dom';
import { SortBy } from '../../components/SortBy/SortBy';
import { Pagination } from '../../components/Pagination/Pagination';
import { SearchParamsType } from '../../types/SearchParamsType';
import { Fade } from 'react-awesome-reveal';

interface Props {
  category: Category;
  title: string;
}

export const ProductsPage: React.FC<Props> = ({ category, title }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState<Product[] | []>([]);
  const [error, setError] = useState('');

  const sortOption = (searchParams.get(SearchParamsType.sort) as keyof typeof SortOptions) || 'age';
  const countPerPage = (searchParams.get(SearchParamsType.perPage) as PerPageCount) || PerPageCount.All;
  const currentPage = +(searchParams.get(SearchParamsType.page) ?? '1');

  const count = products.length;

  useEffect(() => {
    setIsLoading(true);
    getProducts(category)
      .then(setProducts)
      .catch(() => setError('Something is wrong'))
      .finally(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    const newParams = new URLSearchParams(searchParams);
    countPerPage === PerPageCount.All
      ? newParams.delete(SearchParamsType.page)
      : newParams.set(SearchParamsType.page, `${currentPage}`);
    setSearchParams(newParams);
  }, [countPerPage]);

  const sortedProducts = getProductSort(products, sortOption);

  let currentPageProducts = sortedProducts;

  if (countPerPage !== PerPageCount.All) {
    const endProductIndex = +currentPage * Number(countPerPage);
    const startProductIndex = endProductIndex - Number(countPerPage);
    currentPageProducts = sortedProducts.slice(startProductIndex, endProductIndex);
  }

  const isPagination = Number(countPerPage) < count && countPerPage !== PerPageCount.All;

  return (
     <Container>
      <section className="product-page">
        <Fade direction='up' triggerOnce={true}>
        <ProductPageTop count={count} title={title} />
        <SortBy />
       </Fade>
        <div className="product-page__main">
          {!!error && <p>Something is wrong</p>}
          <ProductList products={currentPageProducts} isLoading={isLoading} />
        </div>

        {isPagination && (
          <div className="product-page__pagination">
            <Pagination totalPages={Math.ceil(count / Number(countPerPage))} />
          </div>
        )}
           </section>
    </Container>
  );
};
