import Link from "next/link";
import { imageUrls } from "../../../utils/urls";
import { Image } from "../../../components/common/Image";
import { ImageWrapper } from "../../../components/common/ImageWrapper";
import { dataForMetaTags } from "../../../utils/dataForMetaTags";

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
      <Image
        src={imageUrls.zmywarka}
        alt="Serwis zmywarek w Przemyślu"
        loading="lazy"
        width={dataForMetaTags.naprawa_zmywarek.metaTags.imageWidth}
        height={dataForMetaTags.naprawa_zmywarek.metaTags.imageHeight}
        crop={{
          type: 'auto',
          source: true
        }}
      />
    </Link>
  </ImageWrapper>
);

export default Dishwasher;