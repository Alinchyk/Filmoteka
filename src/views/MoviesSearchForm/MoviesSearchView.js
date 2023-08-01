import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getMoviesByName } from 'components/services/moviesApi';
import PaginationButtons from 'components/Pagination/Pagination';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  SearchButton,
  SearchForm,
  SearchInput,
  ListLink,
  Title,
  Card,
  Gallery,
  Poster,
} from './MoviesSearch.styled';

const imgUrl = 'https://image.tmdb.org/t/p/w500';

export default function MoviesSearchFormView() {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const location = useLocation();
  const navigate = useNavigate();
  const [totalPages, setTotalPages] = useState(0);

  const queryParams = new URLSearchParams(location.search);
  const movieName = queryParams.get('query');

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const query = e.target.movie.value;
    if (query.trim() === '') {
      toast.error('Enter the query correctly...', { theme: 'colored' });
      return;
    }
    queryParams.set('query', query);
    queryParams.delete('page');
    navigate(`?${queryParams.toString()}`, { replace: true });
    e.target.movie.value = '';
  };

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
      <SearchForm onSubmit={handleSubmit}>
        <SearchInput
          type="text"
          name="movie"
          placeholder="Enter the movie..."
          autoComplete="off"
          defaultValue={movieName}
        />
        <SearchButton type="submit" variant="outlined" size="small">
          Search
        </SearchButton>
      </SearchForm>

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
                    <Poster src={`${imgUrl}${poster_path}`} alt={title} />
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
}
