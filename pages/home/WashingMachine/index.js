import Link from "next/link";
import { imageUrls } from "../../../utils/urls";
import { ImageWrapper } from "../../../components/common/ImageWrapper";
import { Image } from "../../../components/common/Image";
import { dataForMetaTags } from "../../../utils/dataForMetaTags";

const WashingMachine = ({ show, left, setHold }) => {
  return (
    <ImageWrapper
      $show={show}
      onMouseEnter={() => setHold(true)}
      onMouseLeave={() => setHold(false)}
      $left={left}
    >
      <Link href="/naprawa-pralek">
        <Image
          src={imageUrls.pralka}
          alt="naprawa pralek"
          loading='lazy'
width={dataForMetaTags.naprawa_pralek.metaTags.imageWidth}
height={dataForMetaTags.naprawa_pralek.metaTags.imageHeight}
          crop={{
            type: 'auto',
            source: true
          }}
        />
      </Link>
    </ImageWrapper>
  );
};
export default WashingMachine