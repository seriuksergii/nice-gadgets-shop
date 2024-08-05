import React from 'react';
import './Pagination.scss';
import { calculatePageRange } from '../../services';
import { useSearchParams } from 'react-router-dom';
import { SearchParamsType } from '../../types/SearchParamsType';

interface Props {
  totalPages: number;
}

export const Pagination: React.FC<Props> = ({ totalPages }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = +(searchParams.get(SearchParamsType.page) ?? '1');
  const { startPage, endPage } = calculatePageRange(currentPage, totalPages);

  const pages = [];
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  const onPageChange = (page: number) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set(SearchParamsType.page, page.toString());
     setSearchParams(newParams);
      window.scrollTo(0, 0);
  };

  const handlerBack = () => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set(SearchParamsType.page, `${currentPage - 1}`);
     setSearchParams(newParams);
     window.scrollTo(0, 0);
  };

  const handlerNext = () => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set(SearchParamsType.page, `${currentPage + 1}`);
     setSearchParams(newParams);
     window.scrollTo(0, 0);
  };

  return (
    <div className="pagination">
      <button
        className="pagination__button pagination__button--back"
        onClick={handlerBack}
        disabled={currentPage === 1}
      ></button>
      <div className="pagination__pages">
        {pages.map((page) => (
          <button
            className="pagination__button pagination__button--page"
            key={page}
            onClick={() => onPageChange(page)}
            disabled={page === currentPage}
          >
            {page}
          </button>
        ))}
      </div>
      <button
        className="pagination__button pagination__button--next"
        onClick={handlerNext}
        disabled={currentPage === totalPages}
      ></button>
    </div>
  );
};
