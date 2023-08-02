import React from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import {
  Card,
  CardInfo,
  CardImage,
  GoBackLink,
  TVshowLink,
  CardText,
  CardTitle,
  ElemTitle,
} from './TVshowsDetails.styled';

const imgUrl = 'https://image.tmdb.org/t/p/w500';

const TVshowDetails = ({ showData }) => {
  const location = useLocation();
  const { name, poster_path, genres, overview, vote_average } = showData;

  return (
    <>
      <GoBackLink to={location.state.from}>Go Back</GoBackLink>
      <Card>
        <CardImage src={`${imgUrl}${poster_path}`} alt={name} />
        <CardInfo>
          <CardTitle>{name}</CardTitle>

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
      <TVshowLink to="./cast" state={{ ...location.state }}>
        Cast
      </TVshowLink>
      <TVshowLink to="./reviews" state={{ ...location.state }}>
        Reviews
      </TVshowLink>

      <Outlet />
    </>
  );
};

export default TVshowDetails;
