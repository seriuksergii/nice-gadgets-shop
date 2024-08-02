import './ProductsPage.scss';
import React, { useEffect, useState } from 'react';
import { Pagination } from '../Pagination';
import { Category, Product } from '../../types';
import { getProducts } from '../../services';
import { Container } from '../../components/Container';
import { ProductPageTop } from '../ProductPageTop/ProductPageTop';
import { SortBy } from '../SortBy/SortBy';
import { SortOptions } from '../../types/SortOptions';
import { PagesCount } from '../../types/PagesCount';
import { getProductSort } from '../../services/getProductSort';
import { ProductList } from '../ProductList/ProductList';

interface Props {
  category: Category;
  title: string;
}

export const ProductsPage: React.FC<Props> = ({ category, title }) => {
  const [sortOption, setSortOption] = useState<SortOptions>(SortOptions.Newest);
  const [countPerPage, setCountPages] = useState<PagesCount>(PagesCount.Eight);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState<Product[] | []>([]);
  const [error, setError] = useState('');

  const count = products.length;

  useEffect(() => {
    setIsLoading(true);
    getProducts(category)
      .then(setProducts)
      .catch(() => setError('Something is wrong'))
      .finally(() => setIsLoading(false));
  }, []);

  const onSetSortOptions = (option: SortOptions) => {
    setSortOption(option);
  };

  const onSetCountPages = (value: PagesCount) => {
    setCountPages(value);
  };

  const sortedProducts = getProductSort(products, sortOption);

  let currentPageProducts = sortedProducts;

  if (countPerPage !== PagesCount.All) {
    const endProductIndex = currentPage * Number(countPerPage);
    const startProductIndex = endProductIndex - Number(countPerPage);
    currentPageProducts = sortedProducts.slice(startProductIndex, endProductIndex);
  }

  const isPagination = Number(countPerPage) < count && countPerPage !== PagesCount.All;

  return (
    <Container>
      <section className="product-page">
        <ProductPageTop count={count} title={title} />
        <SortBy
          option={sortOption}
          countPerPage={countPerPage}
          onSetSortOption={onSetSortOptions}
          onSetCountPages={onSetCountPages}
        />

        <div className="product-page__main">
          {!!error && <p>Something is wrong</p>}
          <ProductList products={currentPageProducts} isLoading={isLoading} />
        </div>

        {isPagination && (
          <div className="product-page__pagination">
            <Pagination
              currentPage={currentPage}
              totalProduct={count}
              setCurrentPage={setCurrentPage}
            />
          </div>
        )}
      </section>
    </Container>
  );
};