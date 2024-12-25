import Link from "next/link";
import { imageUrls } from "../../../utils/urls";
import { ImageWrapper } from "../../../components/common/ImageWrapper";
import { StyledImage } from "../../../components/common/StyledImage";
import Image from "next/image";

const Dryer = ({ show, left, setHold }) => {
  return (
    <ImageWrapper
      $show={show}
      onMouseEnter={() => setHold(true)}
      onMouseLeave={() => setHold(false)}
      $left={left}
    >
      <Link
        href="/naprawa-suszarek"
        title="Naprawa suszarek w Przemyślu"
      >
        <StyledImage>
          <Image
            src={imageUrls.suszarka}
            alt="Naprawa suszarek - serwis suszarki w Przemyślu"
            loading='lazy'
            fill
          />
        </StyledImage>
      </Link>
    </ImageWrapper>
  );
};

export default Dryer;