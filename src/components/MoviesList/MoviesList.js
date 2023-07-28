import { useLocation, Link } from 'react-router-dom';
import { Title, Card, Gallery } from './MovieList.styled';

const imgUrl = 'https://image.tmdb.org/t/p/w500';

export default function MoviesList({ movies }) {
  const location = useLocation();

  return (
    <>
      {movies && (
        <Gallery>
          {movies.map(({ id, title, poster_path }) => (
            <li key={id}>
              <Link to={`movies/${id}`} state={{ from: location.pathname }}>
                <Card>
                  <img
                    src={`${imgUrl}${poster_path}`}
                    alt={title}
                    width="300"
                    height="450"
                  />
                  <Title>{title}</Title>
                </Card>
              </Link>
            </li>
          ))}
        </Gallery>
      )}
    </>
  );
}
