import { Section } from "../../components/common/Section";
import { Title } from "../../components/common/Title";
import { ReviewsContainer } from "../../styles/opinie/OpinieStyled";
import ReviewsItem from "./ReviewsItem";
import { serwis } from "../../utils/serwis";
import { StyledButtonLink } from "../../components/common/Buttons";
import HelmetForReviews from "./HelmetForReviews";
import axios from 'axios';

const Reviews = ({ reviews, status }) => {
  return (
    <Section>
      <HelmetForReviews />
      <ReviewsContainer>
        <Title>Opinie Klientów</Title>
        {status === "success" && reviews.map((item, index) => (
          <ReviewsItem
            item={item}
            key={index}
            api={status === "success"}
          />
        ))}
        {status === "error" && <p>Wystąpił błąd podczas ładowania opinii</p>}
        {status !== "success" && status !== "error" && <p>Ładowanie opinii z google...</p>}
      </ReviewsContainer>
      {status === "success" && <StyledButtonLink href={serwis.url.addTestimonial}>
        Wystaw opinię
      </StyledButtonLink>}
    </Section>
  );
};

export async function getStaticProps() {
  const url = 'https://naprawaprzemysl.pl/api/update_reviews.php';

  try {
    const response = await axios(url)
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
      },
    };
  }
}

export default Reviews;