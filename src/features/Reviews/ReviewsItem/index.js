import { Time } from "../../../common/Time";
import { Stars } from "./Stars";
import {
  ItemWrapper,
  Header,
  Photo,
  Author,
  Data,
} from "./styled";
import { Text } from "../../../common/Text";
import { getContentForReview } from "./getContentForReview";

export const ReviewsItem = ({ item }) => (
  <ItemWrapper itemScope itemType="https://schema.org/Review">
    <div itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
      <meta itemProp="ratingValue" content={item.rating} />
      <meta itemProp="bestRating" content="5" />
    </div>
    <div itemProp="itemReviewed" itemScope itemType="https://schema.org/LocalBusiness">
      <meta itemProp="name" content="Serwis RTV i AGD" />
      <meta itemProp="description" content="Naprawa pralek, zmywarek, ekspresów do kawy oraz telewizorów" />
    </div>
    <div itemProp="service" itemScope itemType="https://schema.org/Service">
      <meta itemProp="name" content={getContentForReview(item.text)} />
      <meta itemProp="serviceType" content={`Profesjonalna ${getContentForReview(item.text)} - Szybko i solidnie`} />
    </div>
    <Header itemProp="author" itemScope itemType="https://schema.org/Person">
      <Photo
        itemProp="image"
        src={item.profile_photo_url || ""}
        loading="lazy"
      />
      <Data >
        <Author itemProp="name">{item.author_name}</Author>
        <Time time={item.time} />
      </Data>
    </Header>
    <Stars rating={item.rating || 0} text={item.text || ""} />
    <Text itemProp="reviewBody">{item.text}</Text>
  </ItemWrapper>
);