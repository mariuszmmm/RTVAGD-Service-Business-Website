import Home from './home';
import { getRatingProps } from '../utils/getRatingProps';
import { getReviewsProps } from '../utils/getReviewsProps';

export const getStaticProps = async () => {
  const [ratingProps, reviewsProps] = await Promise.all([
    getRatingProps(),
    getReviewsProps(),
  ]);

  return {
    props: {
      ...ratingProps.props,
      ...reviewsProps.props,
    },
  };
};

export default Home;

