import Link from "next/link";
import { imageUrls } from "../../../utils/urls";
import { ImageWrapper } from "../../../components/common/ImageWrapper";
import { StyledImage } from "../../../components/common/StyledImage";
import Image from "next/image";

const CoffeeMachine = ({ show, setHold }) => (
  <ImageWrapper
    $show={show}
    onMouseEnter={() => setHold(true)}
    onMouseLeave={() => setHold(false)}
  >
    <Link
      href="/naprawa-ekspresow"
      title="Naprawa ekspresów do kawy w Przemyślu"
    >
      <StyledImage>
        <Image
          src={imageUrls.ekspres}
          alt="Naprawa ekspresów do kawy - serwis ekspresu w Przemyślu"
          loading='lazy'
          fill
          style={{
            objectFit: 'contain',
            maxHeight: 'content',
          }}
        />
      </StyledImage>
    </Link>
  </ImageWrapper>
);

export default CoffeeMachine;