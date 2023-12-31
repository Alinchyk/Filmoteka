import { Section, ReviewsList, Review, ReviewTitle } from './Reviews.styled';

const MovieReviews = ({ reviews }) => {
  if (!reviews) {
    return;
  }

  return (
    <Section>
      {reviews.length > 0 ? (
        <ReviewsList>
          {reviews.map((review, index) => (
            <Review key={index}>
              <ReviewTitle>Author: {review.author}</ReviewTitle>
              <p>{review.content}</p>
            </Review>
          ))}
        </ReviewsList>
      ) : (
        <p>There are no reviews yet.</p>
      )}
    </Section>
  );
};

export default MovieReviews;
