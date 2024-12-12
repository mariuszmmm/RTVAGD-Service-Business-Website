import axios from 'axios';
import { reviewUrl } from "../utils/urls";
export const getSharedStaticProps = async () => {
  try {
    const response = await axios(reviewUrl)
    const rating = response.data?.rating || null;
    const ratingAceptable = rating >= 4 ? rating : null
    const test = response.data?.test || null;
    return {
      props: {
        status: 'success',
        rating: ratingAceptable,
        test
      },
    };
  } catch (error) {
    console.error('Error fetching rating:', error);
    return {
      props: {
        status: 'error',
        error: error.message,
        rating: null
      },
    };
  }
};