import Link from "next/link";
import { appUrls, imageUrls } from "../../../utils/urls";
import { StyledImage } from "../../../components/common/StyledImage";
import { ImageWrapper } from "../../../components/common/ImageWrapper";
import { dataForMetaTags } from "../../../utils/dataForMetaTags";
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
          alt="Serwis zmywarek w Przemyślu"
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

export default Dishwasher;