import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getTVShowCast } from 'components/services/moviesApi';
import TVShowCast from 'components/Cast/TVshowCast';

const TVshowCastView = () => {
  const { showId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cast = await getTVShowCast(showId);
        setCast(cast);
      } catch (error) {
        console.error('Error while fetching cast:', error);
      }
    };

    fetchData();
  }, [showId]);

  return <TVShowCast cast={cast} />;
};

export default TVshowCastView;
