import Link from "next/link";
import { imageUrls } from "../../../utils/urls";
import { ImageWrapper } from "../../../components/common/ImageWrapper";
import { StyledImage } from "../../../components/common/StyledImage";
import Image from "next/image";

const WashingMachine = ({ show, left, setHold }) => {
  return (
    <ImageWrapper
      $show={show}
      onMouseEnter={() => setHold(true)}
      onMouseLeave={() => setHold(false)}
      $left={left}
    >
      <Link
        href="/naprawa-pralek"
        title="Naprawa pralek w Przemyślu"
      >
        <StyledImage>
          <Image
            src={imageUrls.pralka}
            alt="Naprawa pralek - serwis pralki w Przemyślu"
            loading='lazy'
            fill
          />
        </StyledImage>
      </Link>
    </ImageWrapper>
  );
};
export default WashingMachine