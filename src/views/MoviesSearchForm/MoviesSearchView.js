import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { getMoviesByName } from 'components/services/moviesApi';
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
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const imgUrl = 'https://image.tmdb.org/t/p/w500';

export default function MoviesSearchFormView() {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const fullPath = location.pathname + location.search;
  const movieName = searchParams.get('query');

  const handleSubmit = e => {
    e.preventDefault();
    const query = e.target.movie.value;
    if (query.trim() === '') {
      toast.error('Enter the query correctly...', { theme: 'colored' });
      return;
    }
    setSearchParams(query !== '' ? { query } : {});
    e.target.movie.value = '';
  };

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const movies = await getMoviesByName(movieName);
        setMovies(movies.results);
      } catch (error) {
        console.error('Error while searching:', error);
      }
    };

    fetchdata();
  }, [movieName]);

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
          <Gallery>
            {movies.map(({ id, title, name, poster_path }) => (
              <Card key={id}>
                <ListLink to={`${id}`} state={{ from: fullPath }}>
                  <Poster src={`${imgUrl}${poster_path}`} alt={title} />
                  <Title>{title}</Title>
                </ListLink>
              </Card>
            ))}
          </Gallery>
        )}
        {movieName && movies.length === 0 && <p>No movies found.</p>}
      </>
      <ToastContainer autoClose={3000} />
    </div>
  );
}
