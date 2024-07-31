import React, { useState } from 'react';
import { Pagination } from '../Pagination';



export const PhonePage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  

  return (
    <div>
      <Pagination currentPage={currentPage} totalPages={15} setCurrentPage={setCurrentPage} />
    </div>
  );
};