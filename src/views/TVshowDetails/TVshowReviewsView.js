import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getTVShowReviews } from 'components/services/moviesApi';
import TVshowReviews from 'components/Reviews/TVshowReviews';

const TVshowReviewsView = () => {
  const { showId } = useParams();
  const [showReviews, setshowReviews] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const reviews = await getTVShowReviews(showId);
        setshowReviews(reviews);
      } catch (error) {
        console.error('Error while fetching reviews:', error);
      }
    };

    fetchData();
  }, [showId]);

  return <TVshowReviews reviews={showReviews} />;
};

export default TVshowReviewsView;
