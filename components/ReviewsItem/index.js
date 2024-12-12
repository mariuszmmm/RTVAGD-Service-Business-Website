import Time from "../common/Time";
import { Stars } from "../common/Stars";
import {
  ItemWrapper,
  Header,
  Author,
  Data,
  Avatar,
} from "./styled";
import { Text } from "../common/Text";

const ReviewsItem = ({ item }) => (
  <ItemWrapper>
    <Header>
      <Avatar
        itemProp="image"
        src={item?.profile_photo_url}
        alt="Foto"
        loading="lazy"
      />
      <Data >
        <Author>{item?.author_name}</Author>
        <Time time={item?.time} />
      </Data>
    </Header>
    <Stars rating={item?.rating || 0} />
    <Text itemProp="reviewBody" $forReviews>{item?.text}</Text>
  </ItemWrapper>
);

export default ReviewsItem;