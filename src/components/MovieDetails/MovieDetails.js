import { useLocation, Outlet } from 'react-router-dom';
import {
  Card,
  CardInfo,
  CardImage,
  GoBackLink,
  MovieLink,
  CardText,
  CardTitle,
  ElemTitle,
} from './MovieDetails.styled';

const imgUrl = 'https://image.tmdb.org/t/p/w500';

const MovieDetails = ({ movie, movieId }) => {
  const location = useLocation();
  const { title, poster_path, genres, overview, vote_average } = movie;

  return (
    <>
      <GoBackLink to={location.state.from}>Go Back</GoBackLink>
      <Card>
        <CardImage src={`${imgUrl}${poster_path}`} alt={title} />
        <CardInfo>
          <CardTitle>{title}</CardTitle>

          <ElemTitle>Rating</ElemTitle>
          <CardText>Rating: {vote_average}</CardText>

          <ElemTitle>Overview</ElemTitle>
          <CardText>{overview}</CardText>

          <ElemTitle>Genres</ElemTitle>
          <CardText>
            Genres: {genres.map(genre => genre.name).join(', ')}
          </CardText>
        </CardInfo>
      </Card>

      <CardTitle text="Additional information" />
      <MovieLink to={`/movies/${movieId}/cast`} state={{ ...location.state }}>
        Cast
      </MovieLink>
      <MovieLink
        to={`/movies/${movieId}/reviews`}
        state={{ ...location.state }}
      >
        Reviews
      </MovieLink>

      <Outlet />
    </>
  );
};

export default MovieDetails;
