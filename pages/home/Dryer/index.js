import Link from "next/link";
import { imageUrls } from "../../../utils/urls";
import { ImageWrapper } from "../../../components/common/ImageWrapper";
import { Image } from "../../../components/common/Image";
import { dataForMetaTags } from "../../../utils/dataForMetaTags";

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
        <Image
          src={imageUrls.suszarka}
          alt="Naprawa suszarek w Przemyślu"
          loading="lazy"
          width={dataForMetaTags.naprawa_suszarek.metaTags.imageWidth}
          height={dataForMetaTags.naprawa_suszarek.metaTags.imageHeight}
          crop={{
            type: 'auto',
            source: true
          }}
        />
      </Link>
    </ImageWrapper>
  );
};

export default Dryer;