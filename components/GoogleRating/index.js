import { Stars } from "../../components/common/Stars";
import { imageUrls } from "../../utils/urls";
import { ImageWrapper, StyledLink, Text, Wrpper } from "./styled";
import Image from "next/image";

export const GoogleRating = ({ rating, hidden }) => (
  <>
    {rating > 4 &&
      <Wrpper
        $hidden={hidden}
        id="rating"
        title="Poznaj opinie naszych zadowolonych klientów! ⭐⭐⭐⭐⭐"
      >
        <StyledLink href="/opinie/">
          <ImageWrapper>
            <Image
              src={imageUrls.logoGoogle}
              alt="google logo"
              loading="lazy"
              fill
            />
          </ImageWrapper>
          <Text>Google Rating {rating}</Text >
          <Stars rating={5} center />
        </StyledLink>
      </Wrpper>}
  </>
);
