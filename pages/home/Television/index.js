import Link from "next/link";
import { imageUrls } from "../../../utils/urls";
import { ImageWrapper } from "../../../components/common/ImageWrapper";
import { StyledImage } from "../../../components/common/StyledImage";
import Image from "next/image";

const Television = ({ show, left, setHold }) => (
  <ImageWrapper
    $show={show}
    onMouseEnter={() => setHold(true)}
    onMouseLeave={() => setHold(false)}
    $left={left}
  >
    <Link
      href="/naprawa-telewizorow"
      title="Serwis telewizorów w Przemyślu"
    >
      <StyledImage>
        <Image
          src={imageUrls.telewizor}
          alt="Telewizor - serwis w Przemyślu"
          loading='lazy'
          fill
          srcset={`${imageUrls.telewizor_300} 500w,
          ${imageUrls.telewizor} 1000w`}
          sizes="(max-width: 500px) 500px, 1000px"
        />
      </StyledImage>
    </Link>
  </ImageWrapper>
);

export default Television;