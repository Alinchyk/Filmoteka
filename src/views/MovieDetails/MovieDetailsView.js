import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieById } from 'components/services/moviesApi';
import MovieDetails from 'components/MovieDetails/MovieDetails';
import Loader from 'components/Loader/Loader';

const MovieDetailsView = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const details = await getMovieById(movieId);
        setMovie(details);
      } catch (error) {
        console.error('Error while fetching movie details:', error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  return (
    <>{movie ? <MovieDetails movie={movie} movieId={movieId} /> : <Loader />}</>
  );
};

export default MovieDetailsView;
