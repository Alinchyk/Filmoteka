import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getTVShowById } from 'components/services/moviesApi';
import TVshowDetails from 'components/TVshowsDetails/TVshowDetails';
import Loader from 'components/Loader/Loader';

const TVshowDetailsView = () => {
  const { showId } = useParams();
  const [show, setShow] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const details = await getTVShowById(showId);
        setShow(details);
      } catch (error) {
        console.error('Error while fetching TV show details:', error);
      }
    };

    fetchMovieDetails();
  }, [showId]);

  return (
    <>{show ? <TVshowDetails show={show} showId={showId} /> : <Loader />}</>
  );
};

export default TVshowDetailsView;
