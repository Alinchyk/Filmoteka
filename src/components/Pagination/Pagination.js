import React from 'react';
import { Button, PaginationButtonsContainer } from './Pagination.styled';

export default function PaginationButtons({
  currentPage,
  totalPages,
  onPageChange,
}) {
  const handlePageChange = pageNumber => {
    onPageChange(pageNumber);
  };

  const getPageNumbers = () => {
    const visiblePages = 10;
    const halfVisiblePages = Math.floor(visiblePages / 2);

    if (totalPages <= visiblePages) {
      return Array.from({ length: totalPages }, (_, index) => index + 1);
    }

    const firstPage = Math.max(1, currentPage - halfVisiblePages);
    const lastPage = Math.min(totalPages, currentPage + halfVisiblePages);

    let pageNumbers = Array.from(
      { length: lastPage - firstPage + 1 },
      (_, index) => firstPage + index
    );

    if (firstPage > 1) {
      if (firstPage > 2) {
        pageNumbers = [1, '...', ...pageNumbers];
      } else {
        pageNumbers = [1, ...pageNumbers];
      }
    }

    if (lastPage < totalPages) {
      if (lastPage < totalPages - 1) {
        pageNumbers = [...pageNumbers, '...', totalPages];
      } else {
        pageNumbers = [...pageNumbers, totalPages];
      }
    }

    return pageNumbers;
  };

  return (
    <PaginationButtonsContainer>
      <Button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Prev
      </Button>
      {getPageNumbers().map((pageNumber, index) => (
        <Button
          key={index}
          onClick={() => handlePageChange(pageNumber)}
          className={currentPage === pageNumber ? 'active' : ''}
          disabled={pageNumber === '...'}
        >
          {pageNumber}
        </Button>
      ))}
      <Button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </Button>
    </PaginationButtonsContainer>
  );
}
