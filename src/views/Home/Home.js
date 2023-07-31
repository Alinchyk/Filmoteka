import React, { useEffect, useState, useCallback } from 'react';
import { getTrendingMovies } from 'components/services/moviesApi';
import MoviesList from 'components/MoviesList/MoviesList';
import PaginationButtons from 'components/Pagination/Pagination';
import { HomeTitle } from './Home.styled';

export default function Home() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchData = useCallback(async () => {
    try {
      const response = await getTrendingMovies(currentPage);
      setTrendingMovies(response.results);
      setTotalPages(response.total_pages);
    } catch (error) {
      console.error('Error while fetching trending movies:', error);
    }
  }, [currentPage]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      <HomeTitle>Trending today</HomeTitle>

      <MoviesList movies={trendingMovies} />
      <PaginationButtons
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </>
  );
}
