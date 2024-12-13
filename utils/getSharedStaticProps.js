import axios from 'axios';
import { reviewUrl } from "../utils/urls";
export const getSharedStaticProps = async () => {
  try {
    const response = await axios(reviewUrl)
    const ratingsTotal = response.data?.user_ratings_total || null;
    const rating = response.data?.rating || null;
    const ratingAceptable = rating >= 4 ? rating : null
    return {
      props: {
        status: 'success',
        ratingsTotal,
        rating: ratingAceptable
      },
    };
  } catch (error) {
    console.error('Error fetching rating:', error);
    return {
      props: {
        status: 'error',
        error: error.message,
        ratingsTotal: null,
        rating: null
      },
    };
  }
};