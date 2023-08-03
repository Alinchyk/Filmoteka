import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getMoviesByName } from 'components/services/moviesApi';
import PaginationButtons from 'components/Pagination/Pagination';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { scrollToTop } from 'components/scroll/scroll';
import { ListLink, Title, Card, Gallery, Poster } from './MoviesSearch.styled';
import SearchForm from 'components/SearchForm/SearchForm';
import cinemaImage from '../../img/cinemaImage.jpg';

const imgUrl = 'https://image.tmdb.org/t/p/w500';

const MoviesSearchFormView = () => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const location = useLocation();
  const navigate = useNavigate();
  const [totalPages, setTotalPages] = useState(0);

  const queryParams = new URLSearchParams(location.search);
  const movieName = queryParams.get('query');

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await getMoviesByName(movieName, currentPage);
        const { results, total_pages } = response;
        setMovies(results);
        setTotalPages(total_pages);
        scrollToTop();
      } catch (error) {
        console.error('Error while searching:', error);
      }
    };

    fetchdata();
  }, [movieName, currentPage]);

  const handlePageChange = pageNumber => {
    setCurrentPage(pageNumber);
    queryParams.set('page', pageNumber);
    navigate(`?${queryParams.toString()}`, { replace: true });
  };

  return (
    <div>
      <SearchForm movieName={movieName} queryParams={queryParams} />

      <>
        {movieName && (
          <>
            <Gallery>
              {movies.map(({ id, title, poster_path }) => (
                <Card key={id}>
                  <ListLink
                    to={`${id}`}
                    state={{ from: location.pathname + location.search }}
                  >
                    <Poster
                      src={
                        poster_path ? `${imgUrl}${poster_path}` : cinemaImage
                      }
                      alt={title}
                    />
                    <Title>{title}</Title>
                  </ListLink>
                </Card>
              ))}
            </Gallery>
            <PaginationButtons
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </>
        )}
        {movieName && movies.length === 0 && <p>No movies found.</p>}
      </>
      <ToastContainer autoClose={3000} />
    </div>
  );
};

export default MoviesSearchFormView;
