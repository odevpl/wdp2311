import { useState } from 'react';

function useLimitVisibleProducts(products = [], limit = 6) {
  const [currentPage, setCurrentPage] = useState(0);

  const startIndex = currentPage * limit;
  const endIndex = startIndex + limit;

  const allowNext = endIndex < products.length;
  const allowPrev = startIndex > 0;

  return {
    visibleProducts: products.slice(startIndex, endIndex),
    nextPage: () => allowNext && setCurrentPage(currentPage + 1),
    prevPage: () => allowPrev && setCurrentPage(currentPage - 1),
  };
}

export default useLimitVisibleProducts;
