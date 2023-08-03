import React from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import {
  GoBackLink,
  Card,
  CardInfo,
  CardImage,
  CardTitle,
  CardText,
  ElemTitle,
  TVshowLink,
} from './TVshowsDetails.styled';

const imgUrl = 'https://image.tmdb.org/t/p/w500';

const TVshowDetails = ({ show, showId }) => {
  const location = useLocation();
  const { title, poster_path, genres, overview, vote_average } = show;

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
      <TVshowLink to={`/tv/${showId}/cast`} state={{ ...location.state }}>
        Cast
      </TVshowLink>
      <TVshowLink to={`/tv/${showId}/reviews`} state={{ ...location.state }}>
        Reviews
      </TVshowLink>

      <Outlet />
    </>
  );
};

export default TVshowDetails;
