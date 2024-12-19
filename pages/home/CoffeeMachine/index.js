import Link from "next/link";
import { imageUrls } from "../../../utils/urls";
import { ImageWrapper } from "../../../components/common/ImageWrapper";
import { Image } from "../../../components/common/Image";
import { dataForMetaTags } from "../../../utils/dataForMetaTags";

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
      <Image
        src={imageUrls.ekspres}
        alt="Naprawa ekspresów do kawy - serwis ekspresu w Przemyślu"
        loading="lazy"
        width={dataForMetaTags.naprawa_ekspresow.metaTags.imageWidth}
        height={dataForMetaTags.naprawa_ekspresow.metaTags.imageHeight}
        crop={{
          type: 'auto',
          source: true
        }}
      />
    </Link>
  </ImageWrapper>
);

export default CoffeeMachine;