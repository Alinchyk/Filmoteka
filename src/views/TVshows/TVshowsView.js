import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Title, Card, Gallery, Poster, TVshowTitle } from './TVshows.styled';
import { getTrendingTV } from 'components/services/moviesApi';
import PaginationButtons from 'components/Pagination/Pagination';
import { scrollToTop } from 'components/scroll/scroll';

const imgUrl = 'https://image.tmdb.org/t/p/w500';

const TVshowsView = () => {
  const [data, setData] = useState(null);
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await getTrendingTV(currentPage);
        setData(response);
        setTotalPages(response.total_pages);
        scrollToTop();
      } catch (error) {
        console.error('Error while fetching trending TV:', error);
      }
    };
    fetchdata();
  }, [currentPage]);

  return (
    <>
      <TVshowTitle>Trending today</TVshowTitle>
      {data && (
        <Gallery>
          {data.results.map(({ id, title, poster_path }) => (
            <Card key={id}>
              <Link to={`/tv/${id}`} state={{ from: location.pathname }}>
                <Poster src={`${imgUrl}${poster_path}`} alt={title} />
                <Title>{title}</Title>
              </Link>
            </Card>
          ))}
        </Gallery>
      )}
      <PaginationButtons
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </>
  );
};

export default TVshowsView;
