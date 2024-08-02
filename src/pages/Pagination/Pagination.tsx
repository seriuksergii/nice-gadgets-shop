import React from 'react';
import './Pagination.scss';
import { calculatePageRange } from '../../services';

interface Props {
  currentPage: number;
  totalProduct: number;
  setCurrentPage:  React.Dispatch<React.SetStateAction<number>>;
}

export const Pagination: React.FC<Props> = ({ currentPage, totalProduct, setCurrentPage }) => {
  const { startPage, endPage } = calculatePageRange(currentPage,  totalProduct);

  const pages = [];
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handlerBack = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handlerNext = () => {
    setCurrentPage((prevPage) => prevPage + 1);
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
        disabled={currentPage === totalProduct}
      ></button>
    </div>
  );
};
