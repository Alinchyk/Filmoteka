import React, { useEffect, useState } from 'react';
import { getTrendingMovies } from 'components/services/moviesApi';
import MoviesList from 'components/MoviesList/MoviesList';
import PaginationButtons from 'components/Pagination/Pagination';
import { scrollToTop } from 'components/scroll/scroll';
import { HomeTitle } from './Home.styled';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await getTrendingMovies(currentPage);
        setTrendingMovies(response.results);
        setTotalPages(response.total_pages);
        scrollToTop();
      } catch (error) {
        console.error('Error while fetching trending movies:', error);
      }
    };

    fetchdata();
  }, [currentPage]);

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
};

export default Home;
