import { useLocation, Link } from 'react-router-dom';
import { Title, Card, Gallery, Poster } from './MovieList.styled';

const imgUrl = 'https://image.tmdb.org/t/p/w500';

export default function MoviesList({ movies }) {
  const location = useLocation();

  return (
    <>
      {movies.length > 0 ? (
        <Gallery>
          {movies.map(({ id, title, poster_path }) => (
            <Card key={id}>
              <Link to={`movies/${id}`} state={{ from: location.pathname }}>
                <Poster src={`${imgUrl}${poster_path}`} alt={title} />
                <Title>{title}</Title>
              </Link>
            </Card>
          ))}
        </Gallery>
      ) : (
        <p>No {movies.length > 0 ? 'search' : 'trending'} movies available.</p>
      )}
    </>
  );
}
