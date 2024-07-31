const MAX_PAGE_TO_SHOW = 4;

export const calculatePageRange = (currentPage: number, totalPages: number) => {
  let startPage = Math.max(currentPage - Math.floor(MAX_PAGE_TO_SHOW / 2), 1);
  let endPage = startPage + MAX_PAGE_TO_SHOW - 1;

  if (endPage > totalPages) {
    endPage = totalPages;
    startPage = Math.max(endPage - MAX_PAGE_TO_SHOW + 1, 1);
  }

  return { startPage, endPage };
};