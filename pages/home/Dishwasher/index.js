import Link from "next/link";
import { imageUrls } from "../../../utils/urls";
import { StyledImage } from "../../../components/common/StyledImage";
import { ImageWrapper } from "../../../components/common/ImageWrapper";
import Image from "next/image";


const Dishwasher = ({ show, setHold }) => (
  <ImageWrapper
    $show={show}
    onMouseEnter={() => setHold(true)}
    onMouseLeave={() => setHold(false)}
  >
    <Link
      href="/naprawa-zmywarek"
      title="Serwis zmywarek w Przemyślu"
    >
      <StyledImage>
        <Image
          src={imageUrls.zmywarka}
          alt="Zmywarka - serwis w Przemyślu"
          loading='lazy'
          fill
        />
      </StyledImage>
    </Link>
  </ImageWrapper>
);

export default Dishwasher;