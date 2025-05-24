import { Container } from "../../components/common/Container";
import { Title } from "../../components/common/Title";
import { ReviewsContainer } from "../../styles/opinie/OpinieStyled";
import ReviewsItem from "../../components/ReviewsItem";
import { serwis } from "../../utils/serwis";
import { ButtonLink } from "../../components/common/ButtonLink";
import { getRatingProps } from "../../utils/getRatingProps";
import { getReviewsProps } from "../../utils/getReviewsProps";
import MetaTags from "../../components/common/MetaTags";
import { dataForMetaTags } from "../../utils/dataForMetaTags";
import { useRouter } from "next/router";

const Reviews = ({ status, reviews, rating, ratingsTotal }) => {
  const path = useRouter().asPath;

  return (
    <Container>
      <MetaTags
        path={path}
        page={dataForMetaTags.opinie}
        rating={rating}
        ratingsTotal={ratingsTotal}
        reviews={reviews}
      />
      <ReviewsContainer>
        <Title>Opinie Klientów</Title>
        {status === "loading" && <p>Ładowanie opinii z google...</p>}
        {status === "success" && reviews.map((item, index) => (
          <ReviewsItem
            item={item}
            key={item.time}
            reviewIndex={index + 1}
          />
        ))}
        {status === "error" &&
          <>
            <p>Wystąpił błąd podczas ładowania opinii.</p>
            <p> Proszę spróbować ponownie później.</p>
          </>
        }
      </ReviewsContainer>
      {status === "success" && <ButtonLink href={serwis.url.addTestimonial}>
        Wystaw opinię
      </ButtonLink>}
    </Container>
  );
};

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

export default Reviews;