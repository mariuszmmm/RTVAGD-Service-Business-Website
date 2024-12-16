import axios from 'axios';
import { reviewUrl } from "./urls";
export const getReviewsProps = async () => {
  try {
    const response = await axios(reviewUrl)
    const reviews = response.data?.reviews || [];

    if (!Array.isArray(reviews)) {
      throw new Error('Invalid response from Google Places API');
    };

    let newReviews = [...reviews];
    if (reviews.length < 5) {
      let reserveReviews = serwis.reviews.filter((item) =>
        !newReviews.find((review) => review.text === item.text));
      let reserveReviewsIndex = 0;

      while (newReviews.length < 5 && reserveReviewsIndex < reserveReviews.length) {
        newReviews = [...newReviews, reserveReviews[reserveReviewsIndex]];
        reserveReviewsIndex++;
      };
    }

    return {
      props: {
        status: 'success',
        reviews: newReviews,
      },
    };
  } catch (error) {
    console.error('Error fetching reviews:', error);
    return {
      props: {
        status: 'error',
        reviews: [],
        error: error.message,
      },
    };
  }
};